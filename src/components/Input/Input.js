import React from "react";

const Input = ({
  type = "text",
  name,
  placeholder = "text",
  value,
  className,
  onChange,
  error,
  onBlur,
  errorMessage,
}) => {
  const displayError = error && (
    <span className="text-red text-sm">{errorMessage}</span>
  );
  const borderColor = error ? "border-red " : "border-grey-light ";

  return (
    <div className={`mb-4 text-black `}>
      <input
        className={`border rounded ${borderColor} py-1 px-2`}
        id={name}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      {displayError}
    </div>
  );
};

export default Input;
