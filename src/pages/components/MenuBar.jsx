import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import Button from "./Button";

const MenuBar = () => {
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
    
      <div className="bg-white shadow-xl  sticky top-0 w-full p-5 z-10">
        <div className="flex justify-between">
          <div>
            <TbGridDots
              onClick={() => setSidebar(!sidebar)}
              className="text-black text-2xl cursor-pointer "
            />
          </div>
          <div className="flex gap-10">
            <div
              className="flex items-center gap-2 cursor-pointer relative"
              onMouseEnter={() => setHoveredDropdown("products")}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <span className="text-black font-semibold">Products</span>
              <FaAngleDown
                className={`text-black transform ${
                  hoveredDropdown === "products"
                    ? "rotate-180 transition duration-300"
                    : "transition duration-300"
                }`}
              />
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer relative"
              onMouseEnter={() => setHoveredDropdown("caseStudies")}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <span className="text-black font-semibold">Case Studies</span>
              <FaAngleDown
                className={`text-black transform ${
                  hoveredDropdown === "caseStudies"
                    ? "rotate-180 transition duration-300"
                    : "transition duration-300"
                }`}
              />
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer relative"
              onMouseEnter={() => setHoveredDropdown("resources")}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <span className="text-black font-semibold">Resources</span>
              <FaAngleDown
                className={`text-black transform ${
                  hoveredDropdown === "resources"
                    ? "rotate-180 transition duration-300"
                    : "transition duration-300"
                }`}
              />
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer relative"
              onMouseEnter={() => setHoveredDropdown("company")}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <span className="text-black font-semibold">Company</span>
              <FaAngleDown
                className={`text-black transform ${
                  hoveredDropdown === "company"
                    ? "rotate-180 transition duration-300"
                    : "transition duration-300"
                }`}
              />
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer relative"
              onMouseEnter={() => setHoveredDropdown("menu")}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <span className="text-black font-semibold">Blog</span>
              {/* <FaAngleDown
              className={`text-black transform ${
                hoveredDropdown === "menu" ? "rotate-180 transition duration-300" : "transition duration-300"
              }`}
            /> */}
            </div>
          </div>
          <div>
            <Button label="DOCS"></Button>
          </div>
        </div>
      </div>
      {sidebar && (
        <div className="w-full absolute flex h-[100vh] ease-in transition duration-300 z-[20] top-0">
          <div className={`bg-white h-[100vh] w-[18rem] ${sidebar ? 'sidebar-visible' : 'sidebar-hidden'}`}>
            <Button label="close" onClick={() => setSidebar(!sidebar)} />
          </div>
          <div className={`w-full bg-black h-[100vh] ${sidebar ? 'overlay-visible' : 'overlay-hidden'}`}>hello</div>
        </div>
      )}
    </>
  );
};

export default MenuBar;
