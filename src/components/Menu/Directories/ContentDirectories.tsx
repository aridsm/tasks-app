import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { tasksActions } from "../../../store/Tasks.store";
import useVisibility from "../../hooks/useVisibility";
import ItemDirectory from "./ItemDirectory";

const ContentDirectories: React.FC<{ classActive: string }> = ({
  classActive,
}) => {
  const directories = useAppSelector((store) => store.tasks.directories);
  const [errorDirectoryName, setErrorDirectoryName] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const creatingANewDirectoryHandler = () => {
    showInputDir();
  };

  const checkDirNameExists = (val: string) => {
    const directoryDoesNotExist = directories.every(
      (dir: string) => dir !== val
    );

    if (directoryDoesNotExist) {
      setErrorDirectoryName(false);
    } else {
      setErrorDirectoryName(true);
    }
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

    setErrorDirectoryName(false);
    inputRef.current!.value = "";
  };

  const buttonNewTaskRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
    <>
      <div className="ml-9 my-2 mr-4 relative">
        <label htmlFor="dir-name" className="sr-only">
          Enter a directory name
        </label>
        <input
          type="text"
          className={` inputStyles w-full ${
            inputDirIsVisible ? "visible" : "hidden"
          }`}
          id="dir-name"
          ref={inputRef}
          onInput={({ currentTarget }) =>
            checkDirNameExists(currentTarget.value)
          }
        />
        {errorDirectoryName && (
          <div className="absolute bg-rose-500 text-slate-200 rounded-md p-2 top-full text-sm w-full font-medium">
            Directory name already exists
          </div>
        )}
      </div>
      <ul className="max-h-36 overflow-auto">
        {directories.map((dir: string) => (
          <ItemDirectory key={dir} classActive={classActive} dir={dir} />
        ))}
      </ul>
      <button
        className="px-3 py-1 border-slate-300 dark:border-slate-700 border-2 ml-9 mt-2 rounded-md border-dashed hover:text-violet-500"
        onClick={creatingANewDirectoryHandler}
        ref={buttonNewTaskRef}
      >
        + New
      </button>
    </>
  );
};

export default ContentDirectories;
