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
      <a
        className={classnames({ "text-blue-700": active })}
        style={{ cursor: "pointer" }}
      >
        {children}
      </a>
    </Link>
  );
};

export default FilterLink;
