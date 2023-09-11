import db from "@/db"
import { todos } from "@/db/schema"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()
  const { id } = body

  const todo = await db.delete(todos).where(eq(id, id))

  return NextResponse.json({ todo })
}
