import React from "react";

const CheckBox = ({ text, ...rest }) => {
  return (
    <label>
      <input {...rest} />
      <span> {text}</span>
    </label>
  );
};

export default CheckBox;
