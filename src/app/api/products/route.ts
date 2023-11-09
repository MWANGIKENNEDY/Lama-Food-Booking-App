import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

//get all products
export const GET = async (req: NextRequest) => {

  console.log("the url that was hit is ",req.url)
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat");

  try {
    const products = await prisma.product.findMany({
      where:{
        //if cat exists, destructure the object provided
        ...(cat ? {catSlug:cat} : {isFeatured:true})
      }
    })
    return new NextResponse(JSON.stringify(products), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Somet" }), {
      status: 500,
    });
  }
};
