import React, { useState } from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import BaseURL from "../../api/BaseURL";
import { useHistory } from "react-router-dom";
import TextInput from "../../components/TextInput/TextInput";
import { useAuth } from "../../config/Auth";
import Paragraph from "../../components/Paragraph/Paragraph";
import Button from "../../components/Button/Button";

const AddResep = () => {
  const [Steps, setSteps] = useState([]);
  const [payload, setPayload] = useState({
    title: "",
    img_id:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574",
    description: "",
  });

  const history = useHistory();
  const StepsData = [];

  const fetctSteps = () => {
    Steps.map((data) => {
      return StepsData.push(data.content);
    });
  };

  // const checkData = () => {
  //   console.log(payload);
  //   console.log(Steps);
  //   // console.log(authTokens.access_token);
  // };

  const { authTokens } = useAuth();

  const handleAddLink = (e) => {
    e.preventDefault();
    const inputState = {
      title: "",
      content: "",
    };

    setSteps((prev) => [...prev, inputState]);
  };

  const sendResep = () => {
    BaseURL.post(
      "/recipe",
      {
        title: payload.title,
        img_id: payload.img_id,
        description: payload.description,
        steps: StepsData,
      },
      {
        headers: { Authorization: `Bearer ${authTokens.access_token}` },
      }
    ).then(history.push("/homepage"));
  };

  const handleRemoveField = (e, index) => {
    e.preventDefault();

    setSteps((prev) => prev.filter((item) => item !== prev[index]));
  };

  const onChange = (index, event) => {
    event.preventDefault();
    event.persist();

    setSteps((prev) => {
      return prev.map((item, i) => {
        if (i !== index) {
          return item;
        }

        return {
          ...item,
          [event.target.name]: event.target.value,
        };
      });
    });
  };
  return (
    <div className="flex flex-col w-full">
      <Jumbotron text="Upload your recipe journey and let people know your recipe!">
        Add Post
      </Jumbotron>
      <div className="pl-24 pr-14 pt-5 w-full">
        <Paragraph header className="text-ternary text-3xl">
          Upload your recipe here!
        </Paragraph>
        <div className="w-full p-6 shadow-2xl rounded-3xl mb-10">
          {/* {JSON.stringify(Form)} */}
          <form action="">
            <TextInput
              name="title"
              label="Title"
              type="text"
              placeholder="Tap your text here ..."
              add
              marbott
              full
              handleChange={(e) =>
                setPayload({ ...payload, title: e.target.value })
              }
            />
            <h1 className="font-bold">Description</h1>
            <textarea
              name="content"
              cols="40"
              rows="5"
              placeholder="Tap your text here ..."
              className="text-ternary font-semibold ring-2 ring-primary focus:ring-yellow-500 outline-none mb-5 w-full"
              onChange={(e) =>
                setPayload({ ...payload, description: e.target.value })
              }
            />
            <Button
              type="button"
              quartet
              text="Add Resep"
              onClick={handleAddLink}
            >
              Add Resep
            </Button>
            <br />
            {Steps.map((item, index) => (
              <div key={index} className="mt-5">
                <Paragraph h1>{`step ${index + 1}`}</Paragraph>
                <textarea
                  name="content"
                  type="text"
                  placeholder="Tap your text here ..."
                  value={item.content}
                  className="text-ternary font-semibold ring-2 ring-primary focus:ring-yellow-500 outline-none w-4/5"
                  cols="25"
                  onChange={(e) => onChange(index, e)}
                  rows="3"
                />
                <div className="flex mb-5 justify-end -mt-10">
                  <Button
                    onClick={(e) => handleRemoveField(e, index)}
                    text="-"
                    quartet
                  />

                  <Button
                    type="button"
                    quartet
                    onClick={handleAddLink}
                    text="+"
                  />
                </div>
              </div>
            ))}
            <TextInput
              name="img_id"
              label="Photo Link"
              type="text"
              placeholder="Tap your text here ..."
              add
              marbott
              full
              handleChange={(e) =>
                setPayload({ ...payload, img_id: e.target.value })
              }
            />
            <br />
            <br />

            <Button
              type="submit"
              quartet
              text="Submit"
              onClick={() => {
                fetctSteps();
                // checkData();
                sendResep();
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddResep;
