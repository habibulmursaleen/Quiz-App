import React from "react";

import successImage from "../../../../assets/images/success.png";
import classes from "../../../../styles/Summary.module.css";

const Summary = ({ score, noq }) => {
  // const getKeyword = useMemo(() => {
  //   if ((score / (noq * 5)) * 100 < 50) {
  //     return "failed";
  //   } else if ((score / (noq * 5)) * 100 < 75) {
  //     return "good";
  //   } else if ((score / (noq * 5)) * 100 < 100) {
  //     return "very good";
  //   } else {
  //     return "excellent";
  //   }
  // }, [score, noq]);

  // const { loading, error, result } = useFetch(
  //   `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
  //   "GET",
  //   {
  //     Authorization: process.env.REACT_APP_PEXELS_API_KEY,
  //   }
  // );

  // const image = result ? result?.photos[0].source.medium : successImage;
  return (
    <>
      <div className={classes.summary}>
        <div className={classes.point}>
          {/* <!-- progress bar will be placed here --> */}
          <p className={classes.score}>
            Your score is <br />
            {score} out of {noq * 5}
          </p>
        </div>

        {/* {loading && <div className={classes.badge}>Loading your badge...</div>}
        {error && <div className={classes.badge}>An error occured!</div>} */}

        <div className={classes.badge}>
          <img src={successImage} alt="Success" />
        </div>
      </div>
    </>
  );
};

export default Summary;
