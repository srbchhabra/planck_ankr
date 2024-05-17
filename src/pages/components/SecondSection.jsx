import React from "react";
import Button from "./Button";
import Image from "next/image";

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
              <span className="text-blue-800 text-4xl font-semibold ">
                {" "}
                WEB 3 API
              </span>
            </div>

            <span className="text-black text-6xl font-bold ">
              {" "}
              The fastest, most reliable connection to Web3.
            </span>
            <div className="grid grid-cols-3 mt-5">
              <div className="flex flex-col justify-center border-r-2">
                <span className="text-gray-500 text-md">
                  Avg. response time
                </span>
                <span className="text-black font-semibold text-2xl">56 ms</span>
              </div>
              <div className="flex flex-col justify-center border-r-2 pl-3">
                <span className="text-gray-500 text-md ">Up time</span>
                <span className="text-black font-semibold text-2xl">56 ms</span>
              </div>
              <div className="flex flex-col justify-center pl-3">
                <span className="text-gray-500 text-md ">Blockchain</span>
                <span className="text-black font-semibold text-2xl">56 +</span>
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
          <div className="mb-5 flex  items-center justify-start">
            {" "}
            <img
              src="https://cdn.dribbble.com/userupload/9418415/file/original-3656f30e44c3bdd4d7b2818befb03749.jpg?resize=400x0"
              width={100}
              height={200}
            />{" "}
            <span className="text-blue-800 text-4xl font-semibold ">
              {" "}
              Scaling Services
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-black text-5xl font-bold ">
              {" "}
              Complete rollup & sidechain creation..
            </span>
            <span className="text-black font-semibold w-[50%] text-xl leading-10 ">
              Receive end-to-end engineering Launch your own blockchain Scale to
              meet any demand.
            </span>
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
        <div className="rounded-2xl p-10 w-full border-[1px] bg-white flex flex-col gap-5 shadow-xl ">
          <div className="mb-5 flex  items-center justify-start">
            {" "}
            <img
              src="https://cdn.dribbble.com/userupload/9418415/file/original-3656f30e44c3bdd4d7b2818befb03749.jpg?resize=400x0"
              width={100}
              height={200}
            />{" "}
            <span className="text-blue-800 text-4xl font-semibold ">
              {" "}
              Staking Solutions
            </span>
          </div>
          <div className="flex flex-col w-full">
            <span className="text-black text-5xl font-bold w-full ">
              {" "}
              Seamless staking experiences & integrations.
            </span>
            <span className="text-black font-semibold w-[50%] text-xl leading-10 ">
              Plug into liquidity $83M+ TVL Stake across chains 9+ tokens
              supported Earn rewards securely 18k+ users trust Ankr
            </span>
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
          <span className="text-xl font-bold font-sans text-teal-500">NEURA</span>
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
              customClass={
                "h-[60px] border-[1px] justify-center w-full"
              }
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
          <span className="text-gray-800 font-medium text-xl" >
            Ankr's Decentralized Physical Infrastructure Network (DePIN) of
            nodes ensures Ankr's clients always have the shortest roundtrip path
            for RPC requests, providing fast Web3 experiences no matter where
            users are.
          </span>
        </div>
        <div className="grid grid-cols-3 mt-5 w-[90%]">
              <div className="flex flex-col justify-center border-r-2">
                <span className="text-black font-bold text-5xl">
                8 Billion
                </span>
                <span className="text-black font-semibold text-2xl">Daily RPC requests across the map</span>
              </div>
              <div className="flex flex-col justify-center border-r-2 pl-3">
                <span className="text-black font-bold text-5xl ">30+</span>
                <span className="text-black font-semibold text-2xl">Global regions with bare-metal nodes</span>
              </div>
              <div className="flex flex-col justify-center pl-3">
                <span className="text-black font-bold text-5xl ">760k</span>
                <span className="text-black font-semibold text-2xl">Unique geo locations served monthly</span>
              </div>
            </div>
      </div>
      <div>
        <img className="w-full drop-shadow-xl " src="/globe.svg" ></img>
      </div>
    </div>
  );
};

export default SecondSection;
