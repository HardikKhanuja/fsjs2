import './App.css';
import { useState } from 'react';
import Task from './Components/Task';
import { v4 } from 'uuid';
import { MdDoneOutline } from 'react-icons/md';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [editId, setEditId] = useState(0);

  function AddTask() {
    if (task !== "") {
      setTaskList([...taskList, { task, index: v4() }]);
      setTask('');
    }

    if (editId) {
      const editTask = taskList.find((i) => i.index === editId);
      const updatedTasks = taskList.map((t) => 
        t.index === editTask.index ? t= {index: t.index , task} : {index: t.index, task: t.task}
      )
      setTaskList(updatedTasks);
      setEditId(0);
      return;
    }
  }

  const deleteTodo = (index) => {
    const updatedTasks = taskList.filter((task) => task.index !== index);
    setTaskList(updatedTasks);
  }

  const handleEdit = (index) => {
    const editTask = taskList.find((i) => i.index === index);
    setTask(editTask.task);
    setEditId(index);
  }

  return (
    <div className="App">
      <h1 className='title'> Todo App </h1>
      <input type='text' value={task} onChange={(e) => { setTask(e.target.value) }} />
      <span className='add-btn' onClick={AddTask}> <MdDoneOutline /> </span>

      <div className='task-box'>
      {taskList.map((task) => {
        return <Task task={task.task} deleteTodo={deleteTodo} index={task.index} handleEdit={handleEdit} />
      })}
      </div>

    </div>
  );
}

export default App;