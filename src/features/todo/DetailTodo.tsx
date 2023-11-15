"use client"

import { SelectTodo } from "@/db/schema"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "../shadcn/ui/button"
import { Input } from "../shadcn/ui/input"
import { Label } from "../shadcn/ui/label"
import { Textarea } from "../shadcn/ui/textarea"

type Props = {
  todo: SelectTodo[]
}
export const DetailTodo = ({ todo }: Props) => {
  const params = useParams()
  const { id } = params
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [author, setAuthor] = useState("")
  const [category, setCategory] = useState("")
  const updateTodo = async () => {
    const res = await fetch("/api/todo/update", {
      method: "POST",
      body: JSON.stringify({
        id,
        title,
        category,
        description,
        author,
      }),
    })
    const json = await res.json()
    console.log(json)
  }

  useEffect(() => {
    setTitle(todo[0].title)
    setCategory(todo[0].category)
    setDescription(todo[0].description)
    setAuthor(todo[0].author)
  }, [todo])

  return (
    <div className="flex flex-col gap-8 mb-8">
      <div className="flex flex-col gap-2">
        <Label className="font-bold">タイトル</Label>
        <Input value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className="flex flex-col gap-2">
        <Label className="font-bold">カテゴリー</Label>
        <Input value={category} onChange={e => setCategory(e.target.value)} />
      </div>
      <div className="flex flex-col gap-2">
        <Label className="font-bold">詳細</Label>
        <Textarea value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div className="flex flex-col gap-2">
        <Label className="font-bold">作成者</Label>
        <Input value={author} onChange={e => setAuthor(e.target.value)} />
      </div>
      <div>
        <Button onClick={updateTodo}>更新</Button>
      </div>
    </div>
  )
}
