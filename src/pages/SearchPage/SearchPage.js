import React, { useState } from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import BaseURL from "../../api/BaseURL";
import Card from "../../components/Card/Card";
import { useEffect } from "react";

const SearchPage = () => {
  const [Recipes, setRecipes] = useState([]);
  const [Search, setSearch] = useState("a");

  const fetchRecipes = async () => {
    const res = await BaseURL.get("/recipe?page=1");
    setRecipes(res.data.recipes);
    // console.log(res.data.recipes);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Jumbotron form handleChange={(e) => setSearch(e.target.value)}>Search</Jumbotron>
      <div className="pl-24 pt-5">
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
          {Recipes.filter((name) => name.title.includes(Search)).map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                image={item.img_id}
                time={item.updated_at}
                user={item.user}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
