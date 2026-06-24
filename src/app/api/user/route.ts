import { db } from "@/db"
import { createUserInDB, getUserFromDB } from "@/services/userServices"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req:NextRequest){
    try {
        const user=await req.json()

    console.log('post method triggered!')

    await createUserInDB(user)

    return NextResponse.json({
        msg:"post method triggered of user ",
        user
    },{
        status:200
    })
        
    } catch (error) {
        return NextResponse.json({
            msg:"error in creating user",
            
            error
        },{status:500})
        
    }
}

export async function GET(){
    try {
        const users=await getUserFromDB()

        return NextResponse.json({
            msg:"users fetched!!",
            users
        },{status:200})
        
    } catch (error) {
        return NextResponse.json({
            msg:"error during fetching users from database"
           , error
        },{status:500})
        
    }
}