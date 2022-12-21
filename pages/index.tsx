import Best_Products from "./home/Best_Products";
import Featured from "./home/Featured";
import HeroSection from "./home/HeroSection";
import Catalog from "./home/Catalog";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Featured />
      <Best_Products />
      <Catalog />
    </>
  );
}
