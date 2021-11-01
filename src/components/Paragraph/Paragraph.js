import React from "react";

const Paragraph = ({ children, header = false }) => {
  return (
    <div>
      <p className={`${header ? "font-bold" : "font-medium"} md:text-lg text-base`}>{children}</p>
    </div>
  );
};

export default Paragraph;
