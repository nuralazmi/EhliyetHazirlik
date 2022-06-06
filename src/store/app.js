import { createSlice } from "@reduxjs/toolkit";

export const app = createSlice({
  name: "app",
  initialState: {
    quiz: 0,
    connected: true,
  },
  reducers: {
    setQuix: (state, action) => {
      state.quiz = action.payload;
    },
    setConnect: (state, action) => {
      state.connected = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQuix, setConnect } = app.actions;

export default app.reducer;
