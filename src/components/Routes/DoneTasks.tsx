import React from "react";
import { useAppSelector } from "../../store/hooks";
import useCompletedTasks from "../hooks/useCompletedTasks";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const DoneTasks: React.FC<{ done: boolean; title: string }> = ({
  done,
  title,
}) => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  const tasksDone = useCompletedTasks({ tasks, done });

  return <LayoutRoutes title={title} tasks={tasksDone}></LayoutRoutes>;
};

export default DoneTasks;
