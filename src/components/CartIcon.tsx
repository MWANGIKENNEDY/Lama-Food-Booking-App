import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href="/cart" className="flex gap-3 items-center">
      <i className="pi pi-shopping-cart"></i>
      <span>Cart</span>
    </Link>
  );
};

export default CartIcon;
