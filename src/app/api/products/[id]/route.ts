// This is the type annotation for the function parameter.
// It specifies that the function expects an object as its argument,
// and that object should have a property named params.

import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// The params property, in turn, should be an object with a property named id of type string.
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });
    return new NextResponse(JSON.stringify(product), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      {
        status: 500,
      }
    );
  }
};
