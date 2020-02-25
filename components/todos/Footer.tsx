import * as React from "react";
import { useContext } from "react";
import { useRouter } from "next/router";
import { TodosCtx } from "./context";
import { TodoFilters } from "./enums";
import FilterLink from "./FilterLink";

const filtersWithTitle = [
  {
    title: "All",
    filter: TodoFilters.SHOW_ALL
  },
  {
    title: "Active",
    filter: TodoFilters.SHOW_ACTIVE
  },
  {
    title: "Completed",
    filter: TodoFilters.SHOW_COMPLETED
  }
];

const Footer: React.FunctionComponent = () => {
  const { query } = useRouter();
  const { todos } = useContext(TodosCtx);

  const isActive = (filter: TodoFilters) =>
    filter === (query.filter || TodoFilters.SHOW_ALL);

  const activeCount = todos.filter(todo => !todo.isCompleted).length;
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount || "No"}</strong>{" "}
        {`item${activeCount === 1 ? "" : "s"}`} left
      </span>
      <ul className="flex justify-center">
        {filtersWithTitle.map(({ title, filter }) => (
          <li key={filter} className="mx-2">
            <FilterLink active={isActive(filter)} filter={filter}>
              {title}
            </FilterLink>
          </li>
        ))}
      </ul>
      {activeCount !== todos.length && (
        <button className="clear-completed" onClick={() => {}}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default Footer;
