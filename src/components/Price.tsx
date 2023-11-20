"use client";

import { ProductType } from "@/types/types";
import { useCartStore } from "@/utils/store";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Price = ({ product }: { product: ProductType }) => {
  const [selected, setSelected] = useState(0);
  const [cost, setCost] = useState(product.price);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCartStore();

  useEffect(() => {
    if (product.options?.length) {
      setCost(
        quantity * product.price + product.options[selected].additionalPrice
      );
    }
  }, [quantity, selected, product]);

  const handleCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      img: product.img,
      price: cost,
      //if option exists, destructure the object...
      ...(product.options?.length && {
        optionTitle: product.options[selected].title,
      }),
      quantity: quantity,
    });
    toast.success("Item added to cart successfully");
  };

  return (
    <div className="flex flex-col gap-4 md:gap-12 shadow-lg">
      <h2 className="text-2xl font-bold">{cost.toFixed(2)} </h2>
      {/* options container */}

      <div className="flex gap-4">
        {product.options?.length &&
          product.options?.map((option, index) => (
            <button
              onClick={() => setSelected(index)}
              style={{
                backgroundColor:
                  selected === index ? "rgb(248 113 113)" : "white",
                color: selected === index ? "white" : "red",
              }}
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
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>

        <button
          onClick={() => handleCart()}
          className="uppercase w-56 ring-1 p-3 ring-red-500 text-white bg-red-500"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Price;
