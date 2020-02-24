import React from "react";
import { useContext } from "react";
import { TodoFilters } from "../enums";
import { Context } from "../todos-context";
import TodoItem from "./TodoItem";

interface IProps {
  filter: TodoFilters;
}

const TodoList: React.FunctionComponent<IProps> = ({ filter }) => {
  const { todos } = useContext(Context);

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
