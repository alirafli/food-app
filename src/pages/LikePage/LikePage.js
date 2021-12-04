import React, { useState, useEffect } from "react";
import BaseURL from "../../api/BaseURL";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import { useAuth } from "../../config/Auth";

const LikePage = () => {
  const [Recipes, setRecipes] = useState([]);
  const [Pages, setPages] = useState(0);
  const [Page, setPage] = useState(1);
  const loop = [];
  const { authTokens } = useAuth();

  const printPage = () => {
    for (let i = 1; i <= Pages; i++) {
      loop.push(i);
    }
  };

  useEffect(() => {
    const fetchLikeRecipes = async () => {
      await BaseURL.get("/like", {
        headers: { Authorization: `Bearer ${authTokens.access_token}` },
      }).then((res) => {
        // console.log(res.data);
        res.status === 200 && setRecipes(res.data.recipes);
        res.status === 200 && setPages(res.data.pagination.totalPage);
      });
    };
    fetchLikeRecipes();
  }, [Page, authTokens.access_token]);

  return (
    <div className="flex flex-col w-full">
      <Jumbotron>Liked Page</Jumbotron>
      <div className="pl-24 pt-5">
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
                view={item.views}
                liked
              />
            );
          })}
        </div>
        <div className="flex mt-10 justify-center">
          {printPage()}
          {loop.map((data, index) => {
            return (
              <Button
                key={index}
                text={`${data}`}
                onClick={() => setPage(data)}
                quartet
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LikePage;
