import { useReducer, useState } from 'react';
import Button from '../Components/Button';
import Panel from '../Components/Panel';


const reducer = (state, action) =>{
    return {
      ...state,
      count: state.count + 1
    }
}
const CounterPage = ({ intialCount }) => {
  const [state, dispatch] = useReducer(reducer, {
     count: intialCount ,
      valueToAdd: 0
    });
  // const [count, setCount] = useState(intialCount);
  // const [valueToAdd, setValueToAdd] = useState(0)

  const increment = () => {
    dispatch()
  }

  const decrement = () => {
    // setCount(count - 1)
  }

  const handleChamge = (event) => {
    const value = parseInt(event.target.value) || 0;
    // setValueToAdd(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCount(count+valueToAdd)
    // setValueToAdd(0)
  }
  return (
    <>
      <Panel className="m-3">
        <h1 className='text-xl font-bold'>Count is: {state.count}</h1>
        <div className='flex flex-row'>
          <Button onClick={increment}>Increment</Button>
          <Button onClick={decrement}>Decrement</Button>
        </div>

        <form onSubmit={handleSubmit} >
          <label htmlFor="">Add a lot</label>
          <input type="number" value={state.valueToAdd || ""} onChange={handleChamge} className='p-1 m-3 bg-gray-50 border border-gray-300' />
          <Button>Add it</Button>
        </form>
      </Panel>


    </>
  )
}

export default CounterPage
