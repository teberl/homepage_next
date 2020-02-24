import React from "react";
import { TodoFilters } from "../enums";
import TodoList from "./TodoList";
import TodoTextInput from "./TodoTextInput";

const MainSection: React.FunctionComponent = () => {
  const filter = TodoFilters.SHOW_ALL;

  return (
    <section role="main" className="w-full text-center">
      <div className="max-w-4xl flex items-center h-auto flex-wrap mx-auto my-10">
        <div className="w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
          <h1 className="text-3xl font-bold pt-8 lg:pt-0">Todo-MVC</h1>
          <div className="mx-auto w-4/5 pt-3 border-b-2 border-blue-500 opacity-25"></div>
          {/* {!!todosCount && (
            <span>
              <input
                className="toggle-all"
                type="checkbox"
                checked={completedCount === todosCount}
                readOnly
              />
              <label onClick={handleCompleteAllClick} />
            </span>
          )} */}
          <TodoTextInput done={() => {}} />
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
