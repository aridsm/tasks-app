import React from "react";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const tasksList = [
  {
    title: "Wash the dishes",
    dir: "Home",
    description: "This is the description for this task.",
    date: "2022-14-08",
    status: "undone",
    important: false,
    id: "dY7aN",
  },
  {
    title: "Do homework",
    dir: "School",
    description: "This is the description for this task.",
    date: "2022-15-08",
    status: "done",
    important: false,
    id: "hYsk8",
  },
  {
    title: "Wash the dishes",
    dir: "School",
    description: "This is the description for this task.",
    date: "2022-15-08",
    status: "done",
    important: false,
    id: "hd5aS",
  },
];

const Home = () => {
  return <LayoutRoutes title="All tasks" tasks={tasksList}></LayoutRoutes>;
};

export default Home;
