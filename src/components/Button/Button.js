import React from "react";
import { ImArrowRight } from "react-icons/im";
import "./Button.css";

const Button = ({
  text = "kosong",
  bold = false,
  secondary = false,
  ternary = false,
  quartet = false,
  arrow = false,
  fullWidht = false,
  onClick,
  ...otherprops
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
        ${secondary ? "secondary" : `${ternary ? "ternary" : `${quartet? "quartet" : "primary"}`}`}
        ${bold && "font-semibold"}
        ${fullWidht && "w-full"}
        default`}
      onClick={onClick}
      {...otherprops}
    >
      {text} {arrowIcon()}
    </button>
  );
};

export default Button;
