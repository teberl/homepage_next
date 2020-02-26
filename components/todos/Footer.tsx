import classnames from "classnames";
import { useRouter } from "next/router";
import React, { useContext } from "react";
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

  return todos.length === 0 ? null : (
    <footer className="flex justify-between px-10 mb-5">
      <span className="flex-none text-left w-1/3">
        <strong>{activeCount || "No"}</strong>{" "}
        {`item${activeCount === 1 ? "" : "s"}`} left
      </span>
      <ul className="flex flex-none justify-center w-1/3">
        {filtersWithTitle.map(({ title, filter }) => (
          <li key={filter} className="mx-2">
            <FilterLink active={isActive(filter)} filter={filter}>
              {title}
            </FilterLink>
          </li>
        ))}
      </ul>
      {
        <button
          className={classnames("flex-none text-right w-1/3", {
            invisible: activeCount === todos.length
          })}
          onClick={() => {}}
        >
          Clear completed
        </button>
      }
    </footer>
  );
};

export default Footer;
