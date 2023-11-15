"use client"

import { SelectTodo } from "@/db/schema"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/features/shadcn/ui/table"
import Link from "next/link"

type Props = {
  todos: SelectTodo[]
}
export const TodoTable = ({ todos }: Props) => {
  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead>TODO LIST</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map(todo => {
          return (
            <TableRow key={todo.id}>
              <TableCell className="cursor-pointer">
                <Link href={`/${todo.id}`}>
                  <div className="flex flex-col">
                    <p>{todo.title}</p>
                    <p>{todo.author}</p>
                  </div>
                </Link>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
