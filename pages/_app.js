import "../styles/globals.css";
import Navbar from "./components/Navbar";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

import ContextComponent from "./context/ContextComponent";

import React from "react";
config.autoAddCss = false;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ContextComponent>
        <Navbar url={process.env.PAGE_URL} />
        <Component {...pageProps} />
      </ContextComponent>
    </>
  );
}

export default MyApp;
