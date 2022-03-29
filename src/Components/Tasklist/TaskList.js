import { useTaskList } from "../../Context/TaskListContext";
import Task from "../Task/Task";
import idGen from "../../Utils/idGen"
import deepCopyFunction from "../../Utils/deepCopyFunc";

import { useSelected } from "../../Context/SelectedContext";
import './TaskList.css'
import { useState } from "react";
import Alert from "../Alert/Alert";

const TaskList = (props) => {
    const [taskList, _, setNewTaskList] = useTaskList();
    const [selected] = useSelected()
    const [alert,setAlert] = useState({confirm:false,idToDelete:''})

    function onComplete(id) {
        let updatedList = deepCopyFunction([...taskList])

        updatedList.forEach(e => {
            if (e.id === id) {
                if (e.completed) {
                    e.completed = false

                } else {
                    e.completed = true
                }
            }
        });

        setNewTaskList(updatedList)
    }
    function onDelete(){

            const updatedList = taskList.filter(x => x.id !== alert.idToDelete);
            setAlert({confirm:false,idToDelete:''})
            setNewTaskList(updatedList)
        

    }
    function onDeclineDelete(){
        setAlert({confirm:false,idToDelete:''})
    }

    function deleteConfirm(id,e) {
        setAlert({confirm:true,idToDelete:id,boxPosition:e.target})

    }


    return (
        <>
        <section className="task-wraper">
        {alert.confirm ? <Alert boxPosition={alert.boxPosition} text='Are you sure?' onAccept={onDelete} onDecline={onDeclineDelete}/> : ''}
            <ul className="list-holder">
                {taskList.filter((e) => {

                    if (selected === 'All') {
                        return e;
                    } else if (selected === 'Complete' && e.completed) {
                        return e;
                    } else if (selected === 'Uncomplete' && e.completed === false) {
                        return e;
                    }

                }).map(e => {

                    return (
                        <li className={`list-task ${e.completed ? 'liComplete' : 'liUncomplete'}`} key={idGen()}>
                            <Task
                                data={e}
                                delete={deleteConfirm}
                                complete={onComplete} />
                        </li>
                    );
                }).reverse()}
            </ul>
        </section>
        </>
    );

}

export default TaskList;