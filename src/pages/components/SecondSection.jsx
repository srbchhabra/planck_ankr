import React from "react";
import Button from "./Button";
import Image from "next/image";
import { DiAndroid } from "react-icons/di";
import { FaWindows } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";

const SecondSection = () => {
  return (
    <div className="flex flex-col  justify-center items-center">
      <div className="bg-white rounded-2xl  shadow-2xl relative top-[-100px] w-[90%] ">
        <div className="grid grid-cols-12  ">
          <div className="col-span-4 h-full p-9 ">
            <div className="mb-5 flex  items-center justify-start">
              {" "}
              <img
                src="https://cdn.dribbble.com/userupload/9418415/file/original-3656f30e44c3bdd4d7b2818befb03749.jpg?resize=400x0"
                width={100}
                height={200}
              />{" "}
              <span className="text-blue-800 text-3xl font-semibold ">
                {" "}
                AI Model APIs
              </span>
            </div>

            <span className="text-black text-4xl font-bold w-full ">
              {" "}
              The industries leading open-source AI models
            </span>
            <div className="flex flex-col mt-5">
              <ul className="list-disc text-black font-semibold ml-5">
                <li>No up-front costs</li>
                <li>No vendor lock-in</li>
                <li>Automatic scaling </li>
                <li>Low computation prices based on API calls</li>
              </ul>
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
      <div className=" bg-white mt-[-50px] flex gap-10 justify-center w-[90%]">
        <div className="rounded-2xl p-10 w-full border-[1px] bg-white flex flex-col justify-between gap-5 shadow-xl ">
          <div className="mb-2 flex  items-center justify-start">
            {" "}
            <img
              src="https://cdn.dribbble.com/userupload/9418415/file/original-3656f30e44c3bdd4d7b2818befb03749.jpg?resize=400x0"
              width={100}
              height={200}
            />{" "}
            <span className="text-blue-800 text-3xl font-semibold ">
              {" "}
              Mining
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-black text-4xl font-bold ">
              {" "}
              The world’s simplest mining app available on Windows, MacOS, Linux and Android

            </span>
            <div className="flex flex-col mt-5">
              <ul className="list-disc text-black font-semibold ml-5">
                <li>No technical skills or crypto knowledge required</li>
                <li>PlanckOS for unmatched security</li>
                <li>Flexible configuration settings </li>
                <li>Download app and start earning $PLN</li>
              </ul>
            </div>
            <div className="flex gap-3 mt-5 items-center" >
              <FaWindows className="text-blue-500 text-3xl " />
              <DiAndroid className="text-green-500 text-3xl " />
              <FaApple className="text-black text-4xl " />
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
        <div className="rounded-2xl p-10 w-full border-[1px] bg-white flex flex-col justify-between gap-5 shadow-xl ">
          <div className="mb-5 flex  items-center justify-start">
            {" "}
            <img
              src="https://cdn.dribbble.com/userupload/9418415/file/original-3656f30e44c3bdd4d7b2818befb03749.jpg?resize=400x0"
              width={100}
              height={200}
            />{" "}
            <span className="text-blue-800 text-3xl font-semibold ">
              {" "}
              Custom Model Training
            </span>
          </div>
          <div className="flex flex-col w-full">
            <span className="text-black text-4xl font-bold w-full ">
              {" "}
              End-to-end ML infrastructure for efficient training of custom models

            </span>
            <div className="flex flex-col mt-5">
              <ul className="list-disc text-black font-semibold ml-5">
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
      <div className="rounded-2xl w-[90%] bg-[url(/neura.svg)] border bg-cover p-5 mt-10 shadow-xl ">
        <div className="flex flex-col w-[40%] gap-5">
          <span className="text-xl font-bold font-sans text-teal-500">
            NEURA
          </span>
          <span className="text-5xl font-bold text-black">
            The blockchain built for AI.
          </span>
          <span className="text-lg font-medium text-black ">
            Neura's fusion of technologies transforms scalability, economics,
            and security for AI models.
          </span>
          <div className="flex w-full gap-10 mt-10">
            <Button
              customClass={"h-[60px] justify-center w-full"}
              label="Start fo Free"
            />
            <Button
              customClass={"h-[60px] border-[1px] justify-center w-full"}
              label="Learn More"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center text-center mt-[100px]">
        <div className="w-[50%] flex flex-col gap-11">
          <span className="text-black font-bold text-6xl ">
            A world-class DePIN to power your projects.
          </span>
          <span className="text-gray-800 font-medium text-xl">
            Ankr's Decentralized Physical Infrastructure Network (DePIN) of
            nodes ensures Ankr's clients always have the shortest roundtrip path
            for RPC requests, providing fast Web3 experiences no matter where
            users are.
          </span>
        </div>
        <div className="grid grid-cols-3 mt-5 w-[90%]">
          <div className="flex flex-col justify-center border-r-2">
            <span className="text-black font-bold text-5xl">8 Billion</span>
            <span className="text-black font-semibold text-2xl">
              Daily RPC requests across the map
            </span>
          </div>
          <div className="flex flex-col justify-center border-r-2 pl-3">
            <span className="text-black font-bold text-5xl ">30+</span>
            <span className="text-black font-semibold text-2xl">
              Global regions with bare-metal nodes
            </span>
          </div>
          <div className="flex flex-col justify-center pl-3">
            <span className="text-black font-bold text-5xl ">760k</span>
            <span className="text-black font-semibold text-2xl">
              Unique geo locations served monthly
            </span>
          </div>
        </div>
      </div>
      <div>
        <img className="w-full drop-shadow-xl " src="/globe.svg"></img>
      </div>
    </div>
  );
};

export default SecondSection;
