import React from "react";
import useTodayTasks from "../hooks/useTodayTasks";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const TodaysTasks: React.FC = () => {
  const todaysTasks = useTodayTasks();

  return (
    <LayoutRoutes title="Today's tasks" tasks={todaysTasks}></LayoutRoutes>
  );
};

export default TodaysTasks;
