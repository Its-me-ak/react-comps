import { useReducer } from 'react';
import Button from '../Components/Button';
import Panel from '../Components/Panel';
import { produce } from "immer"

const INCREMENT_COUNT = "increment"
const DECREMENT_COUNT = "decrement"
const SET_VALUE_TO_ADD = "value-to-add"
const VALUE_ADD_TO_COUNT = "value-add-to-count"

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1
      return

    case DECREMENT_COUNT:
      state.count = state.count - 1
      return;

    case VALUE_ADD_TO_COUNT:
      state.count = state.count + state.valueToAdd
      state.valueToAdd = 0
      return;

    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload
      return;
      
    default:
      return state
  }
}
const CounterPage = ({ intialCount }) => {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: intialCount,
    valueToAdd: 0
  });
  console.log(state);

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT
    })
  }

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT
    })
  }

  const handleChamge = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: VALUE_ADD_TO_COUNT
    })
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
