"use client";

import Link from "next/link";
import React, { use, useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const MenuSelect = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setOpen(!open);
  };
  return (
    <div>
      {open ? (
        <span onClick={handleClick} className=" cursor-pointer flex">
          <i className="pi pi-check"></i>
        </span>
      ) : (
        <span onClick={handleClick} className=" cursor-pointer flex">
          <i className="pi pi-times"></i>
        </span>
      )}
      {open && (
        <div className="absolute z-40 bg-red-500 text-white flex flex-col justify-center items-center gap-10 left-0 w-full top-24 h-[calc(100vh-6rem)]">
          {links.map((link) => (
            <Link onClick={()=>setOpen(false)} href={link.url}>{link.title}</Link>
          ))}

          {user ? (
            <Link href="orders" onClick={()=>setOpen(false)} >Orders</Link>
          ) : (
            <Link href="login" onClick={()=>setOpen(false)}>Login</Link>
          )}

          <CartIcon/>
        </div>
      )}
    </div>
  );
};

export default MenuSelect;
