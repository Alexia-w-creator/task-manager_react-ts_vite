// import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList.tsx';
import TaskProvider from './context/taskContext.tsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <TaskProvider>
        <TaskList />
      </TaskProvider>
    </>
  );
}

export default App;
