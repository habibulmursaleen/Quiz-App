import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

//Custom Hook
const UseQuestionsList = (videoID) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    //database related work
    const fetchQuestions = async () => {
      const db = getDatabase(); //gettign database reference from firebase
      const QuizRef = ref(db, "quiz/" + videoID + "/questions"); //videos table node access reference
      const QuizQuery = query(QuizRef, orderByKey()); //1 para = node ref, from 2nd para can be multiple

      try {
        setError(false);
        setLoading(true);
        //request api from firebase
        const snapshot = await get(QuizQuery);
        setLoading(false);
        //checking if data is available
        if (snapshot.exists()) {
          setQuestions((prevQuestions) => {
            //gets object >> Object.value makes an array from object value. results in snapshot.val()>>gets and array>>need to destructure
            return [...prevQuestions, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    };

    setTimeout(() => {
      fetchQuestions();
    }, 300);
  }, [videoID]);

  return {
    loading,
    error,
    questions,
  };
};

export default UseQuestionsList;
