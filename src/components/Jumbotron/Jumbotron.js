import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import Img from "../../assets/jumbotron-search.png";

const Jumbotron = ({children, text}) => {
  return (
    <div
      className="bg-cover bg-center h-80 bg-no-repeat w-full flex items-center justify-center text-white flex-col"
      style={{ backgroundImage: `url(${Img})` }}
    >
      <Paragraph h1 jumbo header className="tracking-wider">
        {children}
      </Paragraph>
      <Paragraph>{text}</Paragraph>
    </div>
  );
};

export default Jumbotron;
