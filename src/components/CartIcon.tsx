"use client"

import { useCartStore } from "@/utils/store";
import Link from "next/link";
import React from "react";

const CartIcon = () => {

  const { totalItems } = useCartStore();
  return (
    <Link href="/cart" className="flex gap-5 items-center">
      <i className="pi pi-shopping-cart"></i>
      <span>Cart ({totalItems })  items</span>
    </Link>
  );
};

export default CartIcon;
