import * as React from "react";
import { AppProps } from "next/app";
import "../css/main.css";
import "../css/normalize.css";

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
