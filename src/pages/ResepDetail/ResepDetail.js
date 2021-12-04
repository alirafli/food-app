import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import BaseURL from "../../api/BaseURL";
import Paragraph from "../../components/Paragraph/Paragraph";
import * as AiIcons from "react-icons/ai";
import { useAuth } from "../../config/Auth";

const ResepDetail = (props) => {
  const [Recipes, setRecipes] = useState({});
  const [Steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isClicked, setisClicked] = useState(false);
  const resepId = props.match.params.id;
  const { authTokens } = useAuth();

  const likedResep = () => {
    BaseURL.get(`/recipe/${resepId}/like`, {
      headers: { Authorization: `Bearer ${authTokens.access_token}` },
    }).then(alert("berhasil di like!"));
  };

  const unlikedResep = () => {
    BaseURL.delete(`/recipe/${resepId}/like`, {
      headers: { Authorization: `Bearer ${authTokens.access_token}` },
    }).then(alert("berhasil di unlike!"));
  };

  const condition = () => {
    if (!isClicked) {
      likedResep();
    } else {
      unlikedResep();
    }
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      await BaseURL.get(`/recipe/${resepId}`, {
        headers: { Authorization: `Bearer ${authTokens.access_token}` },
      }).then((res) => {
        // console.log(res.data);
        if (res.status === 200) {
          setRecipes(res.data.recipe);
          setSteps(res.data.steps);
          setisClicked(res.data.liked);
        }
      });
    };

    fetchRecipes();
    setLoading(false);
  }, [resepId, authTokens.access_token]);

  return (
    <div className="pl-24 pt-5 flex items-center justify-center flex-col w-full pr-24 mb-20">
      {loading ? (
        <h1>WAIT</h1>
      ) : (
        <>
          <div className="flex justify-center flex-col items-center">
            <div
              className="bg-cover bg-center w-96 h-72 rounded-2xl bg-no-repeat mb-10"
              style={{ backgroundImage: `url(${Recipes.img_id})` }}
            />

            <div className="flex flex-col items-center justify-center w-full ">
              <div
                className=" cursor-pointer"
                onClick={() => {
                  setisClicked((prev) => !prev);
                  condition();
                }}
              >
                {!isClicked ? (
                  <AiIcons.AiOutlineHeart />
                ) : (
                  <AiIcons.AiFillHeart />
                )}
              </div>
              <Paragraph jumbo className="text-ternary mb-5 w-3/4 text-center mx-auto ">
                {Recipes.title}
              </Paragraph>
            </div>
            <div className="p-5 my-10 w-3/4 bg-white shadow-2xl rounded-3xl">
            <Paragraph className="text-justify">{Recipes.description}</Paragraph>
            </div>
          </div>
          <div className="w-3/4 shadow-2xl p-5 pt-10 rounded-3xl">
            {Steps.map((data, index) => {
              return (
                <div key={index} className=" w-full mb-5">
                  <Paragraph header h1 className="text-ternary">
                    STEP {index + 1}
                  </Paragraph>
                  <Paragraph normal>{data.description}</Paragraph>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default withRouter(ResepDetail);
