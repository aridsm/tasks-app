import React from "react";
import { NavLink, useLocation } from "react-router-dom";
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
  "text-rose-600 bg-violet-100 border-r-4 border-rose-400";

const Menu: React.FC = () => {
  const route = useLocation();
  const currentPath = route.pathname;

  return (
    <header className="bg-slate-100 flex flex-col h-screen w-2/12 fixed left-0">
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
                className={`px-4 py-2 w-full block transition hover:text-rose-600 ${
                  currentPath === link.path ? classLinkActive : ""
                }`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button className="mt-auto text-left">Darkmode</button>
      <button className="mt-4 text-left">Delete all tasks</button>
    </header>
  );
};

export default Menu;
