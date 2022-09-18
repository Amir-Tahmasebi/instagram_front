import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    changeDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const darkModeSelect = (state) => state.darkMode;

const { reducer, actions } = darkModeSlice;
export const { changeDarkMode } = actions;
export default reducer;