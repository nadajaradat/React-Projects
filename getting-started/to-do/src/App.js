import './App.css';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import AddTask from './components/AddTask';
import { useEffect, useState } from 'react';

function App() {
  const tasks = [
    { id: 1, name: "Task 1", completed: true },
    { id: 2, name: "Task 2", completed: false },
    { id: 3, name: "Task 3", completed: false },
    { id: 4, name: "Task 4", completed: false },
    { id: 5, name: "Task 5", completed: false },
  ];
  const [filterText, setFilterText] = useState('');
  const [inCompletedOnly, setInCompletedOnly] = useState(false);
  const [taskList, setTaskList] = useState(tasks);
  const [active, setActive] = useState('active');


  const toggleTaskCompleted = (taskId) => {
    setTaskList((prevTaskList) => {
      const updatedTasks = prevTaskList.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      // Save to localStorage
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  useEffect(() => {
    try {
      const localStorageTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      setTaskList(localStorageTasks);
    } catch (error) {
      console.error('Error parsing tasks from localStorage:', error);
      // Handle the error as needed
    }
  }, []);

  const addNewTask = (newTask) => {
    newTask = { id: Date(), name: newTask, completed: false };
    console.log(localStorage);
    try {
      setTaskList((prevTaskList) => {
        const updatedTasks = [...prevTaskList, newTask];
        // Save to localStorage
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        return updatedTasks;
      });
    } catch (error) {
      console.error('Error saving task to localStorage:', error);
      // Handle the error as needed
    }
  }; 
  const editTaskInLocalStorage = (id, newTaskName) => {
    console.log('editTaskInLocalStorage', id, newTaskName);
    // Step 1: Retrieve the existing tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks'));
  
    // Step 2: Find the task you want to edit in the retrieved tasks
    const taskIndex = tasks.findIndex((task) => task.id === id);
  
    // Step 3: Update the task
    if (taskIndex !== -1) {
      tasks[taskIndex].name = newTaskName;
    }
  
    // Step 4: Save the updated tasks back to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setTaskList(tasks);
  };
  

  const deleteTask = (taskId) => {
    console.log('deleteTask', taskId);
    // Retrieve the existing tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Filter out the task you want to delete
    const updatedTasks = tasks.filter(task => task.id !== taskId);
  
    // Save the updated tasks back to localStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  
    // Update the state
    setTaskList(updatedTasks);
  }

  return (
    <div className="App">
      <div className="appHeader">To Do List</div>
      <div className="container">
        <FilterBar filterText = {filterText}
                   setFilterText = {setFilterText}
                   inCompletedOnly = {inCompletedOnly}
                   setInCompletedOnly = {setInCompletedOnly}
                   active = {active}
                   setActive = {setActive}/>
        <TaskList taskList = {taskList} 
                  filterText = {filterText}
                  inCompletedOnly = {inCompletedOnly}
                  toggleTaskCompleted = {toggleTaskCompleted}
                  editTaskInLocalStorage = {editTaskInLocalStorage}
                  deleteTask = {deleteTask} />
        <AddTask addNewTask = {addNewTask}
                 setInCompletedOnly = {setInCompletedOnly}
                 active = {active}
                 setActive = {setActive} />
        <div className="footer" style={{fontSize: '15px'}}>
          <span>Total tasks: {taskList.length} | </span>
          <span>Completed tasks: {taskList.filter(task => task.completed).length} </span>
          <span> | Remaining tasks: {taskList.filter(task => !task.completed).length}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
