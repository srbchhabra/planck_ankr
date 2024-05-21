import React from "react";
import { TbBrandShopee } from "react-icons/tb";
import Banner from "./Banners";
import { GrMoney } from "react-icons/gr";
const Sectionvideo = () => {
  const images = [
    "AMAZON",
    "FLIPKART",
    "GO DADDY",
    "PLANCK NETWORK",
    "LEMON TREE HOTELS",
    "SNAPSEED",
    "GOOGLE",
    "META",
    "STELLAR",
    "WORMHOLE",
    "MESSARI",
    "SUZUKI",
   
  ].map((image) => ({
    id: crypto.randomUUID(),
    image,
  }));
  return (
    <>
      <div className="relative h-[100vh] bg-[url(/banner.svg)] bg-cover   ">
      
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-6xl text-black font-bold w-[90%]">
          DePIN designed to harness the processing power of millions of devices, making low-cost AI processing a reality for companies
          </h1>
          <div className="mt-[100px]">
            <span className=" text-black font-semibold text-lg">
              Trusted by the best in business and blockchain
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 w-full overflow-hidden mb-24">
          <Banner images={images} speed={20000} />
        </div>
      </div>
    </>
  );
};

export default Sectionvideo;
