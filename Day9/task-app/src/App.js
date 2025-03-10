import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom"; 
import NavBar from "./components/Navbar";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

const EditTask = lazy(() => import("./components/EditTask"));

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/edit-task/:id" element={<EditTask />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
