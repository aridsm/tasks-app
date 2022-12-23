import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalCreateTaskOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModalCreateTask(state) {
      state.modalCreateTaskOpen = true;
    },
    closeModalCreateTask(state) {
      state.modalCreateTaskOpen = false;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
