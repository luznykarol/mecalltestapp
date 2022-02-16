import React from "react";

const Button = ({ type, disabled, onClick, text, color, className }) => {
  return (
    <button
      type={type}
      className={`py-1 px-4 text-white rounded bg-${color} ${className}`}
      disabled={disabled}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
