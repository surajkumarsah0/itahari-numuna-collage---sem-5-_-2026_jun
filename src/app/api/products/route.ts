import { FakeStoreDATA } from "@/data/fakestore"

export async function  GET() {
    const data = FakeStoreDATA
    return  Response.json(data)
    
}