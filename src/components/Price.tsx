"use client";

import React, { useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, options }: Props) => {
  const [selected, setSelected] = useState(0);
  const [cost, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-4 md:gap-12 shadow-lg">
      <h2 className="text-2xl font-bold">{price.toFixed(2)} </h2>
      {/* options container */}

      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            className="ring-1 rounded-md ring-red-400 p-2"
            key={option.title}
          >
            {option.title}
          </button>
        ))}
      </div>

      {/* quatity and add button container */}

      <div className="flex justify-between items-center ">
        <div className=" ring-1 ring-red-500 flex items-center justify-between w-full p-3 ">
          <span>Quatity</span>

          <div className="flex gap-4">
            <button onClick={()=>setQuantity((prev)=>(prev>1 ? prev -1 : 1))}>{"<"}</button>
            <span>{quantity}</span>
            <button onClick={()=>setQuantity((prev)=>(prev<9 ? prev + 1 : 9))}>{">"}</button>
          </div>
        </div>

        <button className="uppercase w-56 ring-1 p-3 ring-red-500 text-white bg-red-500">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Price;
