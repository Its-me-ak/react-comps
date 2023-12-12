import React, { useState } from 'react'

const Accordion = ({items}) => {
  const [expendedIndex, setExpendedIndex] = useState(0);
    const renderdItems = items.map((item, index)=>{
      const isExpended = index === expendedIndex;
        return(
            <div key={item.id}>
                <div onClick={()=>{setExpendedIndex(index)}}>{item.label}</div>
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
