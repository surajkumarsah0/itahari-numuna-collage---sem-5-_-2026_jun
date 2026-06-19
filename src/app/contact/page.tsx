import wait from "@/lib/wait"



export default async function Contact(){
   await wait(5)
    throw new Error("error")
    return(
        <div>
            <h1>this is contact us page.</h1>
        </div>
    )
}
