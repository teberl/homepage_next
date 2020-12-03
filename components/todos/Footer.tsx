import classnames from "classnames";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { TodosCtx } from "./context";
import { TodoFilters } from "./enums";
import FilterLink from "./FilterLink";

const filtersWithTitle = [
  {
    title: "All",
    filter: TodoFilters.SHOW_ALL,
  },
  {
    title: "Active",
    filter: TodoFilters.SHOW_ACTIVE,
  },
  {
    title: "Completed",
    filter: TodoFilters.SHOW_COMPLETED,
  },
];

const Footer: React.FunctionComponent = () => {
  const { query } = useRouter();
  const { todos, deleteCompleted } = useContext(TodosCtx);

  const isActive = (filter: TodoFilters) =>
    filter === (query.filter || TodoFilters.SHOW_ALL);

  const activeCount = todos.filter((todo) => !todo.isCompleted).length;

  return todos.length === 0 ? null : (
    <footer className="flex flex-col lg:px-10 my-5 lg:flex-row lg:justify-between">
      <span className="lg:flex-none lg:text-left lg:w-1/3 m-auto">
        <strong>{activeCount || "No"}</strong>{" "}
        {`item${activeCount === 1 ? "" : "s"}`} left
      </span>
      <ul className="flex flex-row lg:flex-none lg:justify-center lg:w-1/3 mx-auto my-2">
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
          className={classnames("lg:flex-none lg:text-right lg:w-1/3 m-auto", {
            invisible: activeCount === todos.length,
          })}
          onClick={deleteCompleted}
        >
          Clear completed
        </button>
      }
    </footer>
  );
};

export default Footer;
