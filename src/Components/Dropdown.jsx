import React, { useState } from 'react'

const Dropdown = ({ options, selection, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
    // setIsOpen((currentIsOpen) => !currentIsOpen);
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)
    // console.log(option);
    onSelect(option)
  }

  const renderOption = options.map((option) => {
    return <div onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
  })

  let content = "Please Select..."
  if (selection) {
    content = selection.label
  }
  return (
    <>
      <div onClick={handleToggle}>{content}</div>
      {isOpen && <div>{renderOption}</div>}
      {/* {console.log(isOpen)} */}
    </>
  )
}

export default Dropdown
