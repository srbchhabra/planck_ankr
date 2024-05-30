import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t-[1px] bg-white   shadow-inner p-20 w-full h-full ">
      <div className="grid grid-cols-5 gap-5">
        {" "}
        <div className="flex flex-col gap-2">
          <h1 className="text-black font-bold text-lg mb-3  ">Products</h1>
          <span className="text-gray-500  text-base hover:text-teal-500 ">Mining</span>
          <span className="text-gray-500 hover:text-teal-500  text-base">AI Model APIs</span>
          <span className="text-gray-500 hover:text-teal-500 text-base ">
            Custom Model Training
          </span>
          <span className="text-gray-500 hover:text-teal-500 text-base ">Token Minting</span>
          <span className="text-gray-500 hover:text-teal-500 text-base ">$PLN Token</span>
          <span className="text-gray-500 hover:text-teal-500 text-base ">Block Explorer</span>
          <span className="text-gray-500 hover:text-teal-500 text-base ">
            Enterprise Solutions
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-black font-bold text-lg mb-3 ">Case Studies</h1>
          <span className="text-gray-500 hover:text-teal-500  text-base ">
            AI software development agencies
          </span>
          <span className="text-gray-500 hover:text-teal-500  text-base">
            Software Development Agencies
          </span>
          <span className="text-gray-500 hover:text-teal-500  text-base ">Construction</span>
          <span className="text-gray-500 hover:text-teal-500  text-base ">Chatbots</span>
          <span className="text-gray-500 hover:text-teal-500  text-base ">Content Generation</span>
          <span className="text-gray-500  hover:text-teal-500 text-baseg ">
            Business Supply Chains
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-black font-bold text-lg mb-3  ">Resources</h1>
          <span className="text-gray-500  text-base hover:text-teal-500">Docs</span>
          <span className="text-gray-500  text-base hover:text-teal-500">Tutorials</span>
          <span className="text-gray-500  text-base hover:text-teal-500">Github</span>
          <span className="text-gray-500  text-base hover:text-teal-500">Whitepaper</span>
          <span className="text-gray-500  text-base hover:text-teal-500">Tokenomics</span>
          <span className="text-gray-500  text-baseg hover:text-teal-500">Brand Assets</span>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-black font-bold text-lg mb-3 ">Company</h1>
          <span className="text-gray-500  text-base ">About Us</span>
          <span className="text-gray-500  text-base">Blog</span>
          <span className="text-gray-500  text-base ">Press </span>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-black font-bold text-lg mb-3 ">Socials</h1>
          <span className="text-gray-500  text-base ">Twitter</span>
          <span className="text-gray-500  text-base">Telegram</span>
          <span className="text-gray-500  text-base ">Discord</span>
          <span className="text-gray-500  text-base ">Medium</span>
          <span className="text-gray-500  text-base ">Reddit</span>
          <span className="text-gray-500  text-baseg ">Instagram</span>
          <span className="text-gray-500  text-baseg ">Youtube</span>
          <span className="text-gray-500  text-baseg ">Linkedin</span>
        </div>
      </div>
      <div className="mt-5 border-t-[1px] w-full pt-5 flex justify-evenly gap-5 ">
        <div className="w-[30%] " >
          <Image src={"/logo-cropped.svg"} height={50} width={100}></Image>
          <h1 className="text-gray-300 mt-3">
            Planck is a decentralized compute network designed to harness the
            processing power of millions of smartphones, desktops, and data
            centers, making low-cost AI processing a reality.
          </h1>
        </div>
        <div>
          <span className="text-gray-300">
            @ 2024 Planck All rights reserved{" "}
          </span>
        </div>
        <div>
          <span className="text-gray-300">founders@plancknetwork.com </span>
        </div>
        <div>
          <span className="text-gray-300">Terms and Services </span>
        </div>
        <div>
          <span className="text-gray-300">Privacy Policy </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
