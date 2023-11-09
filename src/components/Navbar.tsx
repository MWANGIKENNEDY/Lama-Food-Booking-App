import Link from "next/link";
import React from "react";
import MenuSelect from "./Menu";
import CartIcon from "./CartIcon";
import { getAuthSession } from "@/utils/auth";
import UserLinks from "./UserLinks";

const Navbar = async () => {


;

  console.log("the status from server side session is ")
  return (
    <div className="h-12 md:h-24 text-red-500 p-4 lg:px-20 xl:px-40 flex items-center uppercase justify-between border-b-2 border-b-red-500">
      {/* left links for bigger devices */}

      <div className=" hidden md:flex gap-4 items-center flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="flex-1 text-center">
        <Link href="/" className="text-xl md:font-bold">
          Massimio
        </Link>
      </div>

      <div className="md:hidden">
        <MenuSelect />
      </div>

      {/* right links for larger devices */}
      <div className=" hidden md:flex gap-4 items-center flex-1 justify-end">

        
    <UserLinks/>
        <CartIcon/>
      </div>
    </div>
  );
};

export default Navbar;
