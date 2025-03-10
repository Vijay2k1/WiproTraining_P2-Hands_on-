import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    description: "",
    date: "",
    createdBy: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.id || !task.name || !task.date || !task.createdBy) {
      alert("All fields are required, including Task ID!");
      return;
    }

    dispatch(addTask(task));
    navigate("/"); // Redirect to home after adding task
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Task ID:</label>
        <input type="text" name="id" value={task.id} onChange={handleChange} required />

        <label>Task Name:</label>
        <input type="text" name="name" value={task.name} onChange={handleChange} required />

        <label>Description:</label>
        <input type="text" name="description" value={task.description} onChange={handleChange} />

        <label>Date:</label>
        <input type="date" name="date" value={task.date} onChange={handleChange} required />

        <label>Created By:</label>
        <input type="text" name="createdBy" value={task.createdBy} onChange={handleChange} required />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
