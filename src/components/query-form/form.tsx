import { FormEvent, useRef } from "react"
import { Plus } from "phosphor-react"

import { ActionButton } from "./action-button"
import { Input } from "./input"

import { events } from "app"

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const form = (event.target as HTMLFormElement)

    const keyInput = (form[0] as HTMLInputElement)
    const valueInput = (form[1] as HTMLInputElement)

    const key = keyInput.value
    const value = valueInput.value

    if (!key || !value) return

    events.navigation.query.add({ key, value })

    keyInput.value = ''
    valueInput.value = ''

    keyInput.focus()
  }

  return (
    <form ref={formRef} className="flex w-full gap-4" onSubmit={handleSubmit}>
      <Input label="Key" />
      <Input label="Value" />

      <ActionButton icon={Plus} type="submit" />
    </form>
  )
}

export { Form }
