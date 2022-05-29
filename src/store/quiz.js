import { createSlice } from "@reduxjs/toolkit";

export const quiz = createSlice({
  name: "app",
  initialState: {
    selectedQuiz: 0,
    answers: [],
  },
  reducers: {
    setSelectedQuiz: (state, action) => {
      state.selectedQuiz = action.payload;
    },
    setAnswer: (state, action) => {
      let answer = action.payload;
      let data = state.answers.filter(item => item.question_id !== answer.question_id);
      data.push(answer);
      state.answers = data;
    },
    deleteAnswer: (state, action) => {
      let question_id = action.payload;
      state.answers = state.answers.filter(item => item.question_id !== question_id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedQuiz, setAnswer, deleteAnswer } = quiz.actions;

export default quiz.reducer;
