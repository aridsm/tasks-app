import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuHeaderOpened: false,
  menuAccountOpened: false,
};

const menusSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openMenuHeader(state) {
      state.menuHeaderOpened = true;
    },
    closeMenuHeader(state) {
      state.menuHeaderOpened = false;
    },
    openMenuAccount(state) {
      state.menuAccountOpened = true;
    },
    closeMenuAccount(state) {
      state.menuAccountOpened = false;
    },
  },
});

export const menusActions = menusSlice.actions;
export default menusSlice.reducer;
