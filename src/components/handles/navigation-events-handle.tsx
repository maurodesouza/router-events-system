import { useEffect } from "react"
import { useSearchParams } from 'react-router-dom'

import { events } from "app"
import { Events } from "types"

type HandleAddQueriesEventPayload = {
  key: string
  value: string
}

const NavigationEventsHandle = () => {
  const [, setSearchParams] = useSearchParams()

  const getQueries = () => new URLSearchParams(window.location.search)
  const handleReplace = (query?: URLSearchParams) => setSearchParams(query, { replace: true })

  const handleAddQueries = (event: CustomEvent<HandleAddQueriesEventPayload[]>) => {
    const queries = getQueries()

    event.detail.forEach(item => {
      const alreadyExist = queries.has(item.key)
      const method = alreadyExist ? 'set' : 'append'

      queries[method](item.key, item.value)
    })

    handleReplace(queries)
  }

  const handleRemoveQueries = (event: CustomEvent<string[]>) => {
    const queries = getQueries()

    event.detail.forEach(key => queries.delete(key))

    handleReplace(queries)
  }

  const handleClearQueries = () => handleReplace()

  useEffect(() => {
    events.on(Events.NAVIGATION_QUERY_ADD, handleAddQueries)
    events.on(Events.NAVIGATION_QUERY_REMOVE, handleRemoveQueries)
    events.on(Events.NAVIGATION_QUERY_CLEAR, handleClearQueries)

    return () => {
      events.off(Events.NAVIGATION_QUERY_ADD, handleAddQueries)
      events.off(Events.NAVIGATION_QUERY_REMOVE, handleRemoveQueries)
      events.off(Events.NAVIGATION_QUERY_CLEAR, handleClearQueries)
    }
  }, [])

  return null
}

export { NavigationEventsHandle }
