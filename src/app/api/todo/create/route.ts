import db from "@/db"
import { todos } from "@/db/schema"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()
  const { title, category, description, author } = body

  const todo = await db.insert(todos).values({ title, category, description, author }).returning()

  return NextResponse.json({ todo })
}
