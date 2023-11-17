import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

//get all products
export const GET = async (req: NextRequest) => {
  const session = await getAuthSession();

  console.log('session at orders page is ',session);

  if (session) {
    try {

      console.log('indide first IF statemenr')
      if (session.user.isAdmin) {
        const orders = await prisma.order.findMany();
        console.log('admin orders is ',orders)
        return new NextResponse(JSON.stringify(orders), {
          status: 200,
        });
      }
      const orders = await  prisma.order.findMany({
        where:{
            userEmail:session.user.email!
        }
      });
      console.log('normal user orders is ',orders)
      return new NextResponse(JSON.stringify(orders), {
        status: 200,
      });
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong" }),
        {
          status: 500,
        }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: "You are not authorized" }),
      {
        status: 500,
      }
    );
  }
};
