import { FakeStoreDATA } from "@/data/fakestore"
import { createProductInDB, getProductFromDB } from "@/services/productServices"

export async function GET() {
    // const data = FakeStoreDATA
    try {
        const data = await getProductFromDB()
        return Response.json(data)
    } catch (error) {
        return Response.json(
            { message: "Error fetching products from database", error },
            { status: 500 }
        )

    }
}

export async function POST(request: Request) {
    try {
        const newProduct = await request.json()
        const createdProduct = await createProductInDB(newProduct)

        return Response.json({ message: "Product created successfully", newProduct: createdProduct }, { status: 201 })
    } catch (error) {
        return Response.json(
            { message: "Error creating product", error },
            { status: 500 }
        )
    }
}