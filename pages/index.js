import HeroSection from "./components/HeroSection";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/3d2f093b4a.js"
        crossorigin="anonymous"
        strategy="lazyOnload"
      ></Script>
      <HeroSection />
    </>
  );
}
