import React from "react";

const Paragraph = ({
  children,
  header = false,
  h1 = false,
  className,
  small = false,
  normal = false,
  jumbo = false,
  ...otherPrors
}) => {
  return (
    <div>
      <p
        className={`${header ? "font-bold" : "font-medium"} md:text-lg ${
          h1
            ? "text-2xl"
            : `${small ? "text-xs" : `${normal ? "text-lg" : "text-sm"}`}`
        } ${className} ${jumbo ? "text-6xl" : ""} `}
        {...otherPrors}
      >
        {children}
      </p>
    </div>
  );
};

export default Paragraph;
