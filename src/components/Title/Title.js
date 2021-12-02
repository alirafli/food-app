import React from "react";

const Title = ({ children, main = false, bold = false, ...otherprops }) => {
  return (
    <h1
      className={`font-primary  ${main ? "text-7xl md:text-5xl sm:text-3xl" : "text-2xl"} ${
        bold ? "font-semibold " : "font-normal"
      }`}
      {...otherprops}
    >
      {children}
    </h1>
  );
};

export default Title;
