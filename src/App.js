import './App.css';
import Form from './Components/Form';
import TaskList from './Components/Tasklist/TaskList';
import { TaskProvider } from './Context/TaskListContext';


function App() {
  return (

    <div className="App">
      <TaskProvider>
      <Form/>
      <TaskList/>
      </TaskProvider>
    </div>
  );
}

export default App;
