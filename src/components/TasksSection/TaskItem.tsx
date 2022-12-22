import React from "react";
import { ReactComponent as StarLine } from "../../assets/star-line.svg";
import { ReactComponent as Trash } from "../../assets/trash.svg";
import { ReactComponent as Calendar } from "../../assets/date.svg";
import Tooltip from "../Utilities/Tooltip";
import { tasksActions } from "../../store/Tasks.store";
import { useAppDispatch } from "../../store/hooks";
import { Task } from "../../interfaces";

const TaskItem: React.FC<{ isListInView1: boolean; task: Task }> = ({
  isListInView1,
  task,
}) => {
  const dispatch = useAppDispatch();

  const markAsImportantHandler = (id: string) => {
    dispatch(tasksActions.markAsImportant(id));
  };

  const removeTaskHandler = (id: string) => {
    dispatch(tasksActions.removeTask(id));
  };

  const fullDate: Date = new Date(task.date.replaceAll("-", "/"));
  const month: number = fullDate.getMonth() + 1;
  const day: number = fullDate.getDate();
  const year: number = fullDate.getFullYear();

  const dateFormated: string =
    month.toString().padStart(2, "0") +
    "/" +
    day.toString().padStart(2, "0") +
    "/" +
    year;

  return (
    <li key={task.id}>
      <button className=" bg-rose-200 text-rose-600 px-4 py-1 rounded-t-md ml-auto mr-4 block transition dark:bg-rose-300/[.1] dark:text-rose-300">
        {task.dir}
      </button>
      <article
        className={`bg-slate-100 rounded-lg p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 dark:bg-slate-800/[.5] dark:hover:shadow-transparent ${
          isListInView1 ? "flex-row h-32" : "flex-col h-64"
        }`}
      >
        <div className="flex flex-col flex-1">
          <span
            className={`block font-medium ${isListInView1 ? "mb-2" : "mb-4"}`}
          >
            {task.title}
          </span>
          <p className="description text-slate-400">{task.description}</p>
          <time className="mt-auto flex w-full">
            <Calendar className="mr-2 w-5" /> {dateFormated}
          </time>
        </div>
        <div
          className={`flex border-slate-200 dark:border-slate-700 ${
            isListInView1 ? "items-center" : "border-t-2 w-full pt-4 mt-4"
          }`}
        >
          <span
            className={`${
              task.completed
                ? "bg-green-200 text-green-600 dark:bg-green-300/[.1] dark:text-green-300"
                : "bg-yellow-100 text-yellow-600 dark:bg-yellow-200/[.1] dark:text-yellow-100"
            } py-1 px-3 rounded-full font-medium  mr-4`}
          >
            {task.completed ? "completed" : "not completed"}
          </span>
          <Tooltip
            txt={task.important ? "unmark as important" : "mark as important"}
            className="mr-2 ml-auto"
          >
            <button onClick={() => markAsImportantHandler(task.id)}>
              <StarLine
                className={`w-6 h-6 ${
                  task.important ? "fill-rose-500 stroke-rose-500" : "fill-none"
                }`}
              />
            </button>
          </Tooltip>
          <Tooltip txt="delete task">
            <button onClick={() => removeTaskHandler(task.id)}>
              <Trash />
            </button>
          </Tooltip>
        </div>
      </article>
    </li>
  );
};

export default TaskItem;
