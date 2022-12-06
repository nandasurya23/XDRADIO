import Best_Products from "./home/Best_Products";
import Featured from "./home/Featured";
import Navbar from "./components/Navbar";
import HeroSection from "./home/HeroSection";
import Catalog from "./home/Catalog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Featured />
      <Best_Products />
      <Catalog />
      <Footer />
    </>
  );
}
