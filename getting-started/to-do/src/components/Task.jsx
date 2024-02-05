import React from 'react'
import { useState } from 'react';
import AddTask from './AddTask';

function Task({...props}) {
  const [editTask, setEditTask] = useState(false);
  const [task, setTask] = useState(props.task.name);

  const handleEditTask = (e) => {
    let newTaskText = task.trim();
    if (!newTaskText) return;
    try {
      props.editTaskInLocalStorage(props.task.id, newTaskText);
      setEditTask(!editTask);
    } catch (error) {
      console.error('Error saving task:', error);
      // Handle the error as needed
    }
  };
  if(!editTask){
    return (
    
      <div className="task">
              <div className="taskText">
                <input type="checkbox" 
                      className="checkbox" 
                      checked={props.task.completed}
                      onChange ={
                          (e) => {
                            props.toggleTaskCompleted(props.task.id)
                          }
                        
                      } />
                {task}
              </div>
              <div className="taskBtns">
                <button className="btn btn-sm btn-primary"
                        onClick={(e)=>{
                          handleEditTask(props.task.id);
                        }}>edit</button>
                <button className="btn btn-sm btn-danger"
                        onClick={(e) => props.deleteTask(props.task.id)
                        }>delete</button>
              </div>
      </div>

    )
  }
  else {
    return(
      <div className="addTaskContainer">
      <input
        type="text"
        className="addTask"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleEditTask}>
        Edit
      </button>
    </div>
    )
  }
}

export default Task