import React from "react";

const Title = ({ children, main = false, bold = false }) => {
  return (
    <h1
      className={`font-primary  ${main ? "md:text-7xl text-5xl" : "text-2xl"} ${
        bold ? "font-bold" : "font-normal"
      }`}
    >
      {children}
    </h1>
  );
};

export default Title;
