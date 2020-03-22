import React, { useEffect, useState, useMemo } from "react";
import io from "socket.io-client";
import classnames from "classnames";
import { IUser, IChatItem } from "./interfaces";

import { emitNewMessage, emitAddUser } from "../../components/chat/channels";

interface IProps {
  user: IUser;
}

const ChatMain: React.FunctionComponent<IProps> = ({ user }) => {
  const socket = useMemo(() => io(), []);

  const [localText, setLocalText] = useState<string>("");
  const [chatItems, setChatItems] = useState<IChatItem[]>([]);

  useEffect(() => {
    socket.emit(emitAddUser, user.name);

    return () => {
      socket.off(emitNewMessage);
      socket.off(emitAddUser);
      socket.close();
    };
  }, []);

  useEffect(() => {
    socket.on(emitAddUser, (username: string) => {
      setChatItems([
        ...chatItems,
        {
          type: "user",
          username,
          text: `${new Date().toLocaleTimeString()}: ${username} joined`,
        },
      ]);
    });

    socket.on(emitNewMessage, (message: IChatItem) => {
      setChatItems([...chatItems, message]);
    });
  }, [chatItems]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (localText.length > 0) {
      const newMessage = {
        type: "msg",
        text: localText.trim(),
        username: user.name,
      };
      setChatItems([...chatItems, newMessage]);
      socket.emit(emitNewMessage, newMessage);
      setLocalText("");
    }
  };

  return (
    <div className="z-10 bg-white w-full relative flex flex-col">
      <div className="h-screen-7/10 flex-initial flex flex-col flex-col-reverse mx-2 overflow-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray">
        <ul>
          {chatItems.map(({ type, text, username }, index) => (
            <li
              key={`msg-${index}`}
              className={classnames({ "text-right": type === "user" })}
            >
              {`${username && type === "msg" ? username + ": " : ""}${text}`}
            </li>
          ))}
        </ul>
      </div>
      <form className="flex-initial flex mx-2 my-4" onSubmit={handleSubmit}>
        <input
          id="m"
          autoFocus
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setLocalText(event.target.value)
          }
          value={localText}
          className="flex-1 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        />
        <button
          className="flex-initial w-3/12 ml-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatMain;
