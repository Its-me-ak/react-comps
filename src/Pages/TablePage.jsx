import React from 'react'
import SortableTable from '../Components/SortableTable'

const TablePage = () => {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-400', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 7 },
    { name: 'Lime', color: 'bg-green-300', score: 1 },
    { name: 'Mango', color: 'bg-yellow-300', score: 4.5 }
  ]

  const check = [
    {name: "akib", age: 23}
  ]

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score
    },
    {
      label : "Score Squared",
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score ** 2
    }
  ]

  const keyFn = (fruit) => {
    return fruit.name
  }
  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} check={check}/>
    </div>
  )
}

export default TablePage
