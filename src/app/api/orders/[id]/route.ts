// This is the type annotation for the function parameter.
// It specifies that the function expects an object as its argument,
// and that object should have a property named params.

import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// The params property, in turn, should be an object with a property named id of type string.
export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    const body = await req.json();

    await prisma.order.update({
      where: {
        id: id,
      },
      data: { status: body },
    });
    return new NextResponse(
        JSON.stringify({ message: "Order has been updated!" }),
        {
          status: 200,
        }
      );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "You are not authorized" }),
      {
        status: 500,
      }
    );
  }
};
