import Button from '../Components/Button';
import { GoBell, GoCheckCircle, GoHomeFill } from "react-icons/go";

function ButtonPage() {
    const handleClick = () => {
        console.log("clicked!!");
    }
    return (
        <div className="app">
            <h1 className='text-red-800 font-extrabold'>Tailwind</h1>
            <div>
                <Button success rounded outline onClick={handleClick} className="mb-5"> <GoBell className='mr-1' /> Click Me</Button>
            </div>

            <div>
                <Button danger outline onMouseEnter={handleClick}> <GoCheckCircle className='mr-1' /> Buy Now</Button>
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

export default ButtonPage;
