import React from "react";
import { ReactComponent as IconView1 } from "../../assets/view-1.svg";
import { ReactComponent as IconView2 } from "../../assets/view-2.svg";
import { ReactComponent as SortAlfaDown } from "../../assets/sort-alfa-down.svg";
import { ReactComponent as SortNumberDown } from "../../assets/sort-number-down.svg";
import { ReactComponent as StarLine } from "../../assets/star-line.svg";
import { ReactComponent as Trash } from "../../assets/trash.svg";
import { ReactComponent as Calendar } from "../../assets/date.svg";
import Tooltip from "./Tooltip";
import { useDispatch } from "react-redux";
import { tasksActions } from "../../store/Tasks.store";

type Props = {
  title: string;
  tasks: {
    title: string;
    dir: string;
    description: string;
    date: string;
    completed: boolean;
    important: boolean;
    id: string;
  }[];
};

const LayoutRoutes: React.FC<Props> = ({ title, tasks }) => {
  const dispatch = useDispatch();

  const markAsImportantHandler = (id: string) => {
    dispatch(tasksActions.markAsImportant(id));
  };

  const removeTaskHandler = (id: string) => {
    dispatch(tasksActions.removeTask(id));
  };

  return (
    <section>
      <h1 className="font-medium my-8 text-2xl">
        {title} ({tasks.length} tasks)
      </h1>
      <div className="flex children-styles">
        <button>
          <IconView1 />
        </button>
        <button>
          <IconView2 />
        </button>
        <button className="ml-auto">
          <SortAlfaDown />
        </button>
        <button>
          <SortNumberDown />
        </button>
      </div>
      <ul className="grid grid-cols-3 gap-6 items-end tasksList mt-4">
        {tasks.map((task) => (
          <li key={task.id}>
            <button className="bg-rose-200 text-rose-600 px-4 py-1 rounded-t-md ml-auto mr-4 block hover:scale-y-105">
              {task.dir}
            </button>
            <article className="bg-slate-100 h-64 rounded-lg p-4 flex flex-col text-left transition hover:shadow-lg hover:shadow-slate-300">
              <span className="mb-4 block font-medium">{task.title}</span>
              <p className="description text-slate-400">{task.description}</p>
              <time className="mt-auto flex w-full">
                <Calendar className="mr-2 w-5" /> {task.date}
              </time>
              <div className="flex w-full pt-4 mt-4 border-t-2 border-slate-200">
                <span
                  className={`${
                    task.completed
                      ? "bg-green-200 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  } py-1 px-3 rounded-full font-medium`}
                >
                  {task.completed ? "completed" : "not completed"}
                </span>
                <Tooltip
                  txt={
                    task.important ? "unmark as important" : "mark as important"
                  }
                  className="mr-2 ml-auto"
                >
                  <button onClick={() => markAsImportantHandler(task.id)}>
                    <StarLine
                      className={`w-6 h-6 ${
                        task.important
                          ? "fill-rose-600 stroke-rose-600"
                          : "fill-none"
                      }`}
                    />
                  </button>
                </Tooltip>
                <Tooltip txt="delete task">
                  <button onClick={() => removeTaskHandler(task.id)}>
                    <Trash />
                  </button>
                </Tooltip>
              </div>
            </article>
          </li>
        ))}
        <li>
          <button className="border-2 border-slate-300 text-slate-400 w-full h-64 rounded-lg border-dashed transition hover:bg-slate-300">
            Add new task
          </button>
        </li>
      </ul>
    </section>
  );
};

export default LayoutRoutes;
