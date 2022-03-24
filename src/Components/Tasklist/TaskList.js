import { useTaskList } from "../../Context/TaskListContext"; 
import Task from "../Task/Task"; 
import idGen from "../../Utils/idGen"
import deepCopyFunction from "../../Utils/deepCopyFunc";

import { useSelected } from "../../Context/SelectedContext";
import './TaskList.css'

const TaskList = (props) => {
    const [taskList, _, setNewTaskList] = useTaskList();
    const [selected] = useSelected()

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
        <section>
        <ul className="list-holder">
            {taskList.filter((e)=>{

                if(selected === 'All'){
                    return e;
                }else if(selected === 'Complete' && e.completed){
                    return e;
                }else if(selected === 'Uncomplete' && e.completed === false){
                    return e;
                }

            }).map(e => {
           
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
        </section>
    );

}

export default TaskList;