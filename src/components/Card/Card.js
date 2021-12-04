import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import BaseURL from "../../api/BaseURL";
import { useAuth } from "../../config/Auth";
import { Link, useHistory } from "react-router-dom";

const Card = ({
  title = "dummy",
  time = "x days ago",
  image,
  user,
  canEdit = false,
  cardId,
  view,
  liked
}) => {
  const { authTokens } = useAuth();
  const history = useHistory();

  const deleteResep = async () => {
    await BaseURL.delete(`/recipe/${cardId}`, {
      headers: { Authorization: `Bearer ${authTokens.access_token}` },
    }).then(() => {
      alert("berhasil dihapus!");
      history.push("/homepage");
    });
  };

  // const likedResep = async () => {
  //   console.log(cardId);
  //   console.log(authTokens.access_token);
  //   await BaseURL.post(`/recipe/${cardId}/like`, {
  //     headers: { Authorization: `Bearer ${authTokens.access_token}` },
  //   });
  // };

  return (
    <div className=" flex flex-col items-center shadow-box rounded-3xl mx-7 px-7 text-gray-800 ">
      <div className="pt-4 pb-2 flex w-full px-7  ">
        <img
          src={`https://avatars.dicebear.com/api/adventurer/:${user}.svg`}
          alt="profile"
          className="mr-3 -ml-6 -z-1 h-10 bg-gray-200 rounded-full"
        />
        <div className="whitespace-nowrap pl-3">
          <Paragraph header>{user}</Paragraph>
          <Paragraph small>{time}</Paragraph>
        </div>
      </div>
      <Link to={`resep/${cardId}`}>
        <div
          className="bg-cover bg-center w-56 h-36 rounded-2xl bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
      </Link>
      <div className="py-4 w-full">
        <Paragraph header normal>
          {title}
        </Paragraph>
        {canEdit ? (
          <div className="mb-3">
            <Paragraph small>edited: {time}</Paragraph>
            <Paragraph small>view: {view}</Paragraph>
          </div>
        ) : (
          <div>
            <Paragraph small>{view} Views</Paragraph>
          </div>
        )}

        {canEdit ? (
          <div className="flex justify-center">
            <Link to={`/editresep/${cardId}`}>
              <Button text="edit" quartet />
            </Link>
            <Button text="delete" onClick={() => deleteResep()} quartet />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Card;
