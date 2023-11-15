import db from "@/db"
import { todos } from "@/db/schema"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()
  const { id, title, category, description, author } = body

  const todo = await db.update(todos).set({ title, category, description, author }).where(eq(id, id)).returning()

  return NextResponse.json({ todo })
}
