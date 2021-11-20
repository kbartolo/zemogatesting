import React from "react"
import Card from "components/Card"
import { useVoteContext } from "context/VoteContext"
import { useWindowSize } from "hooks/useWindowSize"
import "./styles.scss"

const WrapperCard = ({ selectView }) => {
  const {
    characters: { data },
  } = useVoteContext()
  const width = useWindowSize()
  const view = selectView === "grid" ? "wrappercard__grid" : "wrappercard__list"
  let classes = `wrappercard ${view}`

  if (width < 560) {
    classes = `wrappercard wrappercard__mobile`
  }

  return (
    <div className={classes}>
      {data &&
        data.map((item, i) => {
          return (
            <Card
              key={i}
              name={item.name}
              description={item.description}
              picture={item.picture}
              lastUpdated={item.lastUpdated}
              category={item.category}
              votes={item.votes}
              type={selectView}
            ></Card>
          )
        })}
    </div>
  )
}

export default WrapperCard
