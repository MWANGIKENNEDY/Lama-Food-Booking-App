import Image from "next/image";
import React from "react";

const Slider = () => {
  return (
    // h-[calc(100vh-6rem/9rem)]
    <div className="flex flex-col md:flex-row h-[calc(100vh-6rem)] ">
      {/* text section */}

      <div className="relative flex-1 flex justify-center items-center gap-8 text-red-500 font-bold flex-col">
        <h1 className="text-5xl font-bold uppercase text-center md:text-4xl xl:text-5xl">
          Always fresh & always crispy & always hot
        </h1>
        <button className="bg-red-500 font-bold text-white sm:mb-3 md:mb-0  px-8 py-4 rounded-md">
          Subscribe
        </button>
      </div>

      {/* image section */}

      <div className="flex-1 relative">
        <Image
          fill
          src="/slide1.png"
          alt="slide 1 image"
          className=" object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;