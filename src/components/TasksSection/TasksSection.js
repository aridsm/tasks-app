import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Routes/Home";
import HeaderTasks from "./HeaderTasks";

const TasksSection = () => {
  return (
    <main className="col-span-5 p-5">
      <HeaderTasks />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default TasksSection;
