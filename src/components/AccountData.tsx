import React, { useState } from "react";
import avatar1 from "../assets/avatar-1.jpg";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { tasksActions } from "../store/Tasks.store";
import useCompletedTasks from "./hooks/useCompletedTasks";
import useTodayTasks from "./hooks/useTodayTasks";
import ModalConfirm from "./Utilities/ModalConfirm";

const AccountData: React.FC = () => {
  const todaysTasks = useTodayTasks();
  const tasks = useAppSelector((state) => state.tasks.tasks);

  const todayTasksDone = useCompletedTasks({ tasks: todaysTasks, done: true });
  const allTasksDone = useCompletedTasks({ tasks: tasks, done: true });

  const toggleDarkMode = () => {
    const html = document.querySelector<HTMLHtmlElement>("html")!;
    html.classList.toggle("dark");
  };

  const percentageTodayTasks =
    (todayTasksDone.length * 100) / todaysTasks.length;

  const percentageAllTasks = (allTasksDone.length * 100) / tasks.length;

  const todaysTasksToShow = todaysTasks.slice(0, 3);

  const dispatch = useAppDispatch();

  const [showModal, setIsModalShown] = useState<boolean>(false);

  const deleteAllTasksHandler = () => {
    dispatch(tasksActions.deleteAllTasks());
  };

  return (
    <>
      {showModal && (
        <ModalConfirm
          onClose={() => setIsModalShown(false)}
          text="All the tasks will be deleted permanently."
          onConfirm={deleteAllTasksHandler}
        />
      )}
      <section className="p-5 bg-slate-100 flex flex-col w-2/12 fixed top-0 right-0 h-screen dark:bg-slate-800/[.5]">
        <span className="flex items-center mx-auto">
          <span className="font-medium">Hi, Ariane!</span>
          <img src={avatar1} alt="cat" className="w-10 rounded-full ml-4" />
        </span>

        <button
          className="mt-8 text-left flex items-center justify-between"
          onClick={toggleDarkMode}
        >
          <span className="dark:text-slate-200">Darkmode</span>
          <div className="w-10 h-5 bg-slate-200 rounded-full px-0.5 dark:bg-slate-700 relative flex items-center dark:justify-end">
            <div className="w-4 h-4 rounded-full bg-violet-600 absolute"></div>
          </div>
        </button>

        {todaysTasks.length !== 0 && (
          <div className="mt-8">
            <span className="flex justify-between mb-2">
              <span>Tasks today</span> {todayTasksDone.length}/
              {todaysTasks.length}
            </span>
            <div className="barProgress">
              <div style={{ width: percentageTodayTasks + "%" }}></div>
            </div>
          </div>
        )}
        <div className="mt-6">
          <span className="flex justify-between mb-2">
            <span>All tasks </span> {allTasksDone.length}/{tasks.length}
          </span>
          <div className="barProgress">
            <div style={{ width: percentageAllTasks + "%" }}></div>
          </div>
        </div>

        {todaysTasks.length === 0 && (
          <span className="mt-6 block pt-4 border-t-slate-200 dark:border-t-slate-800 border-t-2">
            No tasks today
          </span>
        )}

        {todaysTasks.length > 0 && (
          <div className="mt-8">
            <span className="mb-2 block">Today's tasks</span>
            <ul>
              {todaysTasksToShow.map((task) => (
                <li className="py-2 pl-6 text-slate-200 list-item">
                  <span>{task.title}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          className="mt-auto text-left pt-4"
          onClick={() => setIsModalShown(true)}
        >
          Delete all tasks
        </button>

        <a
          href="/"
          className="mt-4 bg-rose-100 p-2 rounded-md text-rose-600 text-center transition hover:bg-rose-200 dark:bg-slate-800 dark:text-slate-200"
        >
          Projected by Ariane Morelato
        </a>
      </section>
    </>
  );
};

export default AccountData;
