import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import BaseURL from "../../api/BaseURL";
import Paragraph from "../../components/Paragraph/Paragraph";

const ResepDetail = (props) => {
  const [Recipes, setRecipes] = useState({});
  const [Steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(false);
  const resepId = props.match.params.id;

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      await BaseURL.get(`/recipe/${resepId}`).then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          setRecipes(res.data.recipe);
          setSteps(res.data.steps);
        }
      });
    };
    fetchRecipes();
    setLoading(false);
  }, [resepId]);

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
            <Paragraph jumbo className="text-ternary mb-5">
              {Recipes.title}
            </Paragraph>
            <Paragraph>{Recipes.description}</Paragraph>
          </div>
          <div className="w-3/4 shadow-2xl p-5 pt-10 rounded-3xl">
            {Steps.map((data, index) => {
              return (
                <div key={index} className=" w-full mb-5">
                  <Paragraph header h1 className="text-ternary">
                    STEP {index + 1}
                  </Paragraph>
                  <Paragraph  normal>{data.description}</Paragraph>
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
