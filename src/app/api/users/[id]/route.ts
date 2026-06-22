export async function GET(req: Request, ctx:RouteContext<"/api/users/[id]">) {
  const {id}=await ctx.params
  return Response.json({ message: "Hello World" });
} 