import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Search } from "../../assets/search.svg";
import { Task } from "../../interfaces";
import { useAppSelector } from "../../store/hooks";
import useVisibility from "../hooks/useVisibility";

const SearchField: React.FC = () => {
  const tasks: Task[] = useAppSelector((state) => state.tasks.tasks);

  const searchResultsRef = useRef<HTMLInputElement>(null);
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [matchedTasks, setMatchedTasks] = useState<Task[]>([]);

  const {
    elementIsVisible: listResultsVisible,
    showElement: showListResults,
    closeElement: closeListResults,
  } = useVisibility([searchResultsRef.current!], () => setSearchInputValue(""));

  useEffect(() => {
    const filteredTasks = tasks.filter((task: Task) => {
      return task.title.toLowerCase().includes(searchInputValue);
    });
    if (searchInputValue.trim().length) {
      setMatchedTasks(filteredTasks);
    } else {
      setMatchedTasks([]);
    }
  }, [searchInputValue, tasks]);

  useEffect(() => {
    if (searchInputValue.trim().length > 0) {
      showListResults();
    } else {
      closeListResults();
    }
  }, [closeListResults, searchInputValue, showListResults]);

  return (
    <form className="flex-1 relative">
      <label htmlFor="search" className="sr-only"></label>
      <input
        type="search"
        id="search"
        placeholder="Search task"
        ref={searchResultsRef}
        value={searchInputValue}
        onChange={({ target }) => setSearchInputValue(target.value)}
        className="inputStyles w-full"
      />
      <Search className="absolute w-5 right-4 top-3.5 text-slate-400" />
      {listResultsVisible && (
        <div className="absolute bg-slate-100 rounded-md w-full top-14 p-3 dark:bg-slate-800">
          {matchedTasks.length ? (
            <ul className=" divide-y-2 divide-slate-200 dark:divide-slate-700">
              {matchedTasks.map((task) => (
                <li key={task.id} className="py-2">
                  <Link
                    to="/"
                    className="flex justify-between transition hover:text-rose-500 dark:hover:text-slate-200"
                  >
                    <span>{task.title}</span>
                    <span className="text-slate-400">{task.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <span>No tasks found</span>
          )}
        </div>
      )}
    </form>
  );
};

export default SearchField;
