import Head from "next/head";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Image
        src={"/book-images/How to Win Friends and Influence People.webp"}
        layout={"fill"}
      ></Image>
    </>
  );
}
