import React from 'react'
import Table from './Table'
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import useSort from './hooks/use-sort';


const SortableTable = (props) => {
  console.log(props);
  const { config, data } = props
  const { sortOrder, sortBy, setSortColumn, sortedData} =  useSort(data, config)
 
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column
    }
    return {
      ...column,
      header: () => <th className='cursor-pointer hover:bg-gray-100' onClick={() => setSortColumn(column.label)}>
       <div className='flex items-center gap-1'>
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
       </div>
      </th>
    }
  })

 
  return (
    <>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </>
  )
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <TiArrowSortedUp />
        <TiArrowSortedDown />
      </div>
    )
  }

  if (sortOrder === 'desc') {
    return (
      <div>
        <TiArrowSortedDown />
      </div>
    )
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <TiArrowSortedUp />
      </div>
    )
  }
  else if (sortOrder === null) {
    return (
      <div>
        <TiArrowSortedUp />
        <TiArrowSortedDown />
      </div>
    )
  }
}

export default SortableTable
