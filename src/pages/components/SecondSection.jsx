import React from "react";
import Button from "./Button";
import Image from "next/image";
import { DiAndroid } from "react-icons/di";
import { FaWindows } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
const SecondSection = () => {
  return (
    <div className="flex flex-col  justify-center items-center">
      <div className="bg-white rounded-2xl  shadow-2xl relative top-[-100px] w-[90%] ">
        <div className="grid grid-cols-12  ">
          <div className="col-span-4 h-full p-9 ">
            <div className="mb-5 flex  items-center justify-start gap-3">
              {" "}
              <img
                className="p-1"
                src="/mining.svg"
                width={50}
                height={80}
              />{" "}
              <span className="text-teal-500 text-3xl font-semibold ">
                {" "}
                AI Model APIs
              </span>
            </div>

            <span className="text-black text-4xl font-bold w-full ">
              {" "}
              The industries leading open-source AI models
            </span>
            <div className="flex flex-col items-start p-0 mt-5">
              <ul className=" text-black font-semibold ">
                <li>No up-front costs</li>
                <li>No vendor lock-in</li>
                <li>Automatic scaling </li>
                <li>Low computation prices based on API calls</li>
              </ul>
            </div>
            <div className="flex w-full gap-10 mt-10">
              <Button
                customClass={"h-[60px] text-nowrap justify-center w-full"}
                label="Start for Free"
              />
              <Button
                customClass={"h-[60px] text-nowrap justify-center w-full"}
                label="Learn More"
              />
            </div>
          </div>
          <div className="col-span-8  h-full w-full ">
            <img
              className="customimage m-auto object-cover w-full h-full ml-[-150px] mt-10 "
              src="/circle.svg"
              height={500}
              width={800}
            ></img>
          </div>
        </div>
      </div>
      <div className="  mt-[-50px] flex gap-10 justify-center w-[90%]">
        <div className="rounded-2xl p-10 w-full  bg-white flex flex-col justify-between gap-5 shadow-xl ">
          <div className="mb-2 flex  items-center justify-start gap-3">
            {" "}
            <img className="p-1" src="/mining.svg" width={50} height={80} />
            <span className="text-teal-500 text-3xl font-semibold ">
              {" "}
              Mining
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-black text-4xl font-bold ">
              {" "}
              The world’s simplest mining app 
            </span>
            <div className="flex flex-col mt-5">
              <ul className=" text-black font-semibold">
                <li>No technical skills or crypto knowledge required</li>
                <li>PlanckOS for unmatched security</li>
                <li>Flexible configuration settings </li>
                <li>Download app and start earning $PLN</li>
              </ul>
            </div>
            <div className="flex gap-3 mt-5 items-center">
              <FaWindows className="text-blue-500 text-3xl " />
              <DiAndroid className="text-green-500 text-3xl " />
              <FaApple className="text-black text-4xl " />
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
        </div>
        <div className="rounded-2xl p-10 w-full  bg-white flex flex-col justify-between gap-5 shadow-xl ">
          <div className="mb-5 flex  items-center justify-start gap-3">
            {" "}
            <img
              className="p-1"
              src="/mining.svg"
              width={50}
              height={80}
            />{" "}
            <span className="text-teal-500 text-3xl font-semibold ">
              {" "}
              Custom Model Training
            </span>
          </div>
          <div className="flex flex-col w-full">
            <span className="text-black text-4xl font-bold w-full ">
              {" "}
              End-to-end ML infrastructure for efficient training of custom
              models
            </span>
            <div className="flex flex-col mt-5">
              <ul className=" text-black font-semibold ">
                <li>Easily deploy custom model on Planck networkd</li>
                <li>Low-cost compute that scales to meet your goals</li>
              </ul>
            </div>
          </div>
          <div className="flex w-full gap-10 mt-10">
            <Button
              customClass={"h-[60px] justify-center w-full"}
              label="Start fo Free"
            />
            <Button
              customClass={"h-[60px] justify-center w-full"}
              label="Learn More"
            />
          </div>
        </div>
      </div>
      <div className="rounded-2xl w-[90%] bg-[url(/neura.svg)] bg-white  bg-cover p-5 mt-10 shadow-2xl ">
        <div className="flex flex-col w-[50%] gap-5">
          
          <span className="text-5xl font-bold text-black">
            The blockchain built for AI inferencing
          </span>
          <span className="text-lg font-medium text-black ">
            Our unique blockchain architecture with zkVMs and PoUW to keep the
            computational intense processing off-chain for high throughput,
            scalability and efficiency purpose-build for AI processing.
          </span>
          <div className="flex w-full gap-10 mt-10">
            <Button
              customClass={"h-[60px] justify-center w-full"}
              label="Start fo Free"
            />
            <Button
              customClass={"h-[60px]  justify-center w-full"}
              label="Learn More"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center text-center mt-[100px]">
        <div className="w-[60%] flex flex-col gap-11">
          <span className="text-black font-bold text-6xl ">
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
            <span className="text-teal-500 font-bold text-2xl">
              Compute on Planck
            </span>
            <span className="text-black font-semibold text-md">
              20+ TB RAM/Memory
            </span>
            <span className="text-black font-semibold text-md">
              500+ Individual miners in 40 different countries
            </span>
            <span className="text-black font-semibold text-md">
              300+ Nvidia GPU’s | 1k+ CPU’s
            </span>
          </div>
          <div className="flex gap-3 p-2 flex-col justify-start  pl-3">
            <span className="text-teal-500 font-bold text-2xl ">
              Builders on Planck
            </span>
            <span className="text-black font-semibold text-md">
              50+ AI companies
            </span>
            <span className="text-black font-semibold text-md">
              5+ AI software development agencies
            </span>
            <span className="text-black font-semibold text-md">
              2 AI incubators
            </span>
          </div>
          {/* <div className="flex gap-3 p-2 flex-col justify-start border-r-2 pl-3">
            <span className="text-black font-bold text-5xl ">760k</span>
            <span className="text-black font-semibold text-2xl">
              Unique geo locations served monthly
            </span>
          </div> */}
        </div>
      </div>
      <div>
        <img className="w-full drop-shadow-xl " src="/globe.svg"></img>
      </div>
      <div className=" w-[90%]  shadow-xl rounded-xl  flex ">
        <div className="bg-[url(/eneterprise2.svg)] bg-white  rounded-s-xl p-5 h-full  bg-no-repeat drop-shadow-2xl w-full bg-cover "></div>
        <div className="bg-[#374151] rounded-e-xl w-[48%] p-8 flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-10">
            <span className="font-bold text-4xl">
              Enterprise Solutions tailored to your business
            </span>
            <span className="text-semibold text-xl">
              Contact our team for API and infrastructure services customized to
              your enterprise, or compute
            </span>
          </div>

          <div>
            <Button
            className="text-nowrap"
              customClass={"h-[60px] bg-teal-500 justify-center text-nowrap lg:w-full xl:w-full w-full 2xl:w-[40%]"}
              label="Learn More"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
