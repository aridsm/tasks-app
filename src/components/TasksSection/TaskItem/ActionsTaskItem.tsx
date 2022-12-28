import React, { useState } from "react";
import { ReactComponent as StarLine } from "../../../assets/star-line.svg";
import { ReactComponent as Trash } from "../../../assets/trash.svg";
import { ReactComponent as SvgX } from "../../../assets/x.svg";
import { ReactComponent as Check } from "../../../assets/check.svg";
import { Task } from "../../../interfaces";
import { useAppDispatch } from "../../../store/hooks";
import { tasksActions } from "../../../store/Tasks.store";
import ModalConfirm from "../../Utilities/ModalConfirm";
import Tooltip from "../../Utilities/Tooltip";

const ActionsTaskItem: React.FC<{ task: Task; isListInView1: boolean }> = ({
  task,
  isListInView1,
}) => {
  const [showModal, setIsModalShown] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const markAsImportantHandler = (id: string) => {
    dispatch(tasksActions.markAsImportant(id));
  };

  const removeTaskHandler = () => {
    dispatch(tasksActions.removeTask(task.id));
  };

  const toggleTaskCompleted = (id: string) => {
    dispatch(tasksActions.toggleTaskCompleted(id));
  };

  return (
    <>
      {showModal && (
        <ModalConfirm
          onClose={() => setIsModalShown(false)}
          text="This task will be deleted permanently."
          onConfirm={removeTaskHandler}
        />
      )}
      <div
        className={`flex border-dashed border-slate-200 dark:border-slate-700/[.3] ${
          isListInView1 ? "items-center" : "border-t-2 w-full pt-4 mt-4"
        }`}
      >
        <Tooltip
          txt={task.completed ? "mark as uncompleted" : "mark as completed"}
          className="mr-4"
        >
          <button
            className={`${
              task.completed
                ? "bg-emerald-200 text-emerald-800 "
                : "bg-yellow-100 text-yellow-700 "
            } rounded-full font-medium`}
            onClick={() => toggleTaskCompleted(task.id)}
          >
            <span className="block py-1 px-3 absolute invisible sm:static sm:visible">
              {task.completed ? "completed" : "uncompleted"}
            </span>
            <span className="p-1 block sm:hidden">
              {task.completed ? (
                <Check className="w-3 h-3" />
              ) : (
                <SvgX className="w-3 h-3" />
              )}
            </span>
          </button>
        </Tooltip>
        <Tooltip
          txt={task.important ? "unmark as important" : "mark as important"}
          className="mr-2 ml-auto"
        >
          <button
            onClick={() => markAsImportantHandler(task.id)}
            className="transition hover:text-slate-700 dark:hover:text-slate-200"
          >
            <StarLine
              className={`w-5 h-5 sm:w-6 sm:h-6 ${
                task.important ? "fill-rose-500 stroke-rose-500 " : "fill-none"
              }`}
            />
          </button>
        </Tooltip>
        <Tooltip
          txt="delete task"
          className="transition hover:text-slate-700 dark:hover:text-slate-200"
        >
          <button onClick={() => setIsModalShown(true)}>
            <Trash className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </Tooltip>
      </div>
    </>
  );
};

export default ActionsTaskItem;
