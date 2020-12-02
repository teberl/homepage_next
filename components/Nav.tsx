import * as React from "react";
import { useState } from "react";
import Link from "next/link";

const Nav: React.FunctionComponent = () => {
  const [isHidden, setIsHidden] = useState(true);

  const links = [
    { href: "/", label: "Home" },
    { href: "todos", label: "Todo • MVC" },
    { href: "about", label: "About" },
  ];

  return (
    <nav className="flex items-center justify-between flex-wrap border-solid border-b border-gray-600 lg:mx-16 p-6">
      <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
        <a className="font-semibold text-xl tracking-tight" href="/">
          teberl
        </a>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsHidden(!isHidden)}
          id="nav-button"
          className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-600"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        id="nav-menu"
        className={`${
          isHidden ? "hidden" : ""
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          {links.map(({ href, label }) => (
            <Link key={`${href}${label}`} href={href}>
              <span className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-blue-700 mr-4">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
