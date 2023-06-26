import { createSlice } from "@reduxjs/toolkit";
import getQuestionthunk from "../middleware/getQuestionmiddleware";

const state = {
  question: null,
  answer: 0,
  correct: 0,
  wrong: 0,
};

const QuestionSlice = createSlice({
  name: "question",
  initialState: state,
  reducers: {
    changeAnswer: (state, action) => {
      state.answer = action.payload;
    },
    changeCorrect: (state, action) => {
      state.correct = action.payload;
    },
    changeWrong: (state, action) => {
        state.wrong = action.payload;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuestionthunk.fulfilled, (state, action) => {
        state.question = action.payload;
      })
      .addCase(getQuestionthunk.rejected, (state, action) => {
        console.log("data not found");
      });
  },
});

export const questionAciton = QuestionSlice.actions;
export const questionReducers = QuestionSlice.reducer;
