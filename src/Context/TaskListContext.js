import { createContext, useState, useContext, useEffect } from 'react';

const TaskListContext = createContext();

const localDBName = 'taskList'

function setDataInLocalStorage(data){

       localStorage.setItem(localDBName,JSON.stringify(data))
}

function getDataFromLocalStorage() {
    return localStorage.getItem(localDBName) ? JSON.parse(localStorage.getItem(localDBName)) : [];
}

function TaskProvider(props) {

    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        setTaskList(getDataFromLocalStorage())
    }, [])

    function addToTaskList(task) {
        setTaskList(taskList => [...taskList, task])
        setDataInLocalStorage([...taskList, task])
    }

    function setNewTaskList(taskList) {
        setTaskList(taskList)
        setDataInLocalStorage(taskList)
    }


    return <TaskListContext.Provider value={[taskList, addToTaskList, setNewTaskList]} {...props} />

}

function useTaskList() {
    const context = useContext(TaskListContext);
    if (!context) {
        throw new Error('Out of the Provider scope')
    }
    return context;
}

export { useTaskList, TaskProvider }
