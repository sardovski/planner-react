import './App.css';

import { TaskProvider } from './Context/TaskListContext';
import Router from './Router/Router';


function App() {
  return (

    <div className="App">
      <TaskProvider>
        <Router/>
      </TaskProvider>
    </div>
  );
}

export default App;
