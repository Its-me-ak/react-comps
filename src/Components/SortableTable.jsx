import React from 'react'
import Table from './Table'

const SortableTable = (props) => {
  return (
    <>
    <Table {...props}/>
    {console.log(props)}
    </>
  )
}

export default SortableTable
