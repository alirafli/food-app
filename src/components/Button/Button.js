import React from "react";
import { ImArrowRight } from "react-icons/im";

const Button = ({
  text = "kosong",
  bold = false,
  secondary = false,
  ternary = false,
  arrow = false,
  fullWidht = false,
  onClick,
}) => {
  const arrowIcon = () => {
    if (arrow === true) {
      return (
        <ImArrowRight
          style={{ color: "#FE724C", marginLeft: "10px", marginTop: "4px" }}
        />
      );
    }
  };
  return (
    <button
      className={`
        ${
          secondary
            ? "border-4 border-gray-800 text-gray-800 hover:border-black hover:text-black"
            : `${ternary ? "bg-ternary hover:bg-ternary2 text-white" : "bg-primary hover:bg-yellow-400"}` }
        ${bold ? "font-semibold" : ""}
        ${fullWidht ? "w-full" : ""}
        flex items-center justify-between shadow-xl rounded-full py-2 px-6 transition `}
      onClick={onClick}
    >
      {text} {arrowIcon()}
    </button>
  );
};

export default Button;
