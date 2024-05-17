import React from "react";

const Banners = ({ images, speed = 5000 }) => {
  return (
    <div className="inner h-full">
      <div className="wrapper">
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
         <div className="w-full" key={id}>
              <span className="w-full text-2xl font-semibold text-nowrap" >{image}</span> 
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
           <div className="w-full"  key={id}>
               <span className="w-full text-2xl font-semibold text-nowrap " >{image}</span> 
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="w-full" key={id}>
               <span className="w-full text-2xl font-semibold text-nowrap " >{image}</span> 
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Banners;
