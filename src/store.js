import { configureStore, createSlice } from "@reduxjs/toolkit";

const show = createSlice({
  name: "show",
  initialState: "start",
  reducers: {
    changeShow() {
      return "end";
    },
  },
});

export const { changeShow } = show.actions;

export default configureStore({
  reducer: { show: show.reducer },
});
