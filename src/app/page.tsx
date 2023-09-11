import { TodoTable } from "@/features/todo/TodoTable"
import getTodos from "./actions/getTodos"
import { AddTodoForm } from "@/features/todo/AddTodoForm"

const Page = async () => {
  const todos = await getTodos()

  return (
    <div className="flex flex-col p-12">
      <div className="flex flex-row justify-between mb-12">
        <h1 className="text-[24px] font-bold">TODO一覧</h1>
        <AddTodoForm />
      </div>
      <div className="max-w-[800px] w-full mx-auto">
        <TodoTable todos={todos} />
      </div>
    </div>
  )
}

export default Page
