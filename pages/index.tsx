import HeroSection from "./home/HeroSection";
import EventSlider from "./home/EventSlider";
import Articels from "./home/Articels";
import Program from "./home/Program";

export default function Home() {
  return (
    <>
      <EventSlider />
      <HeroSection />
      {/* <Articels /> */}
      <Program />
    </>
  );
}
