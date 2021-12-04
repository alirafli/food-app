import React, { useState } from "react";
import "./TextInput.css";
import * as AiIcons from "react-icons/bs";

const TextInput = ({
  label = "default",
  full = false,
  marbott = false,
  handleChange,
  eyeIcon = false,
  type = "text",
  add = false,
  ...otherProps
}) => {
  const [isVisible, setisVisible] = useState(false);

  return (
    <div className={`${marbott ? "mb-5" : ""} text-ternary`}>
      <label className="label">{label}</label> <br />
      <div className="relative">
        <div
          className={`${
            eyeIcon ? "" : "hidden"
          } absolute top-3 left-72 lg:hidden md:hidden sm:hidden`}
          onClick={() => setisVisible(!isVisible)}
        >
          <AiIcons.BsFillEyeFill className={`${isVisible ? "" : "hidden"}`} />
          <AiIcons.BsFillEyeSlashFill
            className={`${!isVisible ? "" : "hidden"}`}
          />
        </div>
        <input
          className={`${add ? "add" : "input"} ${full ? "w-full" : ""} mt-1 pl-4 `}
          onChange={handleChange}
          type={eyeIcon ? (isVisible ? "text" : "password") : type}
          {...otherProps}
        />
      </div>
    </div>
  );
};

export default TextInput;
