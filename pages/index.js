import HeroSection from "./components/HeroSection";
import Head from "next/head";

export default function Home() {
  console.log(process.env.MONGODB_URI);

  return (
    <>
      <Head>
        <title>Pustika | A community of Bibliophiles.</title>
      </Head>

      <HeroSection />
    </>
  );
}
