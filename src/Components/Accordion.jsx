import React from 'react'

const Accordion = ({items}) => {
    const renderdItems = items.map((item)=>{
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
