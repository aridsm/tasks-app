import React from "react";
import { Task } from "../../../interfaces";
import { useAppDispatch } from "../../../store/hooks";
import { tasksActions } from "../../../store/Tasks.store";
import Tooltip from "../../Utilities/Tooltip";
import { ReactComponent as StarLine } from "../../../assets/star-line.svg";

const BtnMarkAsImportant: React.FC<{ task: Task }> = ({ task }) => {
  const dispatch = useAppDispatch();

  const markAsImportantHandler = (id: string) => {
    dispatch(tasksActions.markAsImportant(id));
  };

  return (
    <Tooltip
      txt={task.important ? "unmark as important" : "mark as important"}
      className=" ml-auto"
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
  );
};

export default BtnMarkAsImportant;
