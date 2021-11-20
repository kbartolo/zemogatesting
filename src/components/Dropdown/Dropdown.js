import React, { useState } from "react"
import "./styles.scss"

const Dropdown = ({ handleSelection }) => {
  const [selectValue, setSelectValue] = useState("list")

  const onSelect = (e) => {
    setSelectValue(e.target.value)
    handleSelection(e.target.value)
  }

  return (
    <div className="dropdown">
      <select
        onChange={onSelect}
        value={selectValue}
        className="dropdown__select"
      >
        <option value="list">List</option>
        <option value="grid">Grid</option>
      </select>
    </div>
  )
}

export default React.memo(Dropdown)
