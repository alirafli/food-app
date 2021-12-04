import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import BaseURL from "../../api/BaseURL";
import { useAuth } from "../../config/Auth";
import Paragraph from "../../components/Paragraph/Paragraph";
import Frame from "../../assets/profileFrame.png";

const UserProfile = () => {
  const [Recipes, setRecipes] = useState([]);
  const [userData, setUserData] = useState([]);
  const { authTokens } = useAuth();
  const count = Recipes.filter((name) => name.user_id === userData.id).length;

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
    <div className="pl-24 pt-5 w-full pb-20">
      <div className="mb-10 w-full">
        {/* <Paragraph jumbo>{userData.name}</Paragraph>
        <Paragraph h1>{count} posted recipe(s)</Paragraph> */}
        <div
          className="bg-contain bg-center w-full h-screen rounded-2xl bg-no-repeat mb-10"
          style={{ backgroundImage: `url(${Frame})` }}
        >
          <div className="pt-96 pl-32">
            <Paragraph jumbo>{userData.name}</Paragraph>
            <Paragraph h1>{count} posted recipe(s)</Paragraph>
          </div>
          <div className="ml-80">
            <div
              className="bg-cover bg-center w-52 h-52 rounded-2xl bg-no-repeat -mt-80 ml-96 "
              style={{
                backgroundImage: `url("https://avatars.dicebear.com/api/adventurer/:${userData.name}.svg")`,
              }}
            />
          </div>
        </div>
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
              view={item.views}
              cardId={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserProfile;
