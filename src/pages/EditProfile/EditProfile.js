import React, { useEffect, useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import BaseURL from "../../api/BaseURL";
import { useAuth } from "../../config/Auth";
import Paragraph from "../../components/Paragraph/Paragraph";
import Button from "../../components/Button/Button";

const EditProfile = () => {
  const [userData, setUserData] = useState([]);
  const [payload, setPayload] = useState({
    username: `${userData.name}`,
    email: `${userData.email}`,
    password: `${userData.password}`,
  });
  const { authTokens } = useAuth();

  const editProfile = async () => {
    await BaseURL.patch(
      "/me",
      {
        name: payload.username,
        email: payload.email,
        password: payload.password,
      },
      {
        headers: { Authorization: `Bearer ${authTokens.access_token}` },
      }
    ).then((res) => {
      console.log(authTokens.access_token);
      alert("Berhasil mengubah data")
      setUserData(res.data);
    });
  };

  useEffect(() => {
    const fetchUserData = () => {
      BaseURL.get("/me", {
        headers: { Authorization: `Bearer ${authTokens.access_token}` },
      }).then((res) => {
        setUserData(res.data);
        // console.log(authTokens.access_token);
      });
    };
    authTokens && fetchUserData();
  }, [authTokens]);
  return (
    <div className="pl-24 pt-5">
      <Paragraph h1>Old Data</Paragraph>
      <Paragraph>{userData.name}</Paragraph>
      <Paragraph>{userData.email}</Paragraph>
      <br />

      <TextInput
        label="Username"
        name="username"
        type="text"
        full
        marbott
        onChange={(e) => setPayload({ ...payload, username: e.target.value })}
      />
      <TextInput
        label="Email"
        name="email"
        type="email"
        full
        marbott
        onChange={(e) => setPayload({ ...payload, email: e.target.value })}
      />
      <Button onClick={() => editProfile()} text="Save" ternary/>
    </div>
  );
};

export default EditProfile;
