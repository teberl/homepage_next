import React from "react";
import Head from "next/head";
import classnames from "classnames";

import Nav from "./Nav";

type Props = {
  title?: string;
  fitScreen?: boolean;
};

const layoutStyle: React.CSSProperties = {};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "teberl",
  fitScreen = false,
}) => (
  <div className={classnames({ "h-screen": fitScreen })}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="The homepage from Thomas Eberl. The website is my little space in the big world wirde web. Containing information about me, my interests and hobbys."
      />
      <link href="/favicon.ico" rel="icon" type="image/x-icon" />
    </Head>
    <header>
      <Nav />
    </header>
    {children}
    <footer className="z-0 fixed inset-x-0 bottom-0 my-2 text-center text-xs text-gray-800 cursor-default">
      <strong>v1</strong> Munich 2020
    </footer>
  </div>
);

export default Layout;
