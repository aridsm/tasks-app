import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import BtnAddTask from "../Utilities/BtnAddTask";
import Directories from "./Directories/Directories";
import NavLinks from "./NavLinks";
import useScreenMedia from "../hooks/useScreenMedia";

const classLinkActive =
  "text-rose-600 bg-violet-100 border-r-4 border-rose-400 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-200";

const Menu: React.FC = () => {
  const menuOpen = useAppSelector((state) => state.menu.menuHeaderOpened);
  const dispatch = useAppDispatch();

  const mediaQueries = useScreenMedia();

  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuHeader());
  };
  return (
    <>
      <header
        className={`layoutMenuAccount left-0 ${
          menuOpen || mediaQueries.xl ? "block" : "hidden"
        }`}
      >
        <h1 className="font-bold uppercase text-center mt-8 text-lg tracking-wide hidden xl:block">
          To-do list
        </h1>
        <BtnAddTask className="my-8 mx-4 min-w-full" />
        <NavLinks classActive={classLinkActive} />
        <Directories classActive={classLinkActive} />
      </header>
      {menuOpen && !mediaQueries.xl && (
        <div
          className="fixed bg-slate-600/[.2] w-full h-full z-10 top-0 left-0"
          onClick={closeMenuHandler}
        ></div>
      )}
    </>
  );
};

export default Menu;
