import React, { useState, useMemo, memo } from "react"
import Button from "components/Button"
import thumbsUp from "assets/img/thumbs-up.svg"
import thumbsDown from "assets/img/thumbs-down.svg"
import { useVoteContext } from "context/VoteContext"
import "./styles.scss"

const VoteNow = ({ vname, hasVoted, setHasVoted }) => {
  const { updateVotes } = useVoteContext()
  const [recentVote, setRecentVote] = useState(null)
  const [btnSelected, setBtnSelected] = useState("none")

  const isEnabled = useMemo(() => {
    if (recentVote === null) return true
    return false
  }, [recentVote])

  const handleVotes = () => {
    if (!hasVoted) {
      updateVotes(vname, recentVote)
      setHasVoted(true)
      return
    }
    setRecentVote(null)
    setBtnSelected("none")
    setHasVoted(false)
  }
  return (
    <div className='voteNow'>
      {!hasVoted && (
        <>
          <Button
            icon={thumbsUp}
            ariaLabel='thumbs up'
            onClick={() => {
              setRecentVote(true)
              setBtnSelected("like")
            }}
            selected={btnSelected === "like" ? true : false}
          />
          <Button
            icon={thumbsDown}
            ariaLabel='thumbs down'
            onClick={() => {
              setRecentVote(false)
              setBtnSelected("dislike")
            }}
            selected={btnSelected === "dislike" ? true : false}
          />
        </>
      )}
      <Button
        type={!hasVoted ? "vote" : "voteAgain"}
        disabled={isEnabled}
        onClick={handleVotes}
      />
    </div>
  )
}

export default memo(VoteNow)
