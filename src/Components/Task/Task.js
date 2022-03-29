import { useMemo, useState } from "react";
import Button from "../Shared/Button";

import './Task.css'

function Task(props) {

    const visibility = useMemo(()=>{
        return {'Hide':0,'Show':1}
    })


    const [show, setShow] = useState('Show');

    function onShow(e) {

        visibility[show] ? setShow('Hide') : setShow('Show')
    }

    return (
        <>
            <section className="task-content">
            <section className="task-content-title-show">
                <span className={props.data.completed ? 'complete' : ''}>{props.data.text}</span>
                {props.data.description ? <Button class='btn task-content-btn' buttonText={show} onClick={onShow}/> : null}
            </section>
                    {!visibility[show] ? <p>{props.data.description}</p>: null}
                     
            </section>
            <div className="controler-btns">
                <Button class="btn complete-btn" onClick={() => props.complete(props.data.id)} buttonText='Complete' />
                <Button class="btn delete-btn" onClick={(e) => props.delete(props.data.id, e)} buttonText='Delete' />
            </div>
        </>);
}

export default Task;