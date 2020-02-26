import React from "react";
import { TodosCtxProvider } from "./context";
import Header from "./Header";
import Footer from "./Footer";
import TodoList from "./TodoList";

const TodoMain: React.FunctionComponent = () => (
  <TodosCtxProvider>
    <section role="main" className="w-full text-center">
      <div className="max-w-4xl flex items-center h-auto flex-wrap mx-auto my-10">
        <div className="w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
          <h1 className="text-3xl font-bold pt-8 lg:pt-0">Todo-MVC</h1>
          <div className="mx-auto mb-10 w-4/5 pt-3 border-b-2 border-blue-500 opacity-25" />
          <Header />
          <TodoList />
          <Footer />
        </div>
      </div>
    </section>
  </TodosCtxProvider>
);

export default TodoMain;
