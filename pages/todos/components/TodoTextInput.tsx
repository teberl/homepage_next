import classnames from "classnames";
import React, { useState, useContext } from "react";

import { ITodo } from "../interfaces";
import { Context as TodoContext } from "../todos-context";

const ENTER_KEY_CODE = 13;

interface IProps {
  todo?: ITodo;
  done(): void;
}

const TodoTextInput: React.FunctionComponent<IProps> = ({ todo, done }) => {
  const [localText, setLocalText] = useState((todo && todo.text) || "");

  const { addTodo, updateTodo } = useContext(TodoContext);

  const placeholder = !todo ? "What needs to be done!" : undefined;

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const text = event.currentTarget.value;
    if (event.which === ENTER_KEY_CODE) {
      if (!todo) {
        addTodo(text);
        setLocalText("");
      } else {
        updateTodo(todo.id, text);
      }
      done();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    var value = event.target.value;
    setLocalText(value);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (todo) {
      const text = event.target.value.trim();
      updateTodo(todo.id, text);
      done();
    }
  };

  return (
    <input
      className={classnames({
        "new-todo": !todo
      })}
      type="text"
      placeholder={placeholder}
      autoFocus={true}
      value={localText}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
};

export default TodoTextInput;
