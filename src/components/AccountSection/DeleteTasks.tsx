import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { tasksActions } from "../../store/Tasks.store";
import ModalConfirm from "../Utilities/ModalConfirm";

const DeleteTasks: React.FC = () => {
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
      <button
        className="mt-auto text-left pt-4 hover:text-rose-600 dark:hover:text-slate-200 transition "
        onClick={() => setIsModalShown(true)}
      >
        Delete all tasks
      </button>
    </>
  );
};

export default React.memo(DeleteTasks);
