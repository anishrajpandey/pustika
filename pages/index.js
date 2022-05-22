import HeroSection from "./components/HeroSection";
import Head from "next/head";
import main from "../models/order";
const mongoose = require("mongoose");

export default function Home() {
  // console.log(main);
  return (
    <>
      <Head>
        <title>Pustika | A community of Bibliophiles.</title>
      </Head>

      <HeroSection />
    </>
  );
}
