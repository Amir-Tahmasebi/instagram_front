import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../services/client";

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const response = await client
    .get("/video/video/mostViewedVideos")
    .then((res) => res.data);
  return response;
});

const initialState = {
  loading: true,
  videos: null,
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.videos = action.payload;
      state.loading = false;
    });
  },
});
export const videosSelect = (state) => state.videos;

const { reducer } = videoSlice;
export default reducer;
