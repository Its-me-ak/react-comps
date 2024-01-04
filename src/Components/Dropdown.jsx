import React, { useState } from 'react'

const Dropdown = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () =>{
        setIsOpen(!isOpen);
        // setIsOpen((currentIsOpen) => !currentIsOpen);
    }

    const renderOption = options.map((option)=>{
        return <div key={option.value}>{option.label}</div>
    })
  return (
    <>
    <div onClick={handleToggle}>Select...</div>
    {isOpen && <div>{renderOption}</div>}
    </>
  )
}

export default Dropdown
