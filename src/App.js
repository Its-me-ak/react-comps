import Button from './Button';
import { GoBell, GoCheckCircle, GoHomeFill } from "react-icons/go";

function App() {
  return (
    <div className="app">
      <h1 className='text-red-800 font-extrabold'>Tailwind</h1>
      <div>
        <Button success rounded outline> <GoBell className='mr-1' /> Click Me</Button>
      </div>

      <div>
        <Button danger outline> <GoCheckCircle className='mr-1' /> Buy Now</Button>
      </div>

      <div>
        <Button warning> <GoHomeFill className='mr-1' /> Read More</Button>
      </div>

      <div>
        <Button secondary outline>Send Now</Button>
      </div>
      
      <div>
        <Button primary rounded>Accept</Button>
      </div>
    </div>
  );
}

export default App;
