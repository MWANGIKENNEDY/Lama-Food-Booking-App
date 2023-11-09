import { pizzas } from "@/data";
import { MenuType, ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async (category: string) => {
  const res = await fetch(
    `http://localhost:3000/api/products?cat=${category}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

type Props = {
  params: { category: string };
};

//the component expects an object with 'params' property, and within that params object,
//there should be a category property, which should be a string.
const page = async ({ params }: Props) => {

  const products:ProductType[] = await getData(params.category);

  return (
    <div className="flex text-red-500 flex-wrap">
      {products.map((product) => (
        <Link
          key={product.id}
          href=""
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 group even:bg-fuchsia-50"
        >
          {/* Image container */}

          {product.img && (
            <div className="relative h-[80%]">
              <Image
                fill
                className="object-contain"
                src={product.img}
                alt=""
              />
            </div>
          )}

          {/* Text container */}
          <div className="flex items-center justify-between ">
            <h1 className="text-2xl uppercase p-2">{product.title}</h1>
            <h2 className=" group-hover:hidden text-xl">$ {product.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default page;
