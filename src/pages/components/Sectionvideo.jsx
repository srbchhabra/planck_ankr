import React from "react";
import { TbBrandShopee } from "react-icons/tb";
import Banner from "./Banners";
import { GrMoney } from "react-icons/gr";
import Button from "./Button";
import { motion } from "framer-motion"
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
      <div className="relative h-[120vh] bg-[url(/globeglobe.png)] bg-contain bg-no-repeat ">
        <div>
        {/* Content overlay */}
        <motion.div initial={{opacity:0,y:500}} whileInView={{opacity:1, y: 0}} transition={{duration:1}}  className="absolute w-full  inset-0 flex flex-col items-center bg-cover  text-center text-white">
          <h1 className="text-5xl absolute top-[20%] font-nunito text-white font-semibold w-full xl:w-[80%] 2xl:w-[60%] h-full pt-32 ">
            <span class="">DePIN</span> leverages millions of devices for 
            <span class=""> affordable </span>
            <span class=""> AI </span>
            <span class=""> processing</span>
            <div className="flex w-full justify-center mt-10 gap-5 " >
            <Button label="Get Started" ></Button>
            <Button label="Learn More" ></Button>
            </div>
          </h1>
       
        </motion.div>
        </div>

     {/* <div className=" bottom-0  w-full overflow-hidden mb-24">
          <Banner images={images} speed={20000} />
        </div>  */}
      </div>
    </>
  );
};

export default Sectionvideo;
