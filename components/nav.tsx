import { useState } from "react";
import Link from "next/link";
import { NextPage } from "next";

const links = [
  { href: "/", label: "Home" },
  { href: "about", label: "About" },
];

const Nav: NextPage = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap border-solid border-b border-gray-600 p-6">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
          <a className="font-semibold text-xl tracking-tight" href="/">
            teberl
          </a>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsHidden(!isHidden)}
            id="nav-button"
            className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600 hover:text-gray-800 hover:border-gray-800"
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
                <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4">
                  {label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
