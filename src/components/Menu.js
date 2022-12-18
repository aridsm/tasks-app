import React from "react";
import { NavLink } from "react-router-dom";
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
  "text-rose-600 hover:border-l-4 border-current hover:pl-2";

const Menu = () => {
  return (
    <header className="p-5 bg-slate-100 flex flex-col">
      <h1 className="font-bold uppercase text-center mt-4 text-lg tracking-wide">
        To-do list
      </h1>
      <BtnAddTask className="my-8" />
      <nav>
        <ul className="grid gap-4">
          {links.map((link) => (
            <li>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? classLinkActive : "")}
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
