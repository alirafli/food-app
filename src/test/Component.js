import React from "react";
import Button from "../components/Button/Button";
import Title from "../components/Title/Title";

const Component = () => {
  return (
    <div>
      <Title text="Testing Component" />
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
