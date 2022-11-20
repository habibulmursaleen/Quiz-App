import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
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
      action.value.forEach((question) => {
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

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  //to do it once only
  //questions will not change after loading from firebase
  //after loading useEffect will call dispatch
  //then according to dispatch in a local new state (qna), there will be a copy of questions with title, checked
  useEffect(() => {
    dispatch({
      type: "questions", //from reducer
      value: questions, //from firebase using custom Hook
    });
  }, [questions]);

  const handleAnswerChange = (event, index) => {
    dispatch({
      type: "answer", //from reducer
      questionID: currentQuestion,
      optionIndex: index,
      value: event.target.checked,
    });
  };

  //handles next questions when button pressed
  const handleNextQuestion = () => {
    if (currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
    }
  };

  //handles previous questions when button pressed
  const handlePrevQuestion = () => {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion - 1);
    }
  };

  //calculate % of progress
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  //submitQuiz. We request in firebase so thats async funtion
  //we save the results data in Results node against current userID. which is qna
  const submitQuiz = async () => {
    const { uid } = currentUser; //uid from firebase

    const db = getDatabase(); //creating db ref
    const resultRef = ref(db, `result/${uid}`);
    await set(resultRef, {
      [id]: qna,
    });

    navigate(`/result/${id}`, {
      state: {
        qna,
      },
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
            input
          />
          <ProgressBar
            nextQuestion={handleNextQuestion}
            prevQuestion={handlePrevQuestion}
            progress={percentage}
            submit={submitQuiz}
          />
          <MiniPlayer />
        </>
      )}
    </>
  );
};

export default Quiz;
