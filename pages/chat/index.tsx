import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ChatMain from "../../components/chat/ChatMain";
import Login from "../../components/chat/Login";
import { IUser } from "../../components/chat/interfaces";

const storageKey = "user";

const Chat: NextPage = () => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const storedUser = window.sessionStorage.getItem(storageKey);
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleSetUser = (name: string) => {
    const newUser = { name };
    setUser(newUser);
    window.sessionStorage.setItem(storageKey, JSON.stringify(newUser));
  };

  return (
    <Layout fitScreen>
      {user ? <ChatMain user={user} /> : <Login onSubmit={handleSetUser} />}
    </Layout>
  );
};

export default Chat;
