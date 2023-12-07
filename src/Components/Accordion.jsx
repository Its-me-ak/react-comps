import React, { useState } from 'react'

const Accordion = ({items}) => {
  const [expendedIndex, setExpendedIndex] = useState(0);
    const renderdItems = items.map((item, index)=>{
      const isExpended = index === expendedIndex;
      console.log(isExpended);
        return(
            <div key={item.id}>
                <div>{item.label}</div>
                <div>{item.content}</div>
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
