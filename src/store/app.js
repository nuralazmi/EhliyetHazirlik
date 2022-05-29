import { createSlice } from "@reduxjs/toolkit";

export const app = createSlice({
  name: "app",
  initialState: {
    quiz: 0,
  },
  reducers: {
    setQuix: (state, action) => {
      state.quiz = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQuix } = app.actions;

export default app.reducer;
