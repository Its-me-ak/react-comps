import React from 'react'
// import Table from '../Components/Table'
import SortableTable from '../Components/SortableTable'

const TablePage = () => {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-400', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 7 },
    { name: 'Lime', color: 'bg-green-300', score: 1 }
  ]

  const config = [
    { label: "Name Of Fruit" ,
    render:(fruit) => fruit.name
  },
    { label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}/>
  },
    { label: "Score",
    render: (fruit) => fruit.score,
    header: () => <th className='bg-red-500'>Score</th>
   },
  ]

  const keyFn = (fruit) =>{
    return fruit.name
  }
  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn}/>
    </div>
  )
}

export default TablePage
