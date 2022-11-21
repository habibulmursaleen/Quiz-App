import _ from "lodash";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../../../hooks/useAnswers";
import Analysis from "./analysis/Analysis";
import Summary from "./Summary";

const Results = () => {
  const { id } = useParams();
  const location = useLocation(); //getting qna from react router dom location
  const qna = location?.state?.qna;
  const { loading, error, answers } = useAnswers(id);
  console.log(location);
  //"qna" has only checked items, answers has the correct ones. now we need to check
  function calculate() {
    let score = 0;
    console.log(score);
    answers.forEach((question, index1) => {
      //making arrays for checked ones and correct ones
      let correctIndexes = [],
        checkedIndexes = [];

      // if both arrays are matched, then the score goes up
      question.options.forEach((option, index2) => {
        if (option.correct) {
          correctIndexes.push(index2);
        }
        if (qna[index1]?.options[index2]?.checked) {
          checkedIndexes.push(index2);
          option.checked = true; //will need in result analysis
        }
      });

      //checking if 2 arrays are structurally same or not. from lodash builtin func
      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });
    return score;
  }

  const userScore = calculate();

  return (
    <>
      {error && <div>There was an error!</div>}
      {loading && <div> Loading...</div>}
      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
};

export default Results;
