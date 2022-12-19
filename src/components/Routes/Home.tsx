import React from "react";
import LayoutRoutes from "../Utilities/LayoutRoutes";
import { useAppSelector } from "../../store/hooks";

const Home: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  return <LayoutRoutes title="All tasks" tasks={tasks}></LayoutRoutes>;
};

export default Home;
