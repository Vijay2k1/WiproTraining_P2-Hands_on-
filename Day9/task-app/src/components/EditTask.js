import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../redux/taskSlice";
import { useParams, useNavigate } from "react-router-dom";

const EditTask = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const task = useSelector((state) =>
    state.tasks.tasks.find((task) => task.id === id)
  );

  const [updatedTask, setUpdatedTask] = useState(task || { id: "", name: "", description: "", date: "", createdBy: "" });

  const handleChange = (e) => {
    setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask(updatedTask));
    navigate("/"); 
  };

  if (!task) {
    return <h2>Task not found!</h2>;
  }

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Task ID:</label>
        <input type="text" name="id" value={updatedTask.id} readOnly />

        <label>Task Name:</label>
        <input type="text" name="name" value={updatedTask.name} onChange={handleChange} required />

        <label>Description:</label>
        <input type="text" name="description" value={updatedTask.description} onChange={handleChange} />

        <label>Date:</label>
        <input type="date" name="date" value={updatedTask.date} onChange={handleChange} required />

        <label>Created By:</label>
        <input type="text" name="createdBy" value={updatedTask.createdBy} onChange={handleChange} required />

        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default EditTask;
