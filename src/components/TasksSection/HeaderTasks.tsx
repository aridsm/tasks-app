import React from "react";
import BtnAddTask from "../Utilities/BtnAddTask";
import { ReactComponent as IconBell } from "../../assets/bell.svg";
import Tooltip from "../Utilities/Tooltip";
import SearchField from "./SearchField";

const classHasNotification =
  "after:content-[''] after:w-2 after:h-2 after:bg-rose-500 block after:rounded-full after:absolute after:bottom-3/4  after:left-3/4";

const HeaderTasks: React.FC = () => {
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

  const todayDate: string = `${year}, ${monthName[month].slice(0, 3)} ${day
    .toString()
    .padStart(2, "0")}`;

  const dateTimeFormat = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}}`;

  return (
    <header className="flex items-center">
      <SearchField />
      <time dateTime={dateTimeFormat} className="flex-1 text-center">
        {todayDate}
      </time>
      <div className="flex flex-1">
        <Tooltip txt="see notifications" className="mr-6 ml-auto">
          <button
            className={`relative ${classHasNotification}`}
            title="notifications"
          >
            <IconBell className="fill-violet-600 w-6 h-6 dark:fill-violet-700" />
          </button>
        </Tooltip>

        <BtnAddTask />
      </div>
    </header>
  );
};

export default HeaderTasks;
