import React, { useEffect, useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import BaseURL from "../../api/BaseURL";
import { useAuth } from "../../config/Auth";
import Button from "../../components/Button/Button";

const EditProfile = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [IsSetPassword, setIsSetPassword] = useState(false);
  const [payload, setPayload] = useState({
    username: `${userData.name}`,
    email: `${userData.email}`,
    password: undefined,
  });
  const { authTokens } = useAuth();

  const editProfile = () => {
    BaseURL.patch(
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
      // console.log(authTokens.access_token);
      alert("Berhasil mengubah data");
      setUserData(res.data);
    });
  };

  const fetchUserData = () => {
    BaseURL.get("/me", {
      headers: { Authorization: `Bearer ${authTokens.access_token}` },
    }).then((res) => {
      setUserData(res.data);
      console.log(res.data);
      setPayload({
        ...payload,
        username: res.data.name,
        email: res.data.email,
      });
      // console.log(authTokens.access_token);
    });
  };

  const checkData = () => {
    console.log(payload);
  };

  useEffect(() => {
    setisLoading(false);
    authTokens && fetchUserData();
    setisLoading(true);
  }, [authTokens]);
  return (
    <>
      {isLoading ? (
        <div className="pl-24 pt-5">
          <TextInput
            label="Username"
            name="username"
            type="text"
            full
            marbott
            value={`${payload.username}`}
            onChange={(e) =>
              setPayload({ ...payload, username: e.target.value })
            }
          />
          <TextInput
            label="Email"
            name="email"
            type="email"
            full
            marbott
            value={`${payload.email}`}
            onChange={(e) => setPayload({ ...payload, email: e.target.value })}
          />
          {IsSetPassword ? (
            <TextInput
              label="Password baru"
              name="password"
              type="password"
              eyeIcon
              full
              marbott
              onChange={(e) =>
                IsSetPassword
                  ? setPayload({ ...payload, password: e.target.value })
                  : setPayload({ ...payload, password: undefined })
              }
            />
          ) : (
            ""
          )}
          <div className="mb-5">
            <Button onClick={() => editProfile()} text="Save" ternary />
          </div>
          <h1 onClick={() => console.log(payload)}>test</h1>
          <Button
            text={`${IsSetPassword ? "tidak jadi mengubah password" : "Ingin mengubah password?"}`}
            onClick={() => setIsSetPassword((prev) => !prev)}
          />
        </div>
      ) : (
        <h1>waitttttttttttt</h1>
      )}
    </>
  );
};

export default EditProfile;
