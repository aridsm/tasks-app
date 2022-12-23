import React, { useState } from "react";
import { Task } from "../../../interfaces";
import { ReactComponent as OptionsSvg } from "../../../assets/options.svg";
import { ReactComponent as Calendar } from "../../../assets/date.svg";
import { useAppDispatch } from "../../../store/hooks";
import { tasksActions } from "../../../store/Tasks.store";
import ModalCreateTask from "../../Utilities/ModalCreateTask";

const InfosTask: React.FC<{ task: Task; isListInView1: boolean }> = ({
  task,
  isListInView1,
}) => {
  const [modalEditTaskOpen, setModalEditTaskOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

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

  const closeModalEditTask = () => {
    setModalEditTaskOpen(false);
  };

  const openModalEditTask = () => {
    setModalEditTaskOpen(true);
  };

  const editTaskHandler = (task: Task) => {
    dispatch(tasksActions.editTask(task));
  };

  return (
    <div className="flex flex-col flex-1">
      <div
        className={`flex items-center justify-between ${
          isListInView1 ? "mb-1" : "mb-2"
        }`}
      >
        <span className="block font-medium dark:text-slate-200">
          {task.title}
        </span>
        <button
          className="rounded-full hover:bg-slate-200 w-8 h-8 grid place-items-center dark:hover:bg-slate-800"
          onClick={openModalEditTask}
        >
          <OptionsSvg className="w-5 h-5" />
        </button>
        {modalEditTaskOpen && (
          <ModalCreateTask
            onClose={closeModalEditTask}
            task={task}
            nameForm="Edit task"
            onConfirm={editTaskHandler}
          />
        )}
      </div>
      <p className="description text-slate-400 dark:text-slate-500">
        {task.description}
      </p>
      <time className="mt-auto flex w-full">
        <Calendar className="mr-2 w-5" /> {dateFormated}
      </time>
    </div>
  );
};

export default InfosTask;
