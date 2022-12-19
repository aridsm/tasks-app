import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Routes/Home";
import HeaderTasks from "./HeaderTasks";

const TasksSection: React.FC = () => {
  return (
    <main className="col-span-7 pt-5 pb-16 px-8">
      <HeaderTasks />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default TasksSection;
