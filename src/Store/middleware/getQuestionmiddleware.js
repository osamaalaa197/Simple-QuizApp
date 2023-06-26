import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getQuestionthunk = createAsyncThunk("Post/getpos", async () => {
  const results = await axios.get(`http://localhost:3004/questions`);
  if (!results) {
    console.log("data not found");
  }
  return results
});

export default getQuestionthunk