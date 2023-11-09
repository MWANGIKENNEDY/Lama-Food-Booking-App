"use client"

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {


  const router = useRouter()
  const {data,status} = useSession();

  console.log("data is ",data);
  console.log("status is ",status)

  if(status === "loading"){
    return <p>loading....</p>
  }

  if(status === "authenticated"){
    router.push("/")
  }


  return (
    <div className="flex items-center justify-center  p-4 md:p-20 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]  ">
      <div className="h-full w-full md:h-1/2 flex flex-col md:flex-row  md:w-full lg:w-[80%] xl:w-[70%] 2xl:w-[50%]  shadow-xl">
        {/* image section  */}

        <div className="relative h-1/3 md:h-full w-full  md:w-1/2 ">
          <Image fill className=" object-cover" alt="" src="/loginBg.png" />
        </div>

        {/* text section  */}

        <div className="h-2/3 pt-6 md:p-4  md:h-1/2 w-full flex flex-col gap-10 md:w-1/2  md:justify-start">
          <h1 className="font-bold text-2xl md:text-3xl">Welcome</h1>

          <p className="md:text-base min-w-min">
            Log into your account or create a new one using social buttons.
          </p>

          <button className="shadow-md p-3 flex items-center" onClick={()=>signIn("google")}>
            <div className="relative h-[3vh] w-1/6 ">
              <Image
                src="/google.png"
                alt=""
                fill
                className="object-contain object-left"
              />
            </div>
            <span className="w-5/6 md:text-base">Sign in with Google</span>
          </button>

          <button className="shadow-md p-3 flex items-center">
            <div className="relative h-[3vh] w-1/6 ">
              <Image
                src="/facebook.png"
                alt=""
                fill
                className="object-contain object-left"
              />
            </div>
            <span className="w-5/6 md:text-base">Sign in with Facebook</span>
          </button>

          <span className=" text-xs md:text-sm">
            Have a problem? <span className="underline">Contact us</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
