import React from "react";
import Button from "../components/Button/Button";
import Title from "../components/Title/Title";
import Paragraph from "../components/Paragraph/Paragraph";

const Component = () => {
  return (
    <div className="ml-10 mt-10">
      <Title main bold>
        Big Title
      </Title>
      <br />
      <Paragraph header>Header</Paragraph>
      <Paragraph >Paragraph</Paragraph>
      <br />
      <Button text="primary" rounded bold arrow />
      <br />
      <Button text="secondary" secondary rounded bold />
      <br />
      <Button text="ternary" ternary rounded bold />
    </div>
  );
};

export default Component;
