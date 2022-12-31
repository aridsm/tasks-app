import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { tasksActions } from "../../store/Tasks.store";
import ModalConfirm from "../Utilities/ModalConfirm";

const DeleteTasks: React.FC = () => {
  const dispatch = useAppDispatch();

  const [showModal, setIsModalShown] = useState<boolean>(false);

  const deleteAllDataHandler = () => {
    dispatch(tasksActions.deleteAllData());
  };

  return (
    <>
      {showModal && (
        <ModalConfirm
          onClose={() => setIsModalShown(false)}
          text="All data will be deleted permanently."
          onConfirm={deleteAllDataHandler}
        />
      )}
      <button
        className="mt-auto text-left pt-4 hover:text-rose-600 dark:hover:text-slate-200 transition "
        onClick={() => setIsModalShown(true)}
      >
        Delete all data
      </button>
    </>
  );
};

export default React.memo(DeleteTasks);
