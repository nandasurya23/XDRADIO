import HeroSection from "./home/HeroSection";
import EventSlider from "./home/EventSlider";
import Articels from "./home/Articels";
import Program from "./home/Program";
import Gallery from "./home/Gallery";

export default function Home() {
  return (
    <>
      <EventSlider />
      <HeroSection />
      <Program />
      <Articels />
      <Gallery />
    </>
  );
}
