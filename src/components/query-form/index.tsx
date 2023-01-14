import { Form } from "./form"
import { List } from "./list"

const QueryForm = () => {
  return (
    <div className="w-[520px]">
      <Form />

      <div className="h-[1px] bg-zinc-700 w-full my-5" />

      <List />
    </div>

  )
}

export { QueryForm }
