import { FakeStoreDATA } from "@/data/fakestore";
import { deleteProductFromDB, getProductByIdFromDB, getProductFromDB, updateProductInDB } from "@/services/productServices";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  ctx: RouteContext<"/api/products/[id]">,
) {
  const { id } = await ctx.params;

  // const foundProduct = FakeStoreDATA.find((data) => data.id == parseInt(id));
  const foundProduct = await getProductByIdFromDB(parseInt(id));
  if (!foundProduct)
    return Response.json(null, { status: 404 });
  return Response.json(foundProduct);
}

export async function DELETE(
  req: Request,
  ctx: RouteContext<"/api/products/[id]">,
) {
  const { id } = await ctx.params;

  // const foundProduct = FakeStoreDATA.find((data) => data.id == parseInt(id));
  const foundProduct = await deleteProductFromDB(parseInt(id));
  if (!foundProduct)
    return Response.json(null, { status: 404 });
  return Response.json({ message: "Product deleted successfully" });
}

export async function PUT(
  req: Request,
  ctx: RouteContext<"/api/products/[id]">,
) {
  const { id } = await ctx.params;
  const updatedProduct = await req.json() as TypeProducts;
  if(!validateProductType(updatedProduct)) return NextResponse.json(
    {
      message: "Invalid product data"
    },
    {
      status: 400
    }
  )
  try {
    const result = await updateProductInDB(parseInt(id), updatedProduct);
    return NextResponse.json(
      {
        message: "Product updated successfully",
        updatedProduct: result
      },
      {
        status: 200
      }
    )
  } catch (err) {
    return NextResponse.json(
      {
        message: "Error updating product"
      },
      {
        status: 500
      }
    )
  }


}


function validateProductType(product: TypeProducts): boolean {
  const { title, price, description, category, image } = product;
  return (
    typeof title === "string" &&
    typeof price === "number" &&
    typeof description === "string" &&
    typeof category === "string" &&
    typeof image === "string"
  );
}