import React from "react";
import X from "../../assets/icons/x";
import Search from "../../assets/icons/search";

const Icon = ({ icon, className }) => {
  const icons = {
    x: X,
    search: Search,
  };

  const Icon = icons[icon];
  return (
    <>
      {icon && (
        <div className={`icon ${className}`}>
          <Icon />
        </div>
      )}
    </>
  );
};

export default Icon;
