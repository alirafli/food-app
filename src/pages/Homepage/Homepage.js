import React, { useState, useEffect } from "react";
import Title from "../../components/Title/Title";
import Jumbotron from "../../assets/homepage/jumbotron.png";
import Card from "../../components/Card/Card";
import BaseURL from "../../api/BaseURL";

const Homepage = () => {
  const [Recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    await BaseURL.get(`/recipe?page=1`).then((res) => {
      // console.log(res.data);
      res.status === 200 && setRecipes(res.data.recipes);
    });
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="pl-24 pr-10 pt-5 pb-10">
      <div className="flex items-center">
        <Title main>Good food is the foundation of genuine happiness.</Title>
        <img src={Jumbotron} alt="jumbotron" className="pl-7" />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
        {Recipes.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              image={item.img_id}
              time={item.updated_at}
              user={item.user}
              cardId={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
