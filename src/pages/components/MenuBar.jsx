import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import Button from "./Button";
import { RxCross1 } from "react-icons/rx";
import { IoMdDownload } from "react-icons/io";
import { MdDeveloperMode } from "react-icons/md";
import { MdRocketLaunch } from "react-icons/md";
import { MdOutlineTravelExplore } from "react-icons/md";
import { MdMarkChatUnread } from "react-icons/md";
import { SiGoogledocs } from "react-icons/si";
import Image from "next/image";

const MenuBar = () => {
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [sidebar, setSidebar] = useState(false);
  const [poducts, setProducts] = useState(false);
  const [pln, setPln] = useState(false);

  return (
    <>
      <div className="bg-white shadow-xl  sticky top-0 w-full p-3 z-10">
        <div className="flex justify-between">
          <div className="flex gap-10 items-center">
            {sidebar ? (
              <RxCross1
                onClick={() => setSidebar(!sidebar)}
                className="text-black  text-2xl cursor-pointer "
              />
            ) : (
              <TbGridDots
                onClick={() => setSidebar(!sidebar)}
                className={`${
                  sidebar ? "rotate-90 transition-all" : ""
                }text-black text-2xl cursor-pointer `}
              />
            )}
            <Image src={"/logo-cropped.svg"} height={50} width={100}></Image>
          </div>
          <div className="flex gap-10">
            <div
              className="flex items-center gap-2 cursor-pointer relative"
              onMouseEnter={() => {
                setHoveredDropdown("products"), setProducts(true),setPln(false);
              }}
              // onMouseLeave={() => setHoveredDropdown(null)}
            >
              <span className={`text-black font-semibold ${hoveredDropdown=="products" && 'text-teal-300'} `}>Products</span>
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
              onMouseEnter={() => {
                setHoveredDropdown("pln"), setPln(true) ,setProducts(false);
              }}
              // onMouseLeave={() => setHoveredDropdown(null)}
            >
              <span className={`text-black font-semibold ${hoveredDropdown=="pln" && 'text-teal-300'} `}>$PLN Token</span>
              <FaAngleDown
                className={`text-black transform ${
                  hoveredDropdown === "pln"
                    ? "rotate-180 transition duration-300"
                    : "transition duration-300"
                }`}
              />
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer relative"
              onMouseEnter={() => {setPln(false) ,setProducts(false)}}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <span className="text-black font-semibold hover:text-teal-300">Resources</span>
              {/* <FaAngleDown
                className={`text-black transform ${
                  hoveredDropdown === "resources"
                    ? "rotate-180 transition duration-300"
                    : "transition duration-300"
                }`}
              /> */}
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
            <Button label="Build AI App "></Button>
          </div>
        </div>
      </div>

      <div
        className={` ${
          sidebar
            ? "w-full overflow-hidden absolute flex transition-all z-[20] "
            : " w-0 z-0 transition-all"
        }`}
      >
        <div
          className={`  ${
            sidebar
              ? " p-5 w-[25rem] bg-white h-[92vh] flex flex-col gap-8 overflow-hidden   "
              : " hidden w-0"
          }`}
        >
          {/* <Button label="close" onClick={() => setSidebar(!sidebar)} /> */}
          <span className="text-black flex gap-2 items-center font-semibold text-xl cursor-pointer hover:text-teal-500 hover:shadow-lg transition-all duration-300  border-b-2 p-1 ">
            <MdDeveloperMode className="h-6 " /> Access Developer Platform{" "}
          </span>
          <span className="text-black font-semibold text-xl cursor-pointer flex gap-2 hover:text-teal-500 border-b-2 p-1 items-center hover:shadow-lg transition-all duration-300  ">
            <IoMdDownload /> Download Mining App
          </span>
          <span className="text-black font-semibold flex gap-2 items-center text-xl cursor-pointer hover:text-teal-500 border-b-2 p-1 hover:shadow-lg transition-all duration-300 ">
            <MdRocketLaunch /> Launch Planck Hub{" "}
          </span>
          <span className="text-black font-semibold flex gap-2 items-center text-xl cursor-pointer hover:text-teal-500 border-b-2 p-1 hover:shadow-lg transition-all duration-300  ">
            <MdOutlineTravelExplore /> Visit Block Explorer{" "}
          </span>
          <span className="text-black font-semibold flex gap-2 items-center  text-xl cursor-pointer hover:text-teal-500 border-b-2 p-1 hover:shadow-lg transition-all duration-300  ">
            <MdMarkChatUnread /> Read Tokenomics
          </span>
          <span className="text-black font-semibold flex gap-2 items-center  text-xl cursor-pointer hover:text-teal-500 border-b-2 p-1 hover:shadow-lg transition-all duration-300 ">
            <SiGoogledocs /> Read Docs{" "}
          </span>
        </div>
        <div
          onClick={() => setSidebar(!sidebar)}
          className={` ${
            sidebar
              ? "overlay-visible w-full bg-black overflow-hidden "
              : "   h-0 overlay-hidden"
          }`}
        ></div>
      </div>

      <div
        onMouseLeave={() => {setProducts(false),setHoveredDropdown(null)}}
        className={`transition-all shadow-lg duration-300 ease-in-out overflow-hidden ${
          poducts
            ? "opacity-100 h-auto bg-white absolute z-20 top-[70px] w-full p-5"
            : "z-0 absolute top-0 w-full h-0 "
        }`}
      >
        <div className="grid grid-cols-3 w-[90%] m-auto">
          <div className="div1 hover:bg-gray-100 hover:rounded-lg cursor-pointer hover:shadow-lg p-5 flex items-center gap-4">
            <div>
              <img src="/mining.svg" width={100} height={80}></img>
            </div>
            <div>
              <h1 className="text-black font-semibold text-xl">Mining</h1>
              <span className="text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </div>
          </div>
          <div className="div2 hover:bg-gray-100 hover:rounded-lg cursor-pointer hover:shadow-lg p-5 flex items-center gap-4">
            <div>
              <img src="/mining.svg" width={100} height={80}></img>
            </div>
            <div>
              {" "}
              <h1 className="text-black font-semibold text-xl">
                AI Model APIs
              </h1>
              <span className="text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </div>
          </div>
          <div className="div3  hover:bg-gray-100 hover:rounded-lg cursor-pointer hover:shadow-lg p-5 flex items-center gap-4">
            <div>
              <img src="/mining.svg" width={100} height={80}></img>
            </div>
            <div>
              {" "}
              <h1 className="text-black font-semibold text-xl">
                Custom Model Training
              </h1>
              <span className="text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </div>
          </div>
          <div className="div4 hover:bg-gray-100 hover:rounded-lg cursor-pointer hover:shadow-lg p-5 flex items-center gap-4">
            <div>
              <img src="/Plank hub.svg" width={100} height={80}></img>
            </div>
            <div>
              {" "}
              <h1 className="text-black font-semibold text-xl">Planck Hub</h1>
              <span className="text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </div>
          </div>
          <div className="div5 hover:bg-gray-100 hover:rounded-lg cursor-pointer hover:shadow-lg p-5 flex items-center gap-4">
            <div>
              <img src="/token mint.svg" width={100} height={80}></img>
            </div>
            <div>
              {" "}
              <h1 className="text-black font-semibold text-xl"> Token Mint</h1>
              <span className="text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        onMouseLeave={() => {setPln(false),setHoveredDropdown(null)}}
        className={`transition-all shadow-lg duration-300 ease-in-out overflow-hidden ${
          pln
            ? "opacity-100 h-auto bg-white absolute z-20 top-[70px] w-full p-5"
            : "z-0 absolute top-0 w-full h-0 "
        }`}
      >
        <div className="grid grid-cols-2 w-[90%] m-auto">
          <div className="div1 hover:bg-gray-100 hover:rounded-lg cursor-pointer hover:shadow-lg p-5 flex items-center gap-4">
            <div>
              <img src="/token information.svg" width={100} height={80}></img>
            </div>
            <div>
              <h1 className="text-black font-semibold text-xl">Token information</h1>
              <span className="text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </div>
          </div>
          <div className="div2 hover:bg-gray-100 hover:rounded-lg cursor-pointer hover:shadow-lg p-5 flex items-center gap-4">
            <div>
              <img src="/PLN earning calculator.svg" width={100} height={80}></img>
            </div>
            <div>
              {" "}
              <h1 className="text-black font-semibold text-xl">
              $PLN earnings calculator
              </h1>
              <span className="text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </div>
          </div>
         
         
        </div>
      </div>
    </>
  );
};

export default MenuBar;
