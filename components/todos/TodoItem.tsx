import * as React from "react";
import classnames from "classnames";
import { useState, useContext } from "react";
import { ITodo } from "./interfaces";
import { TodosCtx } from "./context";
import TodoTextInput from "./TodoTextInput";

interface IProps {
  todo: ITodo;
}

const TodoItem: React.FunctionComponent<IProps> = ({ todo }) => {
  const [isEditing, setEditing] = useState(false);
  const { toggleTodo, deleteTodo } = useContext(TodosCtx);

  let element;
  if (isEditing) {
    element = <TodoTextInput todo={todo} done={() => setEditing(false)} />;
  } else {
    element = (
      <>
        <input
          className="flex-none"
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleTodo(todo.id)}
        />
        <span
          className={classnames("flex-1 text-m mx-2 text-gray-700 font-bold", {
            "line-through text-gray-500": todo.isCompleted
          })}
          onDoubleClick={() => setEditing(true)}
        >
          {todo.text}
        </span>

        <button className="flex-none" onClick={() => deleteTodo(todo.id)}>
          ❌
        </button>
      </>
    );
  }

  return <li className="flex justify-between w-full px-10">{element}</li>;
};

export default TodoItem;
