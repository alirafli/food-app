import React, { useState, useEffect } from "react";
import Title from "../../components/Title/Title";
import Jumbotron from "../../assets/homepage/jumbotron.png";
import Card from "../../components/Card/Card";
import BaseURL from "../../api/BaseURL";
import Paragraph from "../../components/Paragraph/Paragraph";
import Button from "../../components/Button/Button";

const Homepage = () => {
  const [Recipes, setRecipes] = useState([]);
  const [Pages, setPages] = useState(0);
  const [Page, setPage] = useState(1);
  const loop = [];

  const printPage = () => {
    for (let i = 1; i <= Pages; i++) {
      loop.push(i);
    }
  };

  const fetchRecipes = async () => {
    await BaseURL.get(`/recipe?page=${Page}`).then((res) => {
      console.log(res.data);
      res.status === 200 && setRecipes(res.data.recipes);
      res.status === 200 && setPages(res.data.pagination.totalPage);
    });
  };

  useEffect(() => {
    fetchRecipes();
  }, [Page]);

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
      <div className="flex mt-10 justify-center">
        {printPage()}
        {loop.map((data) => {
          return (
            <Button text={`${data}`} onClick={() => setPage(data)} quartet />
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
