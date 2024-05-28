import React from "react";
import { TbBrandShopee } from "react-icons/tb";
import Banner from "./Banners";
import { GrMoney } from "react-icons/gr";
const Sectionvideo = () => {
  const images = [
    "Arcanum.svg",
    "BMG.svg",
    "brainstem.svg",
    "enigmafund.svg",
    "finnovant.svg",
    "google.svg",
    "Hugging face.svg",
    "mETA.svg",
    "MISTRAL ai.svg",
    "red belly.svg",
    "relevance.svg",
    "seven camp.svg",
    "Arcanum.svg",
    "BMG.svg",
    "brainstem.svg",
    "enigmafund.svg",
    "finnovant.svg",
    "google.svg",
    "Hugging face.svg",
    "mETA.svg",
    "MISTRAL ai.svg",
    "red belly.svg",
    "relevance.svg",
    "seven camp.svg",
    "Arcanum.svg",
    "BMG.svg",
    "brainstem.svg",
    "enigmafund.svg",
    "finnovant.svg",
    "google.svg",
    "Hugging face.svg",
    "mETA.svg",
    "MISTRAL ai.svg",
    "red belly.svg",
    "relevance.svg",
    "seven camp.svg",
  ].map((image) => ({
    id: crypto.randomUUID(),
    image: `/${image}`
  }));
  return (
    <>
      <div className="relative h-[100vh] bg-[url(/banner.svg)] bg-cover   ">
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-6xl text-black font-bold w-[60%]">
            <span class="gradient">DePIN</span> leverages millions of devices for 
            <span class="gradient"> affordable </span>
            <span class="gradient">  AI </span>
            <span class="gradient"> processing</span>
           
          </h1>
          <div className="mt-[100px] xl:mt-[200px]">
            <span className=" text-black font-semibold text-lg">
              Trusted by the best in business and blockchain
            </span>
          </div>
        </div>

        <div className="absolute bottom-0  w-full overflow-hidden mb-24">
          <Banner images={images} speed={20000} />
        </div>
      </div>
    </>
  );
};

export default Sectionvideo;
