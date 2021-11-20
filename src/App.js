import React, { useEffect } from "react"
import Home from "./screens/Home"
import { useVoteContext } from "context/VoteContext"

function App() {
  const { getCharacters } = useVoteContext()
  useEffect(() => {
    getCharacters()
  }, [])

  return <Home />
}

export default App
