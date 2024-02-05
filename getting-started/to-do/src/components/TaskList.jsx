import React from 'react';
import Task from './Task';

function TaskList(props) {
  const { taskList, filterText, inCompletedOnly, toggleTaskCompleted, editTaskInLocalStorage, deleteTask } = props;

  const filteredTasks = taskList.filter((task) => {
    // Check if task.name exists and is a string before calling toLowerCase
    return (
      task.name &&
      typeof task.name === 'string' &&
      task.name.toLowerCase().includes(filterText.toLowerCase())
    );
  });

  const displayedTasks = inCompletedOnly
    ? filteredTasks.filter((task) => task.completed)
    : filteredTasks.filter((task) => !task.completed);

  return (
    <div className="taskList">
      {displayedTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTaskCompleted={toggleTaskCompleted}
          editTaskInLocalStorage={editTaskInLocalStorage} 
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
