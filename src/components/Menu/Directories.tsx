import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { tasksActions } from "../../store/Tasks.store";
import useVisibility from "../hooks/useVisibility";

const Directories: React.FC<{ classActive: string }> = ({ classActive }) => {
  const route = useLocation();
  const currentPath = route.pathname;

  const dispatch = useAppDispatch();

  const [isDirectoriesOpen, setIsDirectoriesOpen] = useState<boolean>(true);
  const directories = useAppSelector((store) => store.tasks.directories);

  const buttonNewTaskRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleDirectoriesOpen = () => {
    setIsDirectoriesOpen((prevState) => !prevState);
  };

  const creatingANewDirectoryHandler = () => {
    showInputDir();
  };

  const createNewDirectoryHandler = () => {
    const newDirectoryName: string = inputRef.current!.value.trim();

    if (newDirectoryName.length === 0) return;

    const directoryDoesNotExist = directories.every(
      (dir: string) => dir !== newDirectoryName
    );

    if (directoryDoesNotExist) {
      dispatch(tasksActions.createDirectory(newDirectoryName));
    }

    inputRef.current!.value = "";
  };

  const { elementIsVisible: inputDirIsVisible, showElement: showInputDir } =
    useVisibility(
      [inputRef.current!, buttonNewTaskRef.current!],
      createNewDirectoryHandler
    );

  useEffect(() => {
    if (inputDirIsVisible) {
      inputRef.current!.focus();
    }
  }, [inputDirIsVisible]);

  return (
    <div className="py-4">
      <button
        className={`flex items-center w-full mx-4 mb-2 ${
          isDirectoriesOpen ? "dark:text-slate-200" : ""
        }`}
        onClick={toggleDirectoriesOpen}
      >
        <Arrow
          className={`w-3 h-3 mr-2 rotate-90 transition ${
            isDirectoriesOpen ? "rotate-180" : ""
          }`}
        />
        Directories
      </button>
      <div className='isDirectoriesOpen ? "visible" : "hidden"'>
        <div className="ml-9 my-2 mr-4">
          <label htmlFor="dir-name" className="sr-only">
            Enter a directory name
          </label>
          <input
            type="text"
            className={` inputStyles w-full ${
              inputDirIsVisible ? "visible" : "hidden"
            }`}
            id="dir-name"
            autoFocus
            ref={inputRef}
          />
        </div>

        <ul className="max-h-36 overflow-auto">
          {directories.map((dir: string) => (
            <li key={dir}>
              <NavLink
                to={`/${dir}`}
                className={`pr-4 pl-9 py-2 block hover:text-rose-600 dark:hover:text-slate-200 ${
                  currentPath === "/" + dir ? classActive : ""
                }`}
              >
                {dir}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className="px-3 py-1 border-slate-300 dark:border-slate-700 border-2 ml-9 mt-2 rounded-md border-dashed hover:text-violet-500"
          onClick={creatingANewDirectoryHandler}
          ref={buttonNewTaskRef}
        >
          + New
        </button>
      </div>
    </div>
  );
};

export default Directories;
