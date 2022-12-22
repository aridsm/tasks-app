import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { tasksActions } from "../store/Tasks.store";
import BtnAddTask from "./Utilities/BtnAddTask";

const links = [
  {
    name: "Today's tasks",
    path: "/today",
  },
  {
    name: "All tasks",
    path: "/",
  },
  {
    name: "Important tasks",
    path: "/important",
  },
  {
    name: "Tasks done",
    path: "/done",
  },
  {
    name: "Upcoming tasks",
    path: "/upcoming",
  },
];

const classLinkActive =
  "text-rose-600 bg-violet-100 border-r-4 border-rose-400 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-200";

const Menu: React.FC = () => {
  const route = useLocation();
  const currentPath = route.pathname;
  const dispatch = useAppDispatch();

  const deleteAllTasksHandler = () => {
    dispatch(tasksActions.deleteAllTasks());
  };
  return (
    <header className="bg-slate-100 flex flex-col h-screen w-2/12 fixed left-0 dark:bg-slate-800/[.5]">
      <h1 className="font-bold uppercase text-center mt-8 text-lg tracking-wide">
        To-do list
      </h1>
      <BtnAddTask className="my-8 mx-4" />
      <nav>
        <ul className="grid gap-2">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={`px-4 py-2 w-full block transition hover:text-rose-600 dark:hover:text-slate-200 ${
                  currentPath === link.path ? classLinkActive : ""
                }`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="mx-4 mt-auto mb-8 text-left"
        onClick={deleteAllTasksHandler}
      >
        Delete all tasks
      </button>
    </header>
  );
};

export default Menu;
