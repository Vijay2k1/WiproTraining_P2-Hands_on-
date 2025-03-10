import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [], // Initial task list
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { id, name, description, date, createdBy } = action.payload;
      if (!state.tasks.find((task) => task.id === id)) {
        state.tasks.push({ id, name, description, date, createdBy });
      } else {
        alert("Task ID already exists! Please use a unique Task ID.");
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, name, description, date, createdBy } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);
      if (existingTask) {
        existingTask.name = name;
        existingTask.description = description;
        existingTask.date = date;
        existingTask.createdBy = createdBy;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
