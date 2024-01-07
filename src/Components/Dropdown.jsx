import React, { useState } from 'react'
import { GoChevronDown } from "react-icons/go";
import Panel from './Panel';


const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
    // setIsOpen((currentIsOpen) => !currentIsOpen);
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)
    // console.log(option);
    onChange(option)
  }

  const renderOption = options.map((option) => {
    return <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={() => handleOptionClick(option)} key={option.value}>{option.label}
    </div>
  })

  // let content = "Please Select..."
  // if (selection) {
  //   content = selection.label
  // }
  return (
    <>

      <div className='w-48 relative'>
        <Panel className='flex justify-between items-center cursor-pointer' onClick={handleToggle}>
          {value?.label || "Please Select..."}
          <GoChevronDown className='text-xl' />
        </Panel>
        {isOpen &&
          <Panel className='absolute top-full'>
            {renderOption}
          </Panel>}
        {/* {console.log(isOpen)} */}
      </div>
    </>
  )
}

export default Dropdown 
