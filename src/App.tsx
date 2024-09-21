import { useState } from 'react';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';

interface Task {
  id: number;
  name: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskName: string) => {
    setTasks([...tasks, { id: tasks.length, name: taskName }]);
  };

  return (
    <div className='app-container'>
      <h1>Task List</h1>
      <AddTask onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;