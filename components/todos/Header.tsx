import React, { useContext } from "react";
import { TodosCtx } from "./context";
import TodoTextInput from "./TodoTextInput";

const Header: React.FunctionComponent = () => {
  const { todos, completeAll } = useContext(TodosCtx);
  const todosCount = todos.length;
  const completedCount = todos.filter((todo) => todo.isCompleted).length;
  return (
    <div className="flex justify-between w-full px-10">
      <input
        className="flex-none"
        type="checkbox"
        checked={todosCount > 0 && todosCount === completedCount}
        onChange={completeAll}
      />
      <TodoTextInput />
    </div>
  );
};

export default Header;
