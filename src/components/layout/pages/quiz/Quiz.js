import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import UseQuestionsList from "../../../../hooks/useQuestionsList";
import Answers from "./Answers";
import MiniPlayer from "./MiniPlayer";
import ProgressBar from "./ProgressBar";

//questions >> option >> load a checked (by default false) >> if check it will become true
//will copy state >> update check
//checked or !checked? >> need a react state
//copy of questions >> options checked >> useReducer hook

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    //action's object type
    //copy >> looping through questions >> options >> checking false
    //action.value is the questions we get from firebase
    case "questions":
      action.value.keys().forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    //this case will fire when user will select an answer
    //for deep cloneing a object (nested), we can use lodash
    //clone current state
    //will update checked if true/false
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value; // Question num/ option num >> checked
      return questions;

    default:
      return state;
  }
};

const Quiz = () => {
  //hooks at the top
  const { id } = useParams(); //using hooks >> getting youtubeID in id.
  const { loading, error, questions } = UseQuestionsList(id); //from costom hooks
  // eslint-disable-next-line
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  //to do it once only
  //questions will not change after loading from firebase
  //after loading useEffect will call dispatch
  //then according to dispatch in a local new state (qna), there will be a copy of questions with title, checked
  useEffect(() => {
    dispatch({
      type: "questions", //from reducer
      value: "questions", //from firebase using custom Hook
    });
  }, [questions]);

  const handleAnswerChange = (event, index) => {
    dispatch({
      type: "answer", //from reducer
      questionID: currentQuestion,
      optionIndex: "index",
      value: event.target.checked,
    });
  };

  return (
    <>
      {error && <div>There was an error!</div>}
      {loading && <div> Loading...</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar />
          <MiniPlayer />
        </>
      )}
    </>
  );
};

export default Quiz;
