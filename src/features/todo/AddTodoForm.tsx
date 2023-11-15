"use client"

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/features/shadcn/ui/alert-dialog"
import { Input } from "@/features/shadcn/ui/input"
import { Label } from "@/features/shadcn/ui/label"
import { Textarea } from "@/features/shadcn/ui/textarea"
import { useState } from "react"

export const AddTodoForm = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [author, setAuthor] = useState("")
  const [category, setCategory] = useState("")
  const addTodo = async () => {
    const res = await fetch("/api/todo/create", {
      method: "POST",
      body: JSON.stringify({
        title,
        category,
        description,
        author,
      }),
    })
    const json = await res.json()
    console.log(json)
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-primary text-background px-4 py-1 text-[14px] rounded-sm">+ TODO追加</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>TODOの追加</AlertDialogTitle>
        </AlertDialogHeader>
        <div className="flex flex-col gap-8 mb-8">
          <div className="flex flex-col gap-2">
            <Label className="font-bold">タイトル</Label>
            <Input value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold">カテゴリ</Label>
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
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>キャンセル</AlertDialogCancel>
          <AlertDialogAction onClick={addTodo}>追加</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
