import { Button, Navbar, ThemeProvider, useTheme } from "../MTailwind";
import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar";
import SecondSection from "./components/SecondSection";
import Sectionvideo from "./components/Sectionvideo";


export default function Home() {
  return (
    <div className="bg-black h-full w-full overflow-hidden ">
      <div className="  relative top-5 z-10">
        <MenuBar />
      </div>
      <div className="bg-[url(/Backgroundimage.png)] bg-contain" >
        <Sectionvideo />
      </div>

      <div className=" w-full flex justify-center">
        <SecondSection />
      </div>
      <Footer />
    </div>
  );
}
