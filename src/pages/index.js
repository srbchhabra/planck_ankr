import { Button, Navbar, ThemeProvider, useTheme } from "../MTailwind";
import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar";
import SecondSection from "./components/SecondSection";
import Sectionvideo from "./components/Sectionvideo";

export default function Home() {
  return (
    <div className="bg-[#e2fffd] h-full w-full">
      <div className="sticky top-0 z-10">
        <MenuBar />
      </div>

      <Sectionvideo />
      <div className="p-10 w-full flex justify-center" >
        <SecondSection />
        
      </div>
      <Footer/>
    </div>
  );
}
