import ProcuctCard from "@/components/ProductCard"
import getFakeStoreData from "@/lib/getFakestoreData"
import { notFound } from "next/navigation"

export default  async function SingleProductPage({params}:PageProps<"/products/[id]">){
    const {id}=await params
    const data:TypeProducts |null = await getFakeStoreData(`/products/${id}`)
    
    if(!data) return notFound()
    return(
        <div>
            <h1>Single Product Page</h1>
            <div>
                <ProcuctCard data={data}/>
            </div>
        </div>
    )
}