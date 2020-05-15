import * as React from "react";
import Nav from "./Nav";
import Head from "next/head";

type Props = {
  title?: string;
};

const layoutStyle: React.CSSProperties = {};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "teberl",
}) => (
  <div style={layoutStyle}>
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
    <footer className="mb-2 text-center text-xs text-gray-800 cursor-default">
      <strong>v1</strong> Munich 2020
    </footer>
  </div>
);

export default Layout;
