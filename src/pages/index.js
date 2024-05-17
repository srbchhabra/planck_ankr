import { Button, Navbar, ThemeProvider, useTheme } from "../MTailwind";
import MenuBar from "./components/MenuBar";
import SecondSection from "./components/SecondSection";
import Sectionvideo from "./components/Sectionvideo";

export default function Home() {
  return (
    <div className="bg-white h-full w-full">
      <div className="sticky top-0 z-50">
        <MenuBar />
      </div>

      <Sectionvideo />
      <div className="p-10 w-full flex justify-center" >
        <SecondSection />
      </div>
    </div>
  );
}
