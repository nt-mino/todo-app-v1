import { DetailTodo } from "@/features/todo/DetailTodo"
import getTodo from "../actions/getTodo"
import { DeleteTodo } from "@/features/todo/DeleteTodo"

interface Props {
  id: string
}
const Page = async ({ params }: { params: Props }) => {
  const todo = await getTodo(params)

  return (
    <div className="p-12">
      <div className="flex flex-row justify-between mb-12">
        <h1 className="text-[24px] font-bold">TODO詳細</h1>
        <DeleteTodo />
      </div>
      <div className="max-w-[800px] w-full mx-auto">
        <DetailTodo todo={todo} />
      </div>
    </div>
  )
}

export default Page
