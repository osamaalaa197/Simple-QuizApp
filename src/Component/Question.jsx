import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import getQuestionthunk from "../Store/middleware/getQuestionmiddleware";
import { useNavigate, useParams } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import { questionAciton } from "../Store/slice/QuestionSlice";
import "./Question.css";
import "./UserForm.css";

function Question() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(store);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // State to track the current question index
  const [answerCorrectnumber, setanswerCorrectnumber] = useState(0);
  const [answerWrongnumber, setanswerWrongnumber] = useState(0);
  const navigate = useNavigate();

  const handleNextQuestion = () => {
    // Move to the next question by incrementing the index
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    if (currentQuestionIndex >= 5) {
      navigate("/");
    }
  };

  function getanswer() {
    if (
      currentQuestionIndex <
      store.questionReducers.question.data.length - 1
    ) {
      const answer =
        store.questionReducers.question.data[currentQuestionIndex]
          .correctAnswer;
      return answer;
    }
  }
  const answer = getanswer();
  // console.log(store.questionReducers.question.data[0].correctAnswer)
  // let answernumber=0
  const HandelCorrectAnswer = (e) => {
    if (e === answer) {
      setanswerCorrectnumber((prevNumber) => prevNumber + 1);
      dispatch(questionAciton.changeCorrect(answerCorrectnumber + 1));
      console.log("well Done");
    } else {
      setanswerWrongnumber((prevNumber) => prevNumber + 1);
      dispatch(questionAciton.changeWrong(answerWrongnumber + 1));
    }
  };

  if (store.questionReducers.question.data.length === 0) {
    // Handle the case when questions are still loading or not available
    return <div>Loading...</div>;
  }

  if (currentQuestionIndex >= store.questionReducers.question.data.length) {
    // Handle the case when all questions have been answered
    const user = store.userReducers.UserName;
    const correctanswer = store.questionReducers.correct;
    const wronganswer = store.questionReducers.wrong;
    if (correctanswer > 2) {
      return (
        <>
          {/* <h1>{user}</h1>,
      <h1>correctanswer :{correctanswer}</h1>,
      <h1>correctanswer :{wronganswer}</h1>; */}
          <div class="login-box">
            <h2>Result</h2>
            <h2>Congratulation {user}</h2>
            <h2>correct answers :{correctanswer} </h2>
            <h2>Wrong answers :{wronganswer} </h2>
            <h2>You Passed The Quiz By {(correctanswer / 5) * 100}% </h2>
            <form>
              <a href="#">
                <button type="submit">
                  <Link to={"/"}>Try Again</Link>
                </button>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </a>
            </form>
          </div>
        </>
      );
    }
    return (
      <>
        {/* <h1>{user}</h1>,
    <h1>correctanswer :{correctanswer}</h1>,
    <h1>correctanswer :{wronganswer}</h1>; */}
        <div class="login-box">
          <h2>Result</h2>
          <h2>correct answers :{correctanswer} </h2>
          <h2>Wrong answers :{wronganswer} </h2>
          <h2>correctanswer </h2>
        </div>
      </>
    );
  }

  const currentQuestion =
    store.questionReducers.question.data[currentQuestionIndex];
  // console.log(store.questionReducers.question.data);
  return (
    <>
      <>
        <div className="quiz-container">
          <h1 className="question">
            Question {currentQuestionIndex + 1}:{currentQuestion.title}
          </h1>
          {currentQuestion.choices.map((choice) => (
            <ul className="options">
              <li className="option">
                <label key={choice}>
                  <input
                    onChange={(e) => {
                      // console.log(e.target.value)
                      HandelCorrectAnswer(e.target.value);
                    }}
                    type="radio"
                    id="question"
                    name={`q${currentQuestionIndex + 1}`}
                    value={choice}
                  />{" "}
                  {choice}
                </label>
              </li>
            </ul>
          ))}
          <button onClick={handleNextQuestion} className="next-button">
            {currentQuestionIndex >=
            store.questionReducers.question.data.length - 1
              ? "Result"
              : "Next Question"}
          </button>
        </div>
      </>
    </>
  );
}

export default Question;
