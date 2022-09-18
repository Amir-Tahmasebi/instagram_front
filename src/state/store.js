import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "./slice/videos";
import darkModeReducer from "./slice/darkMode";

const store = configureStore({
  reducer: {
    videos: videosReducer,
    darkMode: darkModeReducer,
  },
});

export default store;
