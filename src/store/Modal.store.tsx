import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalIsOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModalHandler(state) {
      state.modalIsOpen = true;
    },
    closeModalHandler(state) {
      state.modalIsOpen = false;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
