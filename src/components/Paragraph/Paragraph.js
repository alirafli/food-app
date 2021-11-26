import React from "react";

const Paragraph = ({ children, header = false, h1 = false, className, ...otherPrors }) => {
  return (
    <div>
      <p
        className={`${header ? "font-bold" : "font-medium"} md:text-lg ${
          h1 ? "text-2xl" : "text-sm"
        } ${className} `}
        {...otherPrors}
      >
        {children}
      </p>
    </div>
  );
};

export default Paragraph;
