import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { tasksActions } from "../../../store/Tasks.store";
import { ReactComponent as Trash } from "../../../assets/trash.svg";
import ModalConfirm from "../../Utilities/ModalConfirm";

const ItemDirectory: React.FC<{ dir: string; classActive: string }> = ({
  dir,
  classActive,
}) => {
  const route = useLocation();
  const currentPath = route.pathname;

  const dispatch = useAppDispatch();

  const [modalIsShown, setModalIsShown] = useState<boolean>(false);

  const deleteDirectoryHandler = () => {
    dispatch(tasksActions.deleteDirectory(dir));
  };

  return (
    <>
      {modalIsShown && (
        <ModalConfirm
          onClose={() => setModalIsShown(false)}
          onConfirm={deleteDirectoryHandler}
          text="This directory and all its tasks will be deleted."
        />
      )}
      <li
        className={`flex justify-between pr-4 itemDirectory ${
          currentPath === "/" + dir ? classActive : ""
        }`}
      >
        <NavLink
          to={`/${dir}`}
          className={`pr-4 pl-9 py-2 block hover:text-rose-600 dark:hover:text-slate-200 `}
        >
          {dir}
        </NavLink>

        <button onClick={() => setModalIsShown(true)}>
          <Trash className="w-5 h-5" />
        </button>
      </li>
    </>
  );
};

export default ItemDirectory;
