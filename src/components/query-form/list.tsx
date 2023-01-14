import { useSearchParams } from "react-router-dom"
import { TrashSimple } from "phosphor-react"

import { ActionButton } from "./action-button"
import { events } from "app"

const List = () => {
  const [searchParams] = useSearchParams()

  const displayClasses = "h-full border border-zinc-700 rounded flex-1 font-normal px-2 flex items-center"

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <strong className="font-normal">Current queries</strong>

        <button onClick={events.navigation.query.clear}>Clear all</button>
      </div>

      <ul className="flex flex-col gap-4">
        {[...searchParams.entries()].map(([key, value]) => (
          <li key={key} className="h-10 flex gap-4">
            <strong className={displayClasses}>{key}</strong>
            <span className={displayClasses}>{value}</span>

            <ActionButton
              icon={TrashSimple}
              onClick={() => events.navigation.query.remove(key)}
              type="button"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export { List }
