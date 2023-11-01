import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* Wrapper */}

      <div className="w-max flex">
        {/* single item */}

        {featuredProducts.map((featuredProduct) => (
          <div
            key={featuredProduct.id}
            className="w-screen h-[60vh] flex flex-col hover:bg-fuchsia-50 cursor-pointer transition-all duration-300 items-center justify-around p-4 md:w-[50vw] xl:w-[33vw] xl:h-[90vh] "
          >
            {/* image section */}

            {featuredProduct.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image
                  alt=""
                  src={featuredProduct.img}
                  className="object-contain"
                  fill
                />
              </div>
            )}

            {/* text section */}
            <div className=" flex-1 flex  flex-col gap-4 items-center justify-center text-center ">
              <h1 className="text-xl uppercase font-bold xl:text-2xl 2xl:text-3xl">{featuredProduct.title}</h1>
              <p className="p-4 2xl:p-8">{featuredProduct.desc}</p>
              <span className="text-xl font-bold">$ {featuredProduct.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;