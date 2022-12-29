import { configureStore } from "@reduxjs/toolkit";
import tasksReducer, { tasksMiddleware } from "./Tasks.store";
import modalReducer from "./Modal.store";
import menuReducer from "./Menu.store";

const store = configureStore({
  reducer: { tasks: tasksReducer, modal: modalReducer, menu: menuReducer },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(tasksMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
export default store;
