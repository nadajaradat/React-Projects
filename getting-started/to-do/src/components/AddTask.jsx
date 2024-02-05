import React, { useState } from 'react';

function AddTask({ ...props}) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    props.setInCompletedOnly(false)
    props.setActive('active')
    e.preventDefault();
    let newTaskText = task.trim();
    if (!newTaskText) return;
    try {
      props.addNewTask(newTaskText);
      setTask("");
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };
  

  return (
    <form className="addTaskContainer" onSubmit={handleSubmit}>
      <input
        type="text"
        className="addTask"
        placeholder="What is the task today?"
        value={task}
        id='taskInput'
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        Add
      </button>
    </form>
  );
}

export default AddTask;

