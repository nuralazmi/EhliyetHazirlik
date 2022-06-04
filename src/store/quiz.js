import { createSlice } from "@reduxjs/toolkit";

export const quiz = createSlice({
  name: "app",
  initialState: {
    isLoading: false,
    end: false,
    page: 0,
    last_page: 0,
    quiz_id: 0,
    quiz_name: "",
    questions: [],
    answers: [],
    answer_key: [],
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setQuiz: (state, action) => {
      state.quiz_id = action.payload;
    },
    setQuestion: (state, action) => {
      state.questions = state.page === 0 ? action.payload : [...state.questions, ...action.payload];
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
    setAnswersKey: (state, action) => {
      state.answer_key = state.page === 0 ? action.payload : [...state.answer_key, ...action.payload];
    },
    setEnd: (state, action) => {
      state.end = action.payload;
    },
    setLastPage: (state, action) => {
      state.last_page = action.payload;
    },
    setQuizName: (state, action) => {
      state.quiz_name = action.payload === "" ? "Yükleniyor..." : action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLoading,
  setPage,
  setQuiz,
  setQuestion,
  setAnswer,
  deleteAnswer,
  setAnswersKey,
  setEnd,
  setLastPage,
  setQuizName,
} = quiz.actions;

export default quiz.reducer;
