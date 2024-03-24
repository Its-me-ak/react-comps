import Button from '../Components/Button';
import useCounter from '../Components/hooks/use-counter';



const CounterPage = ({intialCount}) => {
    const { count, increment } = useCounter(intialCount)
  return (
    <>
      <div>
        <h1>Count is: {count}</h1>
              <Button onClick={increment}>Increment</Button>
      </div>
    </>
  )
}

export default CounterPage
