import React from "react";
import BtnAddTask from "../Utilities/BtnAddTask";
import Directories from "./Directories/Directories";
import NavLinks from "./NavLinks";

const classLinkActive =
  "text-rose-600 bg-violet-100 border-r-4 border-rose-400 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-200";

const Menu: React.FC = () => {
  return (
    <>
      <header className="layoutMenuAccount xl:left-0">
        <h1 className="font-bold uppercase text-center mt-8 text-lg tracking-wide">
          To-do list
        </h1>
        <BtnAddTask className="my-8 mx-4" />
        <NavLinks classActive={classLinkActive} />
        <Directories classActive={classLinkActive} />
      </header>
    </>
  );
};

export default Menu;
