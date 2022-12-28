import React, { useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { tasksActions } from "../../../store/Tasks.store";
import ModalConfirm from "../../Utilities/ModalConfirm";
import Tooltip from "../../Utilities/Tooltip";
import { ReactComponent as Trash } from "../../../assets/trash.svg";

const BtnDeleteTask: React.FC<{ taskId: string }> = ({ taskId }) => {
  const [showModal, setIsModalShown] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const removeTaskHandler = () => {
    dispatch(tasksActions.removeTask(taskId));
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
      <Tooltip
        txt="delete task"
        className="ml-2 transition hover:text-slate-700 dark:hover:text-slate-200"
      >
        <button onClick={() => setIsModalShown(true)}>
          <Trash className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </Tooltip>
    </>
  );
};

export default BtnDeleteTask;
