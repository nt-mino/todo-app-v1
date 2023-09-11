import db from "@/db"
import { SelectTodo, todos } from "@/db/schema"

export default async function getTodos() {
  try {
    const selectTodos: SelectTodo[] = await db.select().from(todos)
    if (!selectTodos) return []

    return selectTodos
  } catch (error: any) {
    console.log(error)
    throw new Error(error)
  }
}
