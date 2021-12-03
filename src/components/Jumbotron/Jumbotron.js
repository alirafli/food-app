import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import Img from "../../assets/jumbotron-search.png";
import TextInput from "../TextInput/TextInput";

const Jumbotron = ({ children, text, form = false, handleChange }) => {
  return (
    <div
      className="bg-cover bg-center h-80 bg-no-repeat w-full flex items-center justify-center text-white flex-col"
      style={{ backgroundImage: `url(${Img})` }}
    >
      <Paragraph h1 jumbo header className="tracking-wider">
        {children}
      </Paragraph>
      <Paragraph>{text}</Paragraph>
      {form ? (
        <TextInput handleChange={handleChange} label="" />
      ) : (
        ""
      )}
    </div>
  );
};

export default Jumbotron;
