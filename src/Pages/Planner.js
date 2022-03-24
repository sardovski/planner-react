import Form from "../Components/Form/Form";
import TaskList from "../Components/Tasklist/TaskList";
import Alert from "../Components/Alert/Alert";


function Planner() {
    return(
        <>
        <Alert >
        <Form/>
        <TaskList />
        </Alert>
        </>
    );
}


export default Planner;