import { createSlice } from "@reduxjs/toolkit";

export const quiz = createSlice({
  name: "app",
  initialState: {
    page: 0,
    selectedQuiz: 0,
    selectedDetails: {
      quiz_id: 0,
      questions: [],
      answers: [],
    },
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
    setPage: (state, action) => {
      state.page = state.page + action.payload;
    },
    setSelectedDetails: (state, action) => {
      if (action.payload === null) {
        state.selectedDetails = {
          quiz_id: 0,
          questions: [],
          answers: [],
        };
      } else {
        // state.selectedDetails = action.payload;
        if (state.page > 1) {
          action.payload.questions.map(item => {
            state.selectedDetails.questions.push(item);
          });
        } else {
          state.selectedDetails = action.payload;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedQuiz, setAnswer, deleteAnswer, setSelectedDetails, setPage } = quiz.actions;

export default quiz.reducer;
