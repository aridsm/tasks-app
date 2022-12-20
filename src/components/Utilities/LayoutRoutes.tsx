import React, { useState } from "react";
import { Task } from "../../interfaces";
import { useAppDispatch } from "../../store/hooks";
import { modalActions } from "../../store/Modal.store";
import ButtonsSort from "../TasksSection/ButtonsSort";
import TaskItem from "../TasksSection/TaskItem";

type Props = {
  title: string;
  tasks: Task[];
};

const LayoutRoutes: React.FC<Props> = ({ title, tasks }) => {
  const [isListInView1, setIsListInView1] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const openModalHandler = () => {
    dispatch(modalActions.openModalHandler());
  };

  return (
    <section>
      <h1 className="font-medium my-8 text-2xl">
        {title} ({tasks.length} tasks)
      </h1>
      <ButtonsSort
        isListInView1={isListInView1}
        setIsListInView1={setIsListInView1}
      />
      <ul
        className={`tasksList mt-4 grid gap-6 ${
          isListInView1 ? "grid-cols-1" : "grid-cols-3 items-end"
        }`}
      >
        {tasks.map((task) => (
          <TaskItem key={task.id} isListInView1={isListInView1} task={task} />
        ))}
        <li>
          <button
            onClick={openModalHandler}
            className={`border-2 border-slate-300 text-slate-400 w-full rounded-lg border-dashed transition hover:bg-slate-300 ${
              isListInView1 ? "h-32" : "h-64"
            }`}
          >
            Add new task
          </button>
        </li>
      </ul>
    </section>
  );
};

export default LayoutRoutes;
