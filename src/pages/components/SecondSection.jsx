import React from "react";
import Button from "./Button";
import Image from "next/image";
import { DiAndroid } from "react-icons/di";
import { FaWindows } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { RiExternalLinkFill } from "react-icons/ri";
import { easeIn, motion } from "framer-motion";
import { RiVipCrown2Line } from "react-icons/ri";
import { FaUserCheck } from "react-icons/fa";

const SecondSection = () => {
  return (
    <div className="flex flex-col bg-[url(/Backgroundimage.png)] w-full gap-10 justify-center items-center">
      <div className="w-full flex flex-col items-center justify-center  text-center mt-10">
        <div className="flex w-[75%]  gap-5 items-center text-center justify-center">
          <hr className="w-full h-2   "></hr>
          <h1 className="text-nowrap">
            Trusted by the best in Business and Blockchain
          </h1>
          <hr className="w-full h-2"></hr>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 250 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center"
        >
          <Image src="/logosimage.png" width={950} height={500}></Image>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 250 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-[url(/Backgroundimage.png)]  shadow-gray-700  rounded-2xl shadow-inner  w-[90%] "
      >
        <div className="grid grid-cols-12 p-36 ">
          <motion.div
            initial={{ scale: 2 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="col-span-5 h-full  "
          >
            <img
              className="object-contain "
              src="/cross.png"
              height={500}
              width={300}
            ></img>
          </motion.div>
          <div className="col-span-7  h-full w-full ">
            <div className="mb-5 flex  items-center justify-start gap-3">
              {" "}
              <img
                className="p-1"
                src="/mining.svg"
                width={50}
                height={80}
              />{" "}
              <span className="text-white font-nunito text-5xl font-semibold ">
                {" "}
                AI Model APIs
              </span>
            </div>

            <span className="text-[#6F6F6F] font-nunito text-4xl font-bold w-full ">
              {" "}
              The industries leading open-source AI models
            </span>
            <div className="grid grid-cols-2 gap-5 items-start p-0 mt-5">
              <div className="flex items-center gap-2 border-l-2 pl-4 ">
                <RiExternalLinkFill className="h-9 w-9 border rounded-lg p-2" />
                <span>No up-front costs</span>
              </div>
              <div className="flex items-center gap-2 border-l-2 pl-4 ">
                <RiExternalLinkFill className="h-9 w-9 border rounded-lg p-2" />
                <span>No vendor lock-in</span>
              </div>
              <div className="flex items-center gap-2 border-l-2 pl-4 ">
                <RiExternalLinkFill className="h-9 w-9 border rounded-lg p-2" />
                <span>Automatic scaling </span>
              </div>
              <div className="flex items-center gap-2 border-l-2 pl-4 ">
                <RiExternalLinkFill className="h-9 w-9 border rounded-lg p-2" />
                <span>Low computation prices based on API calls</span>
              </div>
            </div>
            <div className="flex w-full gap-10 mt-10">
              <Button
                customClass={
                  "h-[60px] bg-teal-500 text-nowrap justify-center w-full"
                }
                label="Start for Free"
              />
              <Button
                customClass={"h-[60px] text-nowrap justify-center w-full"}
                label="Learn More"
              />
            </div>
          </div>
        </div>
      </motion.div>
      <div className="bg-[url(/circleneon.png)] absolute top-[200%] bg-no-repeat  w-full h-[90vh] bg-contain "></div>
      <div className=" flex gap-10 justify-center w-[90%]">
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          // viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 2 }}
          className="rounded-2xl p-10 w-full shadow-inner bg-[url(/Backgroundimage.png)]  shadow-gray-700 bg-transparent flex flex-col justify-between gap-5  "
        >
          <div className="mb-2 flex   items-center justify-between gap-3">
            {" "}
            <div className="flex items-center gap-4">
              <img className="p-1" src="/mining.svg" width={50} height={80} />
              <span className="text-white shadow-inner  font-nunito text-3xl font-semibold ">
                {" "}
                Mining
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <FaWindows className="text-white text-3xl " />
              <DiAndroid className="text-white text-3xl " />
              <FaApple className="text-white text-4xl " />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[#6F6F6F] text-4xl font-nunito font-bold ">
              {" "}
              The world’s simplest mining app
            </span>
            <div className="grid grid-cols-2 gap-5 items-start p-0 mt-5">
              <div className="flex items-center gap-2 border-l-2 pl-4 ">
                <RiExternalLinkFill className="h-9 w-9 border rounded-lg p-2" />
                <span>No Tech Skills</span>
              </div>
              <div className="flex items-center gap-2 border-l-2 pl-4 ">
                <RiExternalLinkFill className="h-9 w-9 border rounded-lg p-2" />
                <span>Flexible Configurations</span>
              </div>
              <div className="flex items-center gap-2 border-l-2 pl-4 ">
                <RiExternalLinkFill className="h-9 w-9 border rounded-lg p-2" />
                <span>Planck OS for Security</span>
              </div>
              <div className="flex items-center gap-2 border-l-2 pl-4 ">
                <RiExternalLinkFill className="h-9 w-9 border rounded-lg p-2" />
                <span>Download App</span>
              </div>
            </div>
          </div>
          <div className="flex w-full gap-10 mt-10">
            <Button
              icon={<IoMdDownload />}
              customClass={"h-[60px] bg-teal-500 justify-center w-full"}
              label="Download Now"
            />
            <Button
              customClass={"h-[60px] justify-center w-full"}
              label="Learn More"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 500 }}
          // viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 2 }}
          className="rounded-2xl p-10 w-full shadow-inner bg-[url(/Backgroundimage.png)]  shadow-gray-700 bg-transparent flex flex-col justify-between gap-5  "
        >
          <div className="mb-5 flex  items-center justify-start gap-3">
            {" "}
            <img
              className="p-1"
              src="/mining.svg"
              width={50}
              height={80}
            />{" "}
            <span className="text-white font-nunito text-3xl font-semibold ">
              {" "}
              Custom Model Training
            </span>
          </div>
          <div className="flex flex-col w-full">
            <span className="text-[#6F6F6F] text-4xl font-bold font-nunito w-full ">
              {" "}
              End-to-end ML infrastructure for efficient training of custom
              models
            </span>
            <div className="flex gap-5 mt-5">
              <div className="flex items-center gap-2 border-l-2 pl-4 ">
                <RiExternalLinkFill className="h-9 w-9 border rounded-lg p-2" />
                <span>Easily deploy custom model on Planck networkd</span>
              </div>
              <div className="flex items-center gap-2 border-l-2 pl-4 ">
                <RiExternalLinkFill className="h-9 w-9 border rounded-lg p-2" />
                <span>Low-cost compute that scales to meet your goals</span>
              </div>
            </div>
          </div>
          <div className="flex w-full gap-10 mt-10">
            <Button
              customClass={"h-[60px] bg-teal-500 justify-center w-full"}
              label="Start fo Free"
            />
            <Button
              customClass={"h-[60px] justify-center w-full"}
              label="Learn More"
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 500 }}
        // viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 2 }}
        className="rounded-2xl w-[90%] p-5 mt-10 shadow-2xl "
      >
        <div className="flex flex-col w-[50%] gap-5">
          <span className="text-6xl font-semibold font-nunito text-white">
            The Blockchain Built for AI Inferencing
          </span>
          <span className="text-xl font-medium font-nunito text-[#676767] ">
            Our unique blockchain architecture with zkVMs and PoUW to keep the
            computational intense processing off-chain for high throughput,
            scalability and efficiency purpose-build for AI processing.
          </span>
          <div className="flex w-full gap-10 mt-10">
            <Button
              customClass={"h-[60px] bg-teal-300 justify-center w-full"}
              label="Start fo Free"
            />
            <Button
              customClass={"h-[60px]  justify-center w-full"}
              label="Learn More"
            />
          </div>
        </div>
      </motion.div>
      {/* <div className="flex flex-col gap-5 items-center text-center mt-[100px]">
        <div className="w-[60%] flex flex-col gap-11">
          <span className="text-black font-nunito font-bold text-6xl ">
            A DePIN ready for mass-adoption.
          </span>
          <span className="text-gray-800 font-medium text-xl">
            Planck’s decentralized compute network can utilize smartphones,
            everyday desktops, game pc’s, mining farms and data centers for AI
            processing and training. There is no need for tech skills or crypto
            knowledge to participate as miner, in a world in which 90% of users
            don’t know how to change their wifi password, Planck’s simplicity is
            the key to unleashing computational power at scale.
          </span>
        </div>
        <div className="grid grid-cols-2 mt-5 w-[90%]">
          <div className="flex gap-3 p-2 flex-col justify-start border-r-2">
            <span className="text-teal-500 font-nunito font-bold text-2xl">
              Compute on Planck
            </span>
            <span className="text-black font-nunito font-semibold text-md">
              20+ TB RAM/Memory
            </span>
            <span className="text-black font-nunito font-semibold text-md">
              500+ Individual miners in 40 different countries
            </span>
            <span className="text-black font-nunito font-semibold text-md">
              300+ Nvidia GPU’s | 1k+ CPU’s
            </span>
          </div>
          <div className="flex gap-3 p-2 flex-col justify-start  pl-3">
            <span className="text-teal-500 font-nunito font-bold text-2xl ">
              Builders on Planck
            </span>
            <span className="text-black font-nunito font-semibold text-md">
              50+ AI companies
            </span>
            <span className="text-black font-nunito font-semibold text-md">
              5+ AI software development agencies
            </span>
            <span className="text-black font-nunito font-semibold text-md">
              2 AI incubators
            </span>
          </div>
       
        </div>
      </div> */}
      {/* <div>
        <img className="w-full drop-shadow-xl " src="/globe.svg"></img>
      </div> */}
      <div className="">
        {" "}
        <video className="videoTag" autoPlay loop muted>
          <source src={"/Planckvdo.mp4"} type="video/mp4" />
        </video>
      </div>
      <div>
        <span className="text-4xl">PLANCK FOR </span>{" "}
        <span className="text-teal-400 text-4xl ">MINERS</span>
      </div>
      <div className="w-[90%] grid grid-cols-12 gap-6 ">
      <div className="rounded-2xl p-10 w-full col-span-7 h-[500px] shadow-inner bg-[url(/pro.png)]  shadow-gray-700 bg-transparent flex flex-col justify-end gap-5  ">
      <RiVipCrown2Line className="text-3xl "/>
      <span className="font-semibold text-4xl" >Planck’s Unified Processing Power</span>
      <span className="text-xl" >Planck harnesses the processing power of smartphones, desktops, and data centers.</span>
      </div>
      <div className="rounded-2xl p-10 w-full col-span-5 shadow-inner bg-[url(/numeric.png)]  shadow-gray-700 bg-transparent flex flex-col justify-end gap-5  ">
      <FaUserCheck className="text-3xl" />
     <span className="font-semibold text-4xl" >Simplified Mining</span>
     <span className="text-xl" >The industry's user-friendliest mining app requires no tech skills, crypto expertise, or staking to start mining.</span>
      </div>

      </div>
    </div>
  );
};

export default SecondSection;
