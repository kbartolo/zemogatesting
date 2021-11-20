import React, { useState, useContext } from "react"

const VoteContext = React.createContext()

export function useVoteContext() {
  return useContext(VoteContext)
}

export function VoteProvider({ children }) {
  const [characters, setCharacters] = useState(
    JSON.parse(localStorage.getItem("characters")) || []
  )

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
    getVotes,
    updateVotes,
  }
  return <VoteContext.Provider value={payload}>{children}</VoteContext.Provider>
}

export default { VoteProvider, useVoteContext }
