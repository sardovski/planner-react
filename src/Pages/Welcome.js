import { Link } from "react-router-dom";
import Button from "../Components/Shared/Button";

function Welcome() {


    return (
        <article>
            <h1>Welcome to Task Planner</h1>
            <h4> a lightweight and simple organizer for your tasks</h4>

            <p>Let's get started here:</p>
            <Button 
            class='start-btn'
            buttonText={<Link to={'/Tasks'}>Start</Link>}
            />
        </article>
    )
}

export default Welcome;