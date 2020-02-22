import * as React from "react";

import Nav from "./Nav";
import Head from "next/head";

type Props = {
  title?: string;
};

const layoutStyle: React.CSSProperties = {};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title"
}) => (
  <div style={layoutStyle}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Nav />
    </header>
    {children}
    <footer className="mb-2 text-center text-xs text-gray-600 hover:text-gray-800">
      <strong>v1</strong> Munich 2020
    </footer>
  </div>
);

export default Layout;
