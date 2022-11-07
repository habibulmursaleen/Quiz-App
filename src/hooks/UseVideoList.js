import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

//Custom Hook
const UseVideoList = (page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState("");
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    //database related work
    const fetchVideos = async () => {
      const db = getDatabase(); //gettign database reference from firebase
      const videoRef = ref(db, "videos"); //videos table node access reference
      const videoQuery = query(
        videoRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(5)
      ); //1 para = node ref, from 2nd para can be multiple

      try {
        setError(false);
        setLoading(true);
        //request api from firebase
        const snapshot = await get(videoQuery);
        setLoading(false);
        //checking if data is available
        if (snapshot.exists()) {
          setVideos((prevVideos) => {
            //gets object >> Object.value makes an array from object value. results in snapshot.val()>>gets and array>>need to destructure
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    };

    setTimeout(() => {
      fetchVideos();
    }, 300);
  }, [page]);

  return {
    loading,
    error,
    videos,
    hasMore,
  };
};

export default UseVideoList;
