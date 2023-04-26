import React from "react";

import "./button.scss";

const Button = ({ title, backGround, onClick }) => {
  return (
    <button className={`btn ${backGround}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
