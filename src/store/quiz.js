import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-community/async-storage";

const setAnswerStorage = async (quiz_id, value) => {
  const getAnswer = await AsyncStorage.getItem("answer");
  let data = {};
  if (getAnswer !== null) data = JSON.parse(getAnswer);
  data[quiz_id] = value;
  await AsyncStorage.setItem("answer", JSON.stringify(data));
};
const setCompleteStorage = async (quiz_id, value) => {
  const getComplete = await AsyncStorage.getItem("complete");
  let data = {};
  if (getComplete !== null) data = JSON.parse(getComplete);
  data[quiz_id] = value;
  await AsyncStorage.setItem("complete", JSON.stringify(data));

  const getAnswer = await AsyncStorage.getItem("answer");
  if (getAnswer !== null) {
    let data = JSON.parse(getAnswer);
    delete data[quiz_id];
    await AsyncStorage.setItem("answer", JSON.stringify(data));
  }
};

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
    quiz_list: [],
    quiz_list_page: 0,
    quiz_list_last_page: 0,
    list_end: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
      AsyncStorage.setItem("test1", "sonuc");
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
      const storage = {
        quiz_name: state.quiz_name,
        answers: state.answers,
      };
      setAnswerStorage(state.quiz_id, storage);
    },
    fromStorageAnswer: (state, action) => {
      state.answers = action.payload;
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
    setListEnd: (state, action) => {
      state.list_end = action.payload;
    },
    setLastPage: (state, action) => {
      state.last_page = action.payload;
    },
    setQuizName: (state, action) => {
      state.quiz_name = action.payload === "" ? "Yükleniyor..." : action.payload;
    },
    setQuizList: (state, action) => {
      state.quiz_list = state.quiz_list_page === 0 ? action.payload : [...state.quiz_list, ...action.payload];
    },
    setQuizListPage: (state, action) => {
      state.quiz_list_page = action.payload;
    },
    setQuizListLastPage: (state, action) => {
      state.quiz_list_last_page = action.payload;
    },
    setComplete: (state, action) => {
      // state.complete = action.payload;
      const storage = {
        quiz_name: state.quiz_name,
        result: action.payload,
      };
      setCompleteStorage(state.quiz_id, storage);
    },
    setZero: (state, action) => {
      state.quiz_id = action.payload;
      state.quiz_name = "Yükleniyor...";
      // state.questions = [];
      // state.answers = [];
      state.page = 0;
      state.isLoading = false;
      state.complete = false;
      state.end = false;
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
  setQuizList,
  setQuizListPage,
  setQuizListLastPage,
  setListEnd,
  setZero,
  setComplete,
  fromStorageAnswer,
} = quiz.actions;

export default quiz.reducer;
