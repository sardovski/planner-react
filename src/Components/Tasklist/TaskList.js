import { useTaskList } from "../../Context/TaskListContext"; 
import Task from "../Task/Task"; 
import idGen from "../../Utils/idGen"
import deepCopyFunction from "../../Utils/deepCopyFunc";

import './TaskList.css'

const TaskList = () => {

    const [taskList, _, setNewTaskList] = useTaskList();

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

    function onDelete(id) {
        const updatedList = taskList.filter(x => x.id !== id);
        setNewTaskList(updatedList)
    }


    return (
        <ul className="list-holder">
            {taskList.map(e => {
           
                return (
                    <li className={`list-task ${e.completed ? 'liComplete' : 'liUncomplete'}`} key={idGen()}>
                        <Task
                            data={e}
                            delete={onDelete}
                            complete={onComplete} />
                    </li>
                );
            }).reverse()}
        </ul>
    );

}

export default TaskList;