import Button from "../Shared/Button";

import './Task.css'

function Task(props) {
    return (
        <>
            <span className={props.data.completed ? 'complete' : ''}>{props.data.text}</span>
            <div className="controler-btns">
                <Button class="btn complete-btn" onClick={() => props.complete(props.data.id)} buttonText='Complete' />
                <Button class="btn delete-btn" onClick={() => props.delete(props.data.id)} buttonText='Delete' />
            </div>
        </>);
}

export default Task;