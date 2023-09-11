import db from "@/db"
import { SelectTodo, todos } from "@/db/schema"
import { eq } from "drizzle-orm"

interface Props {
  id: string
}
export default async function getTodo(params: Props) {
  try {
    const { id } = params
    const number_id = Number(id)
    const selectTodo: SelectTodo[] = await db.select().from(todos).where(eq(todos.id, number_id))
    if (!selectTodo) return []

    return selectTodo
  } catch (error: any) {
    console.log(error)
    throw new Error(error)
  }
}
