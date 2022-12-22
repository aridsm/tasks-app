import React from "react";
import avatar1 from "../assets/avatar-1.jpg";
import useTodayTasks from "./hooks/useTodayTasks";

const AccountData: React.FC = () => {
  const todaysTasks = useTodayTasks();

  const totalTodaysTasks = todaysTasks.length;

  const toggleDarkMode = () => {
    const html = document.querySelector<HTMLHtmlElement>("html")!;
    html.classList.toggle("dark");
  };

  return (
    <section className="p-5 bg-slate-100 flex flex-col w-2/12 fixed top-0 right-0 h-screen dark:bg-slate-800/[.5]">
      <span className="flex items-center mx-auto">
        <span className="font-medium">Hi, Ariane!</span>
        <img src={avatar1} alt="cat" className="w-10 rounded-full ml-4" />
      </span>

      <button
        className="mt-8 text-left flex items-center justify-between"
        onClick={toggleDarkMode}
      >
        <span>Darkmode</span>
        <div className="w-10 h-5 bg-slate-200 rounded-full flex items-center px-0.5 dark:bg-slate-700">
          <div className="w-4 h-4 rounded-full bg-violet-500 "></div>
        </div>
      </button>

      <div>
        <span>Tasks today {totalTodaysTasks}</span>
        <div className="bg-slate-200 w-full h-2 rounded-full overflow-hidden dark:bg-slate-700">
          <div className="bg-violet-500 h-full w-4"></div>
        </div>
      </div>
      <a
        href="/"
        className="mt-auto bg-rose-100 p-2 rounded-md text-rose-600 text-center transition hover:bg-rose-200 dark:bg-rose-300/[.1] dark:text-rose-300"
      >
        Projected by Ariane Morelato
      </a>
    </section>
  );
};

export default AccountData;
