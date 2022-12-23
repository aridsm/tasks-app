import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Task } from "../../interfaces";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { modalActions } from "../../store/Modal.store";
import { tasksActions } from "../../store/Tasks.store";

const ModalContent: React.FC = () => {
  const dispatch = useAppDispatch();
  const directories = useAppSelector((state) => state.tasks.directories);

  const today: Date = new Date();
  let day: number = today.getDate();
  let month: number = today.getMonth() + 1;
  const year: number = today.getFullYear();
  if (day < 10) {
    day = +("0" + day);
  }
  if (month < 10) {
    month = +("0" + month);
  }

  const todayDate: string = year + "-" + month + "-" + day;
  const maxDate: string = year + 1 + "-" + month + "-" + day;

  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionTextRef = useRef<HTMLTextAreaElement>(null);
  const [date, setDate] = useState<string>(todayDate);
  const isTitleValid = useRef<Boolean>(false);
  const isDateValid = useRef<Boolean>(false);

  const [isImportant, setIsImportant] = useState<boolean>(false);
  const [selectedDirectory, setSelectedDirectory] = useState<string>(
    directories[0]
  );

  const addNewTaskHandler = (event: React.FormEvent): void => {
    event.preventDefault();

    isTitleValid.current = titleInputRef.current!.value.trim().length > 0;
    isDateValid.current = date.trim().length > 0;

    if (isTitleValid.current && isDateValid.current) {
      const newTask: Task = {
        title: titleInputRef.current!.value,
        dir: selectedDirectory,
        description: descriptionTextRef.current!.value,
        date: date,
        completed: false,
        important: isImportant,
        id: Date.now().toString(),
      };
      dispatch(tasksActions.addNewTask(newTask));
      dispatch(modalActions.closeModalHandler());
    }
  };

  const closeModalHandler = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget)
      dispatch(modalActions.closeModalHandler());
  };

  return (
    <>
      <div
        className="fixed bg-slate-600/[.2] w-full h-full z-10 grid place-items-center px-2"
        onClick={closeModalHandler}
      >
        <section className=" bg-slate-200 max-w-lg w-full rounded-lg p-5 flex flex-col justify-start dark:bg-slate-900">
          <h2 className="font-medium mb-5 text-2xl text-slate-600 dark:text-slate-200">
            Add a task
          </h2>
          <form
            className="flex flex-col stylesInputsField"
            onSubmit={addNewTaskHandler}
          >
            <label>
              Title
              <input
                type="text"
                placeholder="e.g, do the homework"
                ref={titleInputRef}
                className="w-full"
              />
            </label>
            <label>
              Date
              <input
                type="date"
                className="w-full"
                value={date}
                onChange={({ target }) => setDate(target.value)}
                min={todayDate}
                max={maxDate}
              />
            </label>
            <label>
              Description (optional)
              <textarea
                placeholder="e.g, do the homework"
                className="w-full"
                ref={descriptionTextRef}
              ></textarea>
            </label>
            <label>
              Select a directory
              <select
                className="block w-full"
                value={selectedDirectory}
                onChange={({ target }) => setSelectedDirectory(target.value)}
              >
                {directories.map((dir: string) => (
                  <option
                    key={dir}
                    value={dir}
                    className="bg-slate-100 dark:bg-slate-800"
                  >
                    {dir}
                  </option>
                ))}
              </select>
            </label>
            <label className="mb-0 flex">
              <span className="order-1 flex-1">Mark as important</span>
              <input
                type="checkbox"
                className="w-4 h-4 basis-4 mr-2"
                checked={isImportant}
                onChange={() => setIsImportant((prev) => !prev)}
              />
            </label>

            <button type="submit" className="btn mt-5">
              Add task
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

const modalElement = document.getElementById("modal")! as HTMLElement;

const Modal: React.FC = () => {
  return ReactDOM.createPortal(<ModalContent />, modalElement);
};

export default Modal;
