import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      title: "Wash the dishes",
      dir: "Home",
      description: "This is the description for this task.",
      date: "2022-14-08",
      completed: false,
      important: false,
      id: "dY7aN",
    },
    {
      title: "Do homework",
      dir: "School",
      description: "This is the description for this task.",
      date: "2022-15-08",
      completed: true,
      important: true,
      id: "hYsk8",
    },
    {
      title: "Wash the dishes",
      dir: "School",
      description: "This is the description for this task.",
      date: "2022-15-08",
      completed: true,
      important: false,
      id: "hd5aS",
    },
    {
      title: "Wash the dishes",
      dir: "School",
      description: "This is the description for this task.",
      date: "2022-15-08",
      completed: true,
      important: false,
      id: "hdg9M",
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addNewTask(state, action) {
      state.tasks = [...state.tasks, action.payload];
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
  },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice.reducer;
