import React, { useRef, useState } from "react"
import "./styles.scss"
import { timeElapsed, limitText } from "utils/helper"
import { useWindowSize } from "hooks/useWindowSize"
import Button from "components/Button"
import GaugeBar from "components/GaugeBar"
import VoteNow from "components/VoteNow"
import thumbsDown from "assets/img/thumbs-down.svg"
import thumbsUp from "assets/img/thumbs-up.svg"

const Card = (props) => {
  const { name, description, category, picture, lastUpdated, votes, type } =
    props
  const [hasVoted, setHasVoted] = useState(null)
  const time = timeElapsed(lastUpdated)

  const card = useRef(null)
  let background = `linear-gradient(90deg, rgba(140,140,140,0) 10%, rgba(140,140,140,1) 25%, rgba(103,103,103,1) 50%, rgba(140,140,140,1) 100%) , url('images/${picture}')`

  const width = useWindowSize()

  let classes = "card"
  if (width > 768 && type !== "grid") {
    background = `linear-gradient(90deg, rgba(140,140,140,0) 10%, rgba(140,140,140,1) 25%, rgba(103,103,103,1) 50%, rgba(140,140,140,1) 100%) , url('images/${picture}')`
    classes += " card__list"
  } else if (width < 768 && type !== "grid") {
    classes += " card__list"
  } else {
    background = `url('images/${picture}')`
    classes += " card__grid"
  }

  if (width < 560) {
    classes = " card__mobile"
    background = `url('images/${picture}')`
  }

  return (
    <div
      ref={card}
      className={classes}
      style={{
        backgroundImage: background,
      }}
    >
      <div className="card__content">
        <div className="card__title">
          <div className="card__icon">
            <Button
              icon={votes.positive > votes.negative ? thumbsUp : thumbsDown}
              ariaLabel={
                votes.positive > votes.negative ? "thumbs up" : "thumbs down"
              }
              className="ml-0"
            ></Button>
          </div>
          <div>
            <div className="card__name">{limitText(name, 21)}</div>
            <div className="card__description">
              {limitText(description, 85)}
            </div>
          </div>
        </div>

        <div className="card__body">
          <div className="card__time">
            {!hasVoted ? `${time} in ${category}` : "Thank you for your vote!"}
          </div>
          <VoteNow
            vname={name}
            hasVoted={hasVoted}
            setHasVoted={setHasVoted}
          ></VoteNow>
        </div>
      </div>
      <div className="card__gaugebar">
        <GaugeBar vname={name} />
      </div>
    </div>
  )
}

export default React.memo(Card)
