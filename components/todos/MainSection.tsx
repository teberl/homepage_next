import React, { useContext } from "react";

import { TodoFilters } from "./enums";
import { TodosCtx } from "./context";
import TodoList from "./TodoList";
import TodoTextInput from "./TodoTextInput";

const MainSection: React.FunctionComponent = () => {
  const filter = TodoFilters.SHOW_ALL;
  const { todos, completeAll } = useContext(TodosCtx);
  const todosCount = todos.length;
  const completedCount = todos.filter(todo => todo.isCompleted).length;

  return (
    <section role="main" className="w-full text-center">
      <div className="max-w-4xl flex items-center h-auto flex-wrap mx-auto my-10">
        <div className="w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
          <h1 className="text-3xl font-bold pt-8 lg:pt-0">Todo-MVC</h1>
          <div className="mx-auto mb-10 w-4/5 pt-3 border-b-2 border-blue-500 opacity-25" />
          <div className="flex justify-between w-full px-10">
            <input
              className="flex-none"
              type="checkbox"
              checked={todosCount > 0 && todosCount === completedCount}
              onChange={completeAll}
            />
            <TodoTextInput done={() => {}} />
            <div className="flex-none invisible">❌</div>
          </div>
          <TodoList filter={filter} />
          {/* {!!todosCount && (
            <Footer
              completedCount={completedCount}
              activeCount={todosCount - completedCount}
              onClearCompleted={clearCompleted}
              filter={filter}
            />
          )} */}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
