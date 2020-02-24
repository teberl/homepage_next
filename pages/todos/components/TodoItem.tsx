import classnames from "classnames";
import React, { useState, useContext } from "react";

import { ITodo } from "../interfaces";
import { Context } from "../todos-context";
import TodoTextInput from "./TodoTextInput";

interface IProps {
  todo: ITodo;
}

const TodoItem: React.FunctionComponent<IProps> = ({ todo }) => {
  const [isEditing, setEditing] = useState(false);
  const { toggleTodo, deleteTodo } = useContext(Context);

  let element;
  if (isEditing) {
    element = <TodoTextInput todo={todo} done={() => setEditing(false)} />;
  } else {
    element = (
      <>
        <label className="block text-gray-500 font-bold" />
        <input
          className="mr-2 leading-tight"
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className="text-m" onDoubleClick={() => setEditing(!isEditing)}>
          {todo.text}
        </span>

        <button className="ml-2" onClick={() => deleteTodo(todo.id)}>
          ❌
        </button>
      </>
    );
  }

  return (
    <li className={classnames({ "line-through": todo.isCompleted })}>
      {element}
    </li>
  );
};

export default TodoItem;
