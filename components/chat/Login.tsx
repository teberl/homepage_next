import React, { useState } from "react";

interface IProps {
  onSubmit(name: string): void;
}

const Login: React.FunctionComponent<IProps> = ({ onSubmit }) => {
  const [localText, setLocalText] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLocalText(event.target.value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (localText) onSubmit(localText.trim());
  };

  return (
    <div>
      <div className="text-gray-700 max-w-sm rounded overflow-hidden shadow-lg mx-auto mt-20 p-4">
        <h3 className="font-bold text-xl mb-2">Welcome,</h3>
        <p className="text-base">
          this is very simple chat example implemented to get a feeling for
          using{" "}
          <a className="underline" href="https://socket.io/get-started/chat/">
            socket.io
          </a>{" "}
          in combination with{" "}
          <a
            className="underline"
            href="https://nextjs.org/learn/basics/getting-started"
          >
            next.js
          </a>
          .
        </p>
        <p className="mt-2 text-sm">
          <span className="underline font-bold">Please be aware:</span> The
          messages are not stored anyware and your username will be stored
          inside your browser <code>sessionStorage</code>.
        </p>
      </div>
      <form
        className="absolute inset-x-0 bottom-0 w-full px-auto pb-10 bg-white"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center border-b border-b-2 border-blue-800 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            value={localText}
            onChange={handleChange}
            placeholder="Your Nickname"
            aria-label="Nickname"
          />
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Join
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
