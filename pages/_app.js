import "../styles/globals.css";
import Navbar from "./components/Navbar";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { useContext } from "react";
import Context from "./../pages/context/Context";
import ContextComponent from "./context/ContextComponent";

import React from "react";
config.autoAddCss = false;
function MyApp({ Component, pageProps }) {
  // const states = useContext(Context);
  // console.log(states);
  return (
    <>
      <ContextComponent>
        <Navbar />

        <Component {...pageProps} />
      </ContextComponent>
    </>
  );
}

export default MyApp;
