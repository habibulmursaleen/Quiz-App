import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

//Custom Hook
const useAnswers = (videoID) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    //database related work
    const fetchAnswers = async () => {
      const db = getDatabase(); //gettign database reference from firebase
      const answerRef = ref(db, "answers/" + videoID + "/questions"); //videos table node access reference
      const answerQuery = query(answerRef, orderByKey()); //1 para = node ref, from 2nd para can be multiple

      try {
        setError(false);
        setLoading(true);
        //request api from firebase
        const snapshot = await get(answerQuery);
        setLoading(false);
        //checking if data is available
        if (snapshot.exists()) {
          setAnswers((prevAnswers) => {
            //gets object >> Object.value makes an array from object value. results in snapshot.val()>>gets and array>>need to destructure
            return [...prevAnswers, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    };

    setTimeout(() => {
      fetchAnswers();
    }, 300);
  }, [videoID]);

  return {
    loading,
    error,
    answers,
  };
};

export default useAnswers;
