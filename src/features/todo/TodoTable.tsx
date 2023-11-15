"use client"

import { SelectTodo } from "@/db/schema"
import { Badge } from "@/features/shadcn/ui/badge"
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
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <p className="text-3xl font-bold">{todo.title}</p>
                      <Badge variant="outline" className="self-center">
                        {todo.category}
                      </Badge>
                    </div>
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
