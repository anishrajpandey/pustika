import HeroSection from "./components/HeroSection";
import Head from "next/head";
import { connectToDatabase } from "../mongoDB/lib/mongodb";
export default function Home() {
  // connectToDatabase();
  return (
    <>
      <Head>
        <title>Pustika | A community of Bibliophiles.</title>
      </Head>

      <HeroSection />
    </>
  );
}
