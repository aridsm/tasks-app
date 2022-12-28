import React, { useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { tasksActions } from "../../../store/Tasks.store";
import ModalCreateTask from "../../Utilities/ModalTask";
import Tooltip from "../../Utilities/Tooltip";
import { ReactComponent as OptionsSvg } from "../../../assets/options.svg";
import { Task } from "../../../interfaces";

const BtnEditTask: React.FC<{ task: Task }> = ({ task }) => {
  const [modalEditTaskOpen, setModalEditTaskOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

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
    <>
      <Tooltip txt="edit task">
        <button
          className="rounded-full hover:bg-slate-200 w-6 sm:w-8 h-6 sm:h-8 grid place-items-center dark:hover:bg-slate-700/[.3]"
          onClick={openModalEditTask}
        >
          <OptionsSvg className="w-4 sm:w-5 h-4 sm:h-5" />
        </button>
      </Tooltip>
      {modalEditTaskOpen && (
        <ModalCreateTask
          onClose={closeModalEditTask}
          task={task}
          nameForm="Edit task"
          onConfirm={editTaskHandler}
        />
      )}
    </>
  );
};

export default BtnEditTask;
