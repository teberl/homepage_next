import * as React from "react";
import { useState, useContext } from "react";
import { ITodo } from "./interfaces";
import { TodosCtx } from "./context";

const ENTER_KEY_CODE = 13;

interface IProps {
  todo?: ITodo;
  done?(): void;
}

const TodoTextInput: React.FunctionComponent<IProps> = ({
  todo,
  done: callback,
}) => {
  const [localText, setLocalText] = useState((todo && todo.text) || "");

  const { addTodo, updateTodo } = useContext(TodosCtx);

  const placeholder = !todo ? "What needs to be done?" : undefined;

  const done = callback || (() => {});

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
      className="flex-1 text-m mx-2 text-center text-gray-700 font-bold"
      type="text"
      placeholder={placeholder}
      autoFocus
      value={localText}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
};

export default TodoTextInput;
