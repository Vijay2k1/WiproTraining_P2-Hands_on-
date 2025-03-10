import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";
import { Link } from "react-router-dom";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <h2>Task List</h2>
      <Link to="/add-task">
        <button>Add New Task</button>
      </Link>
      <table border="1">
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Task Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.date}</td>
              <td>{task.createdBy}</td>
              <td>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
                <Link to={`/edit-task/${task.id}`}>
                  <button>Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
