import React, { useState, useContext } from "react"
import data from "assets/data.json"

const VoteContext = React.createContext()

export function useVoteContext() {
  return useContext(VoteContext)
}

export function VoteProvider({ children }) {
  const [characters, setCharacters] = useState([])

  const getCharacters = () => {
    if (localStorage.getItem("characters")) {
      setCharacters(JSON.parse(localStorage.getItem("characters")))
    } else {
      setCharacters(data)
      localStorage.setItem("characters", JSON.stringify(data))
    }
  }

  const getVotes = (vname) =>
    characters.data.filter((item) => item.name === vname)

  const updateVotes = (vname, vote) => {
    let getCharacter = getVotes(vname)

    if (vote === true) {
      getCharacter[0].votes.positive = getCharacter[0].votes.positive + 1
    } else {
      getCharacter[0].votes.negative = getCharacter[0].votes.negative + 1
    }

    const updateCharacters = { ...characters, getCharacter }

    setCharacters(updateCharacters)
    localStorage.setItem("characters", JSON.stringify(updateCharacters))
  }

  const payload = {
    characters,
    getCharacters,
    getVotes,
    updateVotes,
  }
  return <VoteContext.Provider value={payload}>{children}</VoteContext.Provider>
}

const contextAndProvider = { VoteProvider, useVoteContext }

export default contextAndProvider
