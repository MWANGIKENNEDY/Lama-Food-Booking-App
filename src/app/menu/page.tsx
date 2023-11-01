import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
      {menu.map((item) => (
        <Link href={`/menu/${item.slug}`} key={item.id}className={`flex-1 w-full bg-cover p-8 md:h-1/2`} style={{backgroundImage:`url(${item.img})`}}>
          <div className={`text-${item.color} w-1/2`}>
            <h1 className="uppercase text-3xl font-bold ">
              italian pastas
            </h1>
            <p className="my-8 text-sm">
              {item.desc}
            </p>

            <button className={`hidden 2xl:block text-${item.color === "black" ? "white" : "red-500"} py-2 px-4 rounded-md`} style={{backgroundColor:`${item.color}`}}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
