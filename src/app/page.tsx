import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import About from "@/components/sections/About";
import ScrapBuying from "@/components/sections/ScrapBuying";
import Batteries from "@/components/sections/Batteries";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <About />
      <ScrapBuying />
      <Batteries />
      <Gallery />
      <Contact />
    </>
  );
}
