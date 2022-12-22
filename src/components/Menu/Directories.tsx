import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { useAppSelector } from "../../store/hooks";

const Directories: React.FC<{ classActive: string }> = ({ classActive }) => {
  const route = useLocation();
  const currentPath = route.pathname;

  const [isDirectoriesOpen, setIsDirectoriesOpen] = useState<boolean>(true);
  const [creatingADir, setCreatingADir] = useState<boolean>(false);
  const directories = useAppSelector((store) => store.tasks.directories);

  const toggleDirectoriesOpen = () => {
    setIsDirectoriesOpen((prevState) => !prevState);
  };

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
      {isDirectoriesOpen && (
        <div>
          {creatingADir && (
            <div className="ml-9 mr-4 my-2">
              <label htmlFor="dir-name" className="sr-only">
                Enter a directory name
              </label>
              <input
                type="text"
                className="inputStyles w-full"
                id="dir-name"
                autoFocus
              />
            </div>
          )}

          <ul>
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
            onClick={() => setCreatingADir(true)}
          >
            + New
          </button>
        </div>
      )}
    </div>
  );
};

export default Directories;
