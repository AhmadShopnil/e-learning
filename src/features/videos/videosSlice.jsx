import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeVideoId: 2,
};

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setActiveVideo: (state, action) => {
      state.activeVideoId = action.payload;
    },
  },
});

export const { setActiveVideo } = videosSlice.actions;
export default videosSlice.reducer;
