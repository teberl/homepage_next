import * as React from "react";
import classnames from "classnames";
import { TodoFilters } from "./enums";
import Link from "next/link";

interface IProps {
  active: boolean;
  filter: TodoFilters;
}

const FilterLink: React.FunctionComponent<IProps> = ({
  active,
  children,
  filter,
}) => {
  const href = { pathname: "/todos" };
  if (filter !== TodoFilters.SHOW_ALL) {
    Object.assign(href, { query: { filter } });
  }
  return (
    <Link href={href}>
      <span
        className={classnames("cursor-pointer", { "text-blue-700": active })}
      >
        {children}
      </span>
    </Link>
  );
};

export default FilterLink;
