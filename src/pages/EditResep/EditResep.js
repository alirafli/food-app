import React, { useState, useEffect } from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import BaseURL from "../../api/BaseURL";
import { useHistory } from "react-router-dom";
import TextInput from "../../components/TextInput/TextInput";
import { useAuth } from "../../config/Auth";
import Paragraph from "../../components/Paragraph/Paragraph";
import Button from "../../components/Button/Button";
import { withRouter } from "react-router-dom";

const AddResep = (props) => {
  const [PreSteps, setPreSteps] = useState([]);
  const [PrePayload, setPrePayload] = useState({});
  const [Steps, setSteps] = useState([]);
  const [payload, setPayload] = useState({
    title: "",
    img_id:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const resepId = props.match.params.id;
  const history = useHistory();
  const StepsData = [];

  const fetctSteps = () => {
    Steps.map((data) => {
      return StepsData.push(data.content);
    });
  };

  const checkData = () => {
    console.log(payload);
    console.log(StepsData);
    console.log(authTokens.access_token);
  };

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
    BaseURL.patch(
      `/recipe/${resepId}`,
      {
        title: payload.title,
        img_id: payload.img_id,
        description: payload.description,
        steps: StepsData,
      },
      {
        headers: { Authorization: `Bearer ${authTokens.access_token}` },
      }
    ).then(() => {
      alert("data berhasil diubah!");
      history.push("/homepage");
    });
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      await BaseURL.get(`/recipe/${resepId}`).then((res) => {
        // console.log(res.data.recipe);
        if (res.status === 200) {
          setPrePayload(res.data.recipe);
          setPreSteps(res.data.steps);
        }
      });
    };
    fetchRecipes();
    setLoading(false);
  }, [resepId]);

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
    <>
      $
      {loading ? (
        <h1>weittt</h1>
      ) : (
        <div className="flex flex-col w-full">
          <Jumbotron text="Upload your recipe journey and let people know your recipe!">
            Edit Post
          </Jumbotron>
          <div className="pl-24 pr-14 pt-5 w-full">
            <Paragraph header className="text-ternary text-3xl">
              Edit your recipe here!
            </Paragraph>
            <div className="w-full p-6 shadow-2xl rounded-3xl mb-10">
              {/* {JSON.stringify(Form)} */}
              <form action="">
                <TextInput
                  name="title"
                  label="Title"
                  type="text"
                  placeholder={`${PrePayload.title}`}
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
                  placeholder={`${PrePayload.description}`}
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
                      placeholder={`${
                        PreSteps[index] === undefined
                          ? "type here..."
                          : `${PreSteps[index].description}`
                      }`}
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
              <h1
                onClick={() => {
                  fetctSteps();
                  checkData();
                }}
              >
                check data
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(AddResep);
