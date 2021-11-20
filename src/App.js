import React, { useEffect } from "react"
import Home from "./screens/Home"
import data from "./assets/data.json"

function App() {
  const initialize = () => {
    localStorage.setItem("characters", JSON.stringify(data))
  }

  useEffect(() => {
    initialize()
  })

  return <Home />
}

export default App
