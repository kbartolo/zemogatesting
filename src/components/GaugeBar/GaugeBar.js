import React, { memo, useMemo, useRef } from "react"
import { useVoteContext } from "context/VoteContext"
import "./styles.scss"
import thumbsUp from "assets/img/thumbs-up.svg"
import thumbsDown from "assets/img/thumbs-down.svg"

const GaugeBar = ({ vname }) => {
  const { getVotes } = useVoteContext()
  const { current: getCharacter } = useRef(getVotes(vname))
  const {
    votes: { positive, negative },
  } = getCharacter[0]

  const total = positive + negative

  const positivePercentage = useMemo(
    () => ((positive * 100) / total).toFixed(1),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [total]
  )

  const negativePercentage = useMemo(
    () => ((negative * 100) / total).toFixed(1),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [total]
  )

  return (
    <div className='gaugeBar'>
      <div className='gaugeBar__indicators'>
        <div>
          {positivePercentage !== "0" && (
            <>
              <img src={thumbsUp} alt='' />
              {positivePercentage}%
            </>
          )}
        </div>
        <div>
          {negativePercentage !== "0" && (
            <>
              {negativePercentage}%
              <img src={thumbsDown} alt='' />
            </>
          )}
        </div>
      </div>
      <div
        className={`gaugeBar__like ${
          positivePercentage === "0" ? "d-none" : ""
        }`}
        style={{ flex: `${positivePercentage}` }}
      ></div>
      <div
        className={`gaugeBar__dislike ${
          negativePercentage === "0" ? "d-none" : ""
        }`}
        style={{ flex: `${negativePercentage}` }}
      ></div>
    </div>
  )
}

export default memo(GaugeBar)
