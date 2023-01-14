import { BrowserRouter } from "react-router-dom"

import { NavigationEventsHandle } from "components"
import { Router } from "./router"

const App = () => {
  return (
    <BrowserRouter>
      <Router />

      <NavigationEventsHandle />
    </BrowserRouter>
  )
}

export default App
