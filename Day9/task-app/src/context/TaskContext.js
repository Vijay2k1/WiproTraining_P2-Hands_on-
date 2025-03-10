import React, { createContext, useReducer } from "react";
import { taskReducer } from "./TaskReducer";

const initialState = { tasks: [] };

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
