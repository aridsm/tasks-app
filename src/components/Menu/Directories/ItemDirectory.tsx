import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { tasksActions } from "../../../store/Tasks.store";
import { ReactComponent as Trash } from "../../../assets/trash.svg";
import { ReactComponent as Edit } from "../../../assets/edit.svg";
import ModalConfirm from "../../Utilities/ModalConfirm";
import useVisibility from "../../hooks/useVisibility";

const ItemDirectory: React.FC<{ dir: string; classActive: string }> = ({
  dir,
  classActive,
}) => {
  const route = useLocation();
  const currentPath = route.pathname;

  const dispatch = useAppDispatch();

  const refInputEditDir = useRef<HTMLInputElement>(null);
  const refButtonEditDir = useRef<HTMLButtonElement>(null);
  const [modalIsShown, setModalIsShown] = useState<boolean>(false);
  const [newDirName, setNewDirName] = useState<string>(dir);

  const deleteDirectoryHandler = () => {
    dispatch(tasksActions.deleteDirectory(dir));
  };

  const editingDirNameHandler = () => {
    showInputDir();
  };

  const confirmEditDirNameHandler = () => {
    dispatch(
      tasksActions.editDirectoryName({
        previousDirName: dir,
        newDirName: newDirName,
      })
    );
  };

  const { elementIsVisible: inputDirIsVisible, showElement: showInputDir } =
    useVisibility(
      [refInputEditDir.current!, refButtonEditDir.current!],
      confirmEditDirNameHandler
    );

  useEffect(() => {
    if (inputDirIsVisible) {
      refInputEditDir.current!.focus();
      setNewDirName(dir);
    }
  }, [dir, inputDirIsVisible]);

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
        className={`flex items-center pr-4 pl-9 py-2 itemDirectory ${
          currentPath === "/" + dir ? classActive : ""
        }`}
      >
        <input
          type="text"
          value={newDirName}
          onChange={({ target }) => setNewDirName(target.value)}
          className={`inputStyles w-28 ${
            inputDirIsVisible ? "visible" : "hidden"
          }`}
          ref={refInputEditDir}
        />
        {!inputDirIsVisible && (
          <NavLink
            to={`/dir/${dir}`}
            title={dir}
            className="hover:text-rose-600 dark:hover:text-slate-200 transition text-ellipsis whitespace-nowrap overflow-hidden max-w-[7rem]"
          >
            {dir}
          </NavLink>
        )}

        {dir !== "Main" && (
          <div className="ml-auto buttonsDir">
            <button onClick={editingDirNameHandler} ref={refButtonEditDir}>
              <Edit className="w-5 h-5 mr-2" />
            </button>
            <button onClick={() => setModalIsShown(true)}>
              <Trash className="w-5 h-5" />
            </button>
          </div>
        )}
      </li>
    </>
  );
};

export default ItemDirectory;
