import React, { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expendedIndex, setExpendedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    if(expendedIndex === nextIndex){
      setExpendedIndex(-1)
    }else{
      setExpendedIndex(nextIndex)
    }
  }
  const renderdItems = items.map((item, index) => {
    const isExpended = index === expendedIndex;

    const icon = <span className='text-2xl'> 
      {isExpended ? <GoChevronDown/> : <GoChevronLeft/>}
    </span>

    return (
      <div key={item.id}>
        {/* <div onClick={()=>{setExpendedIndex(index)}}>{item.label}</div> */}
        <div className='flex justify-between items-center cursor-pointer p-3 bg-gray-50 border-b' onClick={() => { handleClick(index) }}>
          {item.label}
          {icon}
        </div>

        {isExpended && <div className='border-b p-5'>{item.content}</div>}
      </div>
    )
  })
  return (
    <div className='border-x border-t rounded'>
      {renderdItems}
    </div>
  )
}

export default Accordion
