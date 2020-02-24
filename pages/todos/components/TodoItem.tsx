import React from "react";
import classnames from "classnames";
import { useState, useContext } from "react";
import { ITodo } from "../interfaces";
import { Context } from "../todos-context";

interface IProps {
  todo: ITodo;
}

const TodoItem: React.FunctionComponent<IProps> = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const { toggleTodo, deleteTodo } = useContext(Context);

  //   const handleSave = (id, text) => {
  //     if (text.length === 0) {
  //       deleteTodo(id);
  //     } else {
  //       editTodo(id, text);
  //     }
  //     setEditing(false);
  //   };

  let element;
  if (editing) {
    element = null;
  } else {
    element = (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleTodo(todo.id)}
        />
        <label onDoubleClick={() => setEditing(!editing)}>{todo.text}</label>
        <button className="destroy" onClick={() => deleteTodo(todo.id)} />
      </div>
    );
  }

  return (
    <li className={classnames({ completed: todo.isCompleted, editing })}>
      {element}
    </li>
  );
};

export default TodoItem;
