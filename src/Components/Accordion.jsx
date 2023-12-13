import React, { useState } from 'react'

const Accordion = ({ items }) => {
  const [expendedIndex, setExpendedIndex] = useState(0);

  const handleClick = (nextIndex) => {
    setExpendedIndex(nextIndex)
  }
  const renderdItems = items.map((item, index) => {
    const isExpended = index === expendedIndex;

    const icon = <span>
      {isExpended ? 'DOWN': 'LEFT'}
    </span>
    console.log(icon);

    return (
      <div key={item.id}>
        {/* <div onClick={()=>{setExpendedIndex(index)}}>{item.label}</div> */}
        <div onClick={() => { handleClick(index) }}>{item.label}</div>

        {isExpended && <div>{item.content}</div>}
      </div>
    )
  })
  return (
    <>
      {renderdItems}
    </>
  )
}

export default Accordion
