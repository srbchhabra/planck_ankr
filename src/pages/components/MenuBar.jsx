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
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const MenuBar = () => {
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [sidebar, setSidebar] = useState(false);
  const [poducts, setProducts] = useState(false);
  const [pln, setPln] = useState(false);
  const [comp, setComp] = useState(false);

  return (
    <>
      <div className="bg-white shadow-xl  sticky top-0 w-full z-10">
        {/* <div className="bg-black p-[1px] text-center " ><span className="text-white font-medium text-center" >Planck Incentivized Testnet Is Live | Download Mining App Now</span></div> */}
        <div className="flex justify-between p-3">
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
                setHoveredDropdown("products"),
                  setProducts(true),
                  setPln(false);
              }}
              // onMouseLeave={() => setHoveredDropdown(null)}
            >
              <span
                className={`text-black font-semibold ${
                  hoveredDropdown == "products" && "text-teal-300"
                } `}
              >
                Products
              </span>
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
                setHoveredDropdown("pln"), setPln(true), setProducts(false);
              }}
              // onMouseLeave={() => setHoveredDropdown(null)}
            >
              <span
                className={`text-black font-semibold ${
                  hoveredDropdown == "pln" && "text-teal-300"
                } `}
              >
                $PLN Token
              </span>
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
              onMouseEnter={() => {
                setPln(false),
                  setProducts(false),
                  setComp(false),
                  setHoveredDropdown(null);
              }}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <span className="text-black font-semibold hover:text-teal-300">
                Resources
              </span>
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
              onMouseEnter={() => {
                setHoveredDropdown("company"),
                  setComp(true),
                  setPln(false),
                  setProducts(false);
              }}
              // onMouseLeave={() => setHoveredDropdown(null)}
            >
              <span
                className={`text-black font-semibold ${
                  hoveredDropdown == "company" && "text-teal-300"
                } `}
              >
                Company
              </span>
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
            <Button customClass={"bg-[#18aba2]"} label="Build AI App "></Button>
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
          <span className="text-black flex gap-2 items-center text-nowrap  text-xl cursor-pointer hover:text-teal-500 hover:shadow-lg transition-all duration-300  border-b-2 p-1 ">
            <MdDeveloperMode className="h-6 " /> Access Developer Platform{" "}
          </span>
          <span className="text-black text-xl cursor-pointer  flex gap-2 hover:text-teal-500 border-b-2 p-1 items-center hover:shadow-lg transition-all duration-300  ">
            <IoMdDownload /> Download Mining App
          </span>
          <span className="text-black  flex gap-2 items-center text-xl cursor-pointer hover:text-teal-500 border-b-2 p-1 hover:shadow-lg transition-all duration-300 ">
            <MdRocketLaunch /> Launch Planck Hub{" "}
          </span>
          <span className="text-black  flex gap-2 items-center text-xl cursor-pointer hover:text-teal-500 border-b-2 p-1 hover:shadow-lg transition-all duration-300  ">
            <MdOutlineTravelExplore /> Visit Block Explorer{" "}
          </span>
          <span className="text-black  flex gap-2 items-center  text-xl cursor-pointer hover:text-teal-500 border-b-2 p-1 hover:shadow-lg transition-all duration-300  ">
            <MdMarkChatUnread /> Read Tokenomics
          </span>
          <span className="text-black  flex gap-2 items-center  text-xl cursor-pointer hover:text-teal-500 border-b-2 p-1 hover:shadow-lg transition-all duration-300 ">
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
        onMouseLeave={() => {
          setProducts(false), setHoveredDropdown(null);
        }}
        className={`transition-all rounded-b-xl shadow-lg duration-300 ease-in-out overflow-hidden ${
          poducts
            ? "opacity-100 h-auto bg-white absolute z-20 top-[70px] w-full p-3"
            : "z-0 absolute top-0 w-full h-0 "
        }`}
      >
        <div className="grid grid-cols-3 w-[90%] m-auto">
          <div className="div1 hover:bg-gray-100  hover:rounded-lg cursor-pointer hover:shadow-lg p-2 flex items-center gap-4">
            <div>
              <img src="/mining.svg" width={70} height={80}></img>
            </div>
            <div>
              <h1 className="text-black font-semibold text-md">Mining</h1>
              <span className="text-gray-500 text-sm">
              Fuel the future of AI by contributing your computing power.

              </span>
            </div>
          </div>
          <div className="div2 hover:bg-gray-100 hover:rounded-lg cursor-pointer hover:shadow-lg p-2 flex items-center gap-4">
            <div>
              <img src="/mining.svg" width={70} height={80}></img>
            </div>
            <div>
              {" "}
              <h1 className="text-black font-semibold text-md">
                AI Model APIs
              </h1>
              <span className="text-gray-500 text-sm">
              Access powerful, pre-trained AI models for easy integration.
              </span>
            </div>
          </div>
          <div className="div3  hover:bg-gray-100 hover:rounded-lg cursor-pointer hover:shadow-lg p-2 flex items-center gap-4">
            <div>
              <img src="/mining.svg" width={60} height={80}></img>
            </div>
            <div>
              {" "}
              <h1 className="text-black font-semibold text-md">
                Custom Model Training
              </h1>
              <span className="text-gray-500 text-sm">
              Train your own AI models on the Planck Network.
              </span>
            </div>
          </div>
          <div className="div4 hover:bg-gray-100 hover:rounded-lg cursor-pointer hover:shadow-lg p-2 flex items-center gap-4">
            <div>
              <img src="/Plank hub.svg" width={70} height={80}></img>
            </div>
            <div>
              {" "}
              <h1 className="text-black font-semibold text-md">Planck Hub</h1>
              <span className="text-gray-500 text-sm">
              Shape the network's future through governance and collaboration.
              </span>
            </div>
          </div>
          <div className="div5 hover:bg-gray-100 hover:rounded-lg cursor-pointer hover:shadow-lg p-2 flex items-center gap-4">
            <div>
              <img src="/token mint.svg" width={60} height={80}></img>
            </div>
            <div>
              {" "}
              <h1 className="text-black font-semibold text-md">L1 Blockchain for AI</h1>
              <span className="text-gray-500 text-sm">
              EVM-Compatible purpose-built blockchain for AI 
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        onMouseLeave={() => {
          setPln(false), setHoveredDropdown(null);
        }}
        className={`transition-all rounded-b-xl shadow-lg duration-300 ease-in-out overflow-hidden ${
          pln
            ? "opacity-100 h-auto bg-white absolute z-20 top-[70px] w-full p-3"
            : "z-0 absolute top-0 w-full h-0 "
        }`}
      >
        <div className="grid grid-cols-2 w-[90%] m-auto">
          <div className="div1 hover:bg-gray-100 hover:rounded-lg cursor-pointer hover:shadow-lg p-2 flex items-center gap-4">
            <div>
              <img src="/token information.svg" width={70} height={80}></img>
            </div>
            <div>
              <h1 className="text-black font-semibold text-md">
                Token information
              </h1>
              <span className="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </div>
          </div>
          <div className="div2 hover:bg-gray-100 hover:rounded-lg cursor-pointer hover:shadow-lg p-2 flex items-center gap-4">
            <div>
              <img
                src="/PLN earning calculator.svg"
                width={70}
                height={80}
              ></img>
            </div>
            <div>
              {" "}
              <h1 className="text-black font-semibold text-md">
                $PLN earnings calculator
              </h1>
              <span className="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        onMouseLeave={() => {
          setComp(false), setHoveredDropdown(null);
        }}
        className={`transition-all rounded-b-xl shadow-lg duration-300 ease-in-out overflow-hidden ${
          comp
            ? "opacity-100 h-auto bg-white absolute z-20 top-[70px] right-10 w-[40%] p-3"
            : "z-0 absolute top-0 w-full h-0 "
        }`}
      >
        <div className="flex justify-center " >
        <div className="flex flex-col w-[65%] border-r-2  ">

          <div className="div1 hover:bg-gray-100 hover:rounded-lg cursor-pointer hover:shadow-lg p-2 flex items-center gap-4">
            <div>
              <img src="/aboutus.svg" width={50} height={80}></img>
            </div>
            <div>
              <h1 className="text-black font-semibold flex gap-3 items-center text-md">About Us<FaArrowRight/></h1>
              {/* <span className="text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span> */}
            </div>
          </div>
          <div className="div2 hover:bg-gray-100 hover:rounded-lg cursor-pointer hover:shadow-lg p-2 flex items-center gap-4">
            <div>
              <img src="/press.svg" width={50} height={80}></img>
            </div>
            <div>
              {" "}
              <h1 className="text-black font-semibold flex gap-3 items-center text-md">Press<FaArrowRight/></h1>
              {/* <span className="text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start p-5  w-[40%] gap-2">
          <h1 className="text-black font-bold text-lg mb-3 ">Socials</h1>
          <h1 className="text-gray-500  text-base flex gap-2 items-center "><FaTwitter />Twitter</h1>
          <h1 className="text-gray-500 flex gap-2 items-center text-base"><FaTelegramPlane/>Telegram</h1>
          <h1 className="text-gray-500 flex gap-2 items-center text-base "><FaDiscord/>Discord</h1>
          <h1 className="text-gray-500 flex gap-2 items-center text-base "><FaMedium/>Medium</h1>
          <h1 className="text-gray-500 flex gap-2 items-center text-base "><FaRedditAlien/>Reddit</h1>
          <h1 className="text-gray-500 flex gap-2 items-center text-baseg "><RiInstagramFill/>Instagram</h1>
          <h1 className="text-gray-500 flex gap-2 items-center text-baseg "><FaYoutube/>Youtube</h1>
          <h1 className="text-gray-500 flex gap-2 items-center text-baseg "><FaLinkedinIn/>Linkedin</h1>
        </div>
       
        </div>
      </div>
    </>
  );
};

export default MenuBar;
