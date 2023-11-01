import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex text-red-500 flex-wrap">
      {pizzas.map((pizza) => (
        <Link
          key={pizza.id}
          href=""
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 group even:bg-fuchsia-50"
        >
          {/* Image container */}

          {pizza.img && (
            <div className="relative h-[80%]">
              <Image fill className="object-contain" src={pizza.img} alt="" />
            </div>
          )}

          {/* Text container */}
          <div className="flex items-center justify-between ">
            <h1 className="text-2xl uppercase p-2">{pizza.title}</h1>
            <h2 className=" group-hover:hidden text-xl">$ {pizza.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default page;