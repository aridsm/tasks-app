import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const menuSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openMenu(state) {
      state.open = true;
    },
    closeMenu(state) {
      state.open = false;
    },
  },
});

export const menuActions = menuSlice.actions;
export default menuSlice.reducer;
