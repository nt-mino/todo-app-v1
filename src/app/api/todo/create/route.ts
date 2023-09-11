import db from "@/db"
import { todos } from "@/db/schema"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()
  const { title, description, author } = body

  const todo = await db.insert(todos).values({ title: title, description: description, author: author }).returning()

  return NextResponse.json({ todo })
}
