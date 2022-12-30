import React, { useRef } from "react";
import BtnAddTask from "../Utilities/BtnAddTask";
import { ReactComponent as IconBell } from "../../assets/bell.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import avatar1 from "../../assets/avatar-1.jpg";
import SearchField from "./SearchField";
import useVisibility from "../hooks/useVisibility";
import { useAppDispatch } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";

const classHasNotification =
  "after:content-[''] after:w-2 after:h-2 after:bg-rose-500 block after:rounded-full after:absolute after:bottom-3/4  after:left-3/4";

const HeaderTasks: React.FC = () => {
  const dispatch = useAppDispatch();

  const refBtnNotification = useRef<HTMLButtonElement>(null);
  const date: Date = new Date();
  const year: number = date.getFullYear();
  const month: number = date.getMonth();
  const day: number = date.getDate();

  const monthName: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const todayDate = `${year}, ${monthName[month].slice(0, 3)} ${day
    .toString()
    .padStart(2, "0")}`;

  const dateTimeFormat = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}}`;

  const {
    elementIsVisible: notificationIsVisible,
    showElement: showNotifications,
  } = useVisibility([refBtnNotification.current]);

  const openMenuHeaderHandler = () => {
    dispatch(menusActions.openMenuHeader());
  };
  const openMenuAccountHandler = () => {
    dispatch(menusActions.openMenuAccount());
  };

  return (
    <header className="items-center grid grid-cols-3 gap-4 sm:gap-0 sm:flex ">
      <button
        className="mr-6 block xl:hidden"
        onClick={openMenuHeaderHandler}
        title="open menu"
      >
        <MenuIcon />
      </button>
      <SearchField />
      <div className="text-center basis-1/3">
        <span className="text-slate-600 dark:text-slate-200 uppercase font-bold text-sm block xl:hidden">
          To-do list
        </span>
        <time dateTime={dateTimeFormat}>{todayDate}</time>
      </div>
      <div className="flex basis-1/3">
        <div className="sm:mr-4 md:mr-6 ml-auto grid place-items-center relative">
          <button
            ref={refBtnNotification}
            onClick={showNotifications}
            className={`relative ${classHasNotification}`}
            title="see notifications"
          >
            <IconBell className="fill-violet-600 w-5 h-5 md:w-6 md:h-6 dark:fill-violet-800" />
          </button>
          {notificationIsVisible && (
            <ul className="absolute bg-slate-100 dark:bg-slate-800 top-full rounded-md right-0 p-3 w-max border border-slate-300 dark:border-slate-700">
              <li>my notification 1</li>
              <li>my notification 2</li>
            </ul>
          )}
        </div>
        <BtnAddTask className="sm:static fixed bottom-3 right-3 z-10 sm:z-0 min-w-max shadow-lg shadow-slate-400  dark:shadow-slate-900 sm:shadow-transparent" />

        <button onClick={openMenuAccountHandler} className="block xl:hidden">
          <img
            src={avatar1}
            alt="cat"
            className="w-10 h-10 rounded-full ml-4"
          />
        </button>
      </div>
    </header>
  );
};

export default HeaderTasks;
