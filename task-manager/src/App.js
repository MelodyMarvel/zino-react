import './App.css';
import TaskManager from './components/taskManager/TaskManager';
import TaskManagerReducer from './components/taskManager/TaskManagerReducer';

function App() {
  return (
    <div>
      {/* <TaskManager/> */}
      <TaskManagerReducer/>
    </div>
  );
}

export default App;
