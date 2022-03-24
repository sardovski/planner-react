import './App.css';
import { SelectProvider } from './Context/SelectedContext';

import { TaskProvider } from './Context/TaskListContext';
import Router from './Router/Router';


function App() {
  return (

    <div className="App">
      <TaskProvider>
      <SelectProvider>
        <Router/>
      </SelectProvider>
      </TaskProvider>
    </div>
  );
}

export default App;
