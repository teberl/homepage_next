import * as React from "react";
import "../css/main.css";
import { AppProps } from "next/app";

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
