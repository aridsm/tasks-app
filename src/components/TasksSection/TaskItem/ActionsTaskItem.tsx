import React, { useState } from "react";
import { ReactComponent as StarLine } from "../../../assets/star-line.svg";
import { ReactComponent as Trash } from "../../../assets/trash.svg";
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
        className={`flex border-dashed border-slate-200 dark:border-slate-800 ${
          isListInView1 ? "items-center" : "border-t-2 w-full pt-4 mt-4"
        }`}
      >
        <button
          className={`${
            task.completed
              ? "bg-emerald-200 text-emerald-700 "
              : "bg-yellow-100 text-yellow-700 "
          } py-1 px-3 rounded-full font-medium  mr-4`}
          onClick={() => toggleTaskCompleted(task.id)}
        >
          {task.completed ? "completed" : "not completed"}
        </button>
        <Tooltip
          txt={task.important ? "unmark as important" : "mark as important"}
          className="mr-2 ml-auto"
        >
          <button
            onClick={() => markAsImportantHandler(task.id)}
            className="transition hover:text-slate-700 dark:hover:text-slate-200"
          >
            <StarLine
              className={`w-6 h-6 ${
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
            <Trash />
          </button>
        </Tooltip>
      </div>
    </>
  );
};

export default ActionsTaskItem;
