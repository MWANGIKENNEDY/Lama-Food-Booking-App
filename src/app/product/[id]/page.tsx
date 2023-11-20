import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";
import { ProductType } from "@/types/types";

const getData = async (id:string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};


const SingleProductPage = async ({params}:{params:{id:string}}) => {

  const singleProduct:ProductType = await getData(params.id);


  return (
    <div className="p-4 lg:p-20 xl:p-40 text-red-500 flex flex-col justify-around  h-screen md:flex-row md:justify-center md:items-center md:gap-8 ">
      {/* Image Container */}

      {singleProduct.img && (
        <div className="relative flex-1 md:h-[70%]  ">
          <Image
            alt=""
            className=" object-contain"
            fill
            src={singleProduct.img}
          />
        </div>
      )}

      {/* Text Container */}

      <div className="flex flex-col flex-1 gap-4 md:gap-12 md:justify-center md:h-[70%]  ">
        <h1 className="text-3xl font-bold uppercase md:text-4xl xl:text-5xl">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>

        {/* this is a container with user interactivity, so we make it a client component */}
        <Price product={singleProduct} />
      </div>
    </div>
  );
};

export default SingleProductPage;
