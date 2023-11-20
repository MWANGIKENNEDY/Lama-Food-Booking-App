"use client";

import { useCartStore } from "@/utils/store";
import Image from "next/image";
import React from "react";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row ">
      {/* left side  */}

      <div className="flex flex-col h-1/2 lg:h-full gap-4 overflow-scroll md:justify-center p-4  lg:w-2/3 xl:p-40  2xl:flex-1 ">
        {products.map((item) => (
          <div
            key={item.id}
            className="flex shadow-md  justify-between items-center  text-red-500  rounded-md mb-8"
          >
            {/* image section */}
            <div className="relative w-1/5  h-[10vh] ">
              {item.img && (
                <Image
                  alt=""
                  src={item.img}
                  fill
                  className=" object-contain"
                />
              )}
            </div>

            {/* middle section */}

            <div className="flex flex-col  flex-1 px-6 gap-1">
              <h1 className="uppercase text-xl font-bold">{item.title}</h1>
              <span className="">{item.optionTitle}</span>
            </div>

            {/* right section */}

            <div className="flex  gap-5 items-center">
              <span className="font-bold text-lg">${item.price}</span>
              <button className="text-xl" onClick={() => removeFromCart(item)}>
                x
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* right side */}

      <div className="flex h-1/2 lg:h-full flex-col justify-center  p-4 lg:w-1/3 lg:pr-20 xl:pr-40 text-red-500 2xl:flex-1">
        <div className="flex flex-col gap-4  w-full">
          <div className="flex items-center justify-between ">
            <span>Subtotal ({totalItems} items)</span>
            <span>${totalPrice}</span>
          </div>

          <div className="flex items-center justify-between ">
            <span>Service Cost</span>
            <span>$0.00</span>
          </div>

          <div className="flex items-center justify-between ">
            <span>Delivery Cost</span>
            <span className=" uppercase text-green-500">free</span>
          </div>
        </div>

        <hr className=" my-2" />

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between ">
            <span>TOTAL(INCL. VAT)</span>
            <span className=" uppercase text-green-500 font-bold">
              ${totalPrice}
            </span>
          </div>

          <button className="bg-red-500 ml-auto text-white rounded-md w-1/2 px-12 py-3 uppercase">
            checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
