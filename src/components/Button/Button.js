import React from "react"
import PropTypes from "prop-types"
import "./styles.scss"

const Button = ({
  type = "icon",
  icon,
  ariaLabel,
  onClick,
  className = "",
  disabled,
  selected,
}) => {
  let button = { classes: "button", text: "" }

  if (type === "icon") {
    button.classes = "button button-icon"
  }
  if (type === "vote") {
    button.classes = "button button-vote"
    button.text = "Vote Now"
  }
  if (type === "voteAgain") {
    button.classes = "button button-vote"
    button.text = "Vote Again"
  }
  if (type === "submit") {
    button.classes = "button button-submit"
    button.text = "Submit a name"
  }

  const isDisabled = disabled ? "button-vote__disabled " : ""
  const isSelected = selected ? "button-vote__selected" : ""
  return (
    <button
      className={`${button.classes} ${className} ${isDisabled} ${isSelected}`}
      aria-label={ariaLabel || undefined}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <img src={icon} alt={ariaLabel || undefined} />}
      {button.text}
    </button>
  )
}

export default Button

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  ariaLabel: PropTypes.string,
}
