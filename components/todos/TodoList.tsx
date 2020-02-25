import * as React from "react";
import { useContext } from "react";
import { useRouter } from "next/router";
import { TodosCtx } from "./context";
import TodoItem from "./TodoItem";
import { ITodo } from "./interfaces";
import { TodoFilters } from "./enums";

const TodoList: React.FunctionComponent = () => {
  const { query } = useRouter();
  const { todos } = useContext(TodosCtx);
  const filter = (query.filter || TodoFilters.SHOW_ALL) as TodoFilters;
  return (
    <ul id="todoList" className="my-5">
      {getFilteredTodos(todos, filter).map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

function getFilteredTodos(todos: Array<ITodo>, filter: TodoFilters) {
  switch (filter) {
    case TodoFilters.SHOW_COMPLETED:
      return todos.filter(t => t.isCompleted);
    case TodoFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.isCompleted);
    case TodoFilters.SHOW_ALL:
      return todos;
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
}

export default TodoList;
