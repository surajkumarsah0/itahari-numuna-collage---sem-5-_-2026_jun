import { cookies } from "next/headers";
import { NextRequest } from "next/server";



export async function GET(req: NextRequest) {
  const cookie_get = req.cookies.get("hello")

  const cookie = await cookies()
  cookie.set("hello", "user",)
  return Response.json({ message: "Hello World" ,cookie_get});
}


export async function POST() {

  return Response.json(
    { hello: "world" },
    {
      status: 200,
    },
  );
}
