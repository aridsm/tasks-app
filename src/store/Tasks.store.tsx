import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../interfaces";

const defaultTasks = [
  {
    title: "Wash the dishes",
    dir: "Home",
    description: "This is the description for this task.",
    date: "2022-08-14",
    completed: false,
    important: false,
    id: "dY7aN",
  },
  {
    title: "Do homework",
    dir: "School",
    description: "This is the description for this task.",
    date: "2022-11-08",
    completed: true,
    important: true,
    id: "hYsk8",
  },
  {
    title: "Wash the dishes",
    dir: "School",
    description: "This is the description for this task.",
    date: "2022-10-08",
    completed: true,
    important: false,
    id: "hd5aS",
  },
  {
    title: "Study",
    dir: "School",
    description: "This is the description for this task.",
    date: "2022-10-06",
    completed: true,
    important: false,
    id: "fkd8s",
  },
  {
    title: "Study english",
    dir: "School",
    description: "This is the description for this task.",
    date: "2022-10-28",
    completed: true,
    important: false,
    id: "f9aKD",
  },
  {
    title: "Fix the TV",
    dir: "School",
    description: "This is the description for this task.",
    date: "2022-10-18",
    completed: false,
    important: false,
    id: "dhsda1",
  },
  {
    title: "Study",
    dir: "School",
    description: "This is the description for this task.",
    date: "2022-12-01",
    completed: false,
    important: false,
    id: "dhsD1",
  },
];
const defaultDirectories = ["Home", "School", "Main"];
const initialState: {
  tasks: Task[];
  directories: string[];
} = {
  tasks: localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks")!)
    : defaultTasks,
  directories: localStorage.getItem("directories")
    ? JSON.parse(localStorage.getItem("directories")!)
    : defaultDirectories,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addNewTask(state, action: PayloadAction<Task>) {
      state.tasks = [action.payload, ...state.tasks];
    },
    removeTask(state, action) {
      const newTasksList = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      state.tasks = newTasksList;
    },
    markAsImportant(state, action: PayloadAction<string>) {
      const newTaskFavorited = state.tasks.find(
        (task) => task.id === action.payload
      );
      newTaskFavorited!.important = !newTaskFavorited!.important;
    },
    editTask(state, action: PayloadAction<Task>) {
      const taskId = action.payload.id;

      const newTaskEdited: Task = state.tasks.find(
        (task: Task) => task.id === taskId
      )!;
      const indexTask = state.tasks.indexOf(newTaskEdited);
      state.tasks[indexTask] = action.payload;
    },
    toggleTaskCompleted(state, action: PayloadAction<string>) {
      const taskId = action.payload;

      const currTask = state.tasks.find((task) => task.id === taskId)!;

      currTask.completed = !currTask.completed;
    },
    deleteAllTasks(state) {
      state.tasks = [];
    },
    createDirectory(state, action: PayloadAction<string>) {
      const newDirectory: string = action.payload;
      const directoryAlreadyExists = state.directories.includes(newDirectory);
      if (directoryAlreadyExists) return;
      state.directories = [newDirectory, ...state.directories];
    },
    deleteDirectory(state, action: PayloadAction<string>) {
      const dirName = action.payload;

      state.directories = state.directories.filter((dir) => dir !== dirName);
      state.tasks = state.tasks.filter((task) => task.dir !== dirName);
    },
    editDirectoryName(
      state,
      action: PayloadAction<{ newDirName: string; previousDirName: string }>
    ) {
      const newDirName: string = action.payload.newDirName;
      const previousDirName: string = action.payload.previousDirName;
      const directoryAlreadyExists = state.directories.includes(newDirName);
      if (directoryAlreadyExists) return;

      const dirIndex = state.directories.indexOf(previousDirName);

      state.directories[dirIndex] = newDirName;
      state.tasks.forEach((task) => {
        if (task.dir === previousDirName) {
          task.dir = newDirName;
        }
      });
    },
  },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice.reducer;

export const tasksMiddleware = (store: any) => (next: any) => (action: any) => {
  const nextAction = next(action);
  const actionChangeOnlyDirectories =
    tasksActions.createDirectory.match(action);

  const isADirectoryAction: boolean = action.type
    .toLowerCase()
    .includes("directory");

  if (action.type.startsWith("tasks/") && !actionChangeOnlyDirectories) {
    const tasksList = store.getState().tasks.tasks;
    localStorage.setItem("tasks", JSON.stringify(tasksList));
  }
  if (action.type.startsWith("tasks/") && isADirectoryAction) {
    const dirList = store.getState().tasks.directories;
    localStorage.setItem("directories", JSON.stringify(dirList));
  }
  return nextAction;
};
