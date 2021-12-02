import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import BaseURL from "../../api/BaseURL";
import { useAuth } from "../../config/Auth";
import Paragraph from "../../components/Paragraph/Paragraph";

const UserProfile = () => {
  const [Recipes, setRecipes] = useState([]);
  const [userData, setUserData] = useState([]);
  const { authTokens } = useAuth();

  const fetchRecipes = async () => {
    const res = await BaseURL.get("/recipe");
    setRecipes(res.data.recipes);
    // console.log(res.data.recipes);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      await BaseURL.get("/me", {
        headers: { Authorization: `Bearer ${authTokens.access_token}` },
      }).then((res) => {
        setUserData(res.data);
        // console.log(res.data);
      });
    };
    fetchUserData();
    fetchRecipes();
  }, [authTokens]);
  return (
    <div className="pl-24 pt-5">
      <div className="my-10">
        <Paragraph jumbo>{userData.name}</Paragraph>
        <Paragraph h1>2 posted recipe(s)</Paragraph>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
        {Recipes.filter((name) => name.user_id === userData.id).map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              image={item.img_id}
              time={item.updated_at}
              user={item.user}
              canEdit
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserProfile;
