import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

//get all products
export const GET = async (req: NextRequest) => {
  const session = getAuthSession();
  if (session) {
    try {
      if (session.user.isAdmin) {
        const orders = prisma.order.findMany();
        return new NextResponse(JSON.stringify(orders), {
          status: 200,
        });
      }
      const orders = prisma.order.findMany({
        where:{
            userEmail:session.user.email!
        }
      });
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
