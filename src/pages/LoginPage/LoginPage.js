import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Paragraph from "../../components/Paragraph/Paragraph";
import * as Icon from "react-icons/cg";
import TextInput from "../../components/TextInput/TextInput";
import { useAuth } from "../../config/Auth";
import BaseURL from "../../api/BaseURL";
import { useHistory } from "react-router-dom";

const LoginPage = ({ LoginModal, setLoginModal, setRegisterModal }) => {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const { setAuthTokens } = useAuth();
  let history = useHistory();

  const handleUserLogin = async (e) => {
    e.preventDefault();
    const res = await BaseURL.post("/login", {
      email: payload.email,
      password: payload.password,
    });
    if (res.status === 200) {
      setAuthTokens(res.data);
      setLoginModal((prev) => !prev);
      history.push("/homepage");
      // console.log(res.data);
    }
  };
  return (
    <>
      {LoginModal ? (
        <>
          <div
            className="bg-black bg-opacity-25 w-full h-full fixed left-0 top-0 flex mx-auto justify-center items-center"
            data-aos="fade"
          >
            <div
              className="bg-white w-2/6 lg:w-96 md:w-full sm:w-full sm:mx-3 mx-10 h-auto rounded-lg py-5 px-10 "
              data-aos="fade-up"
            >
              <div className="flex items-center justify-between">
                <div className="text-white">a</div>
                <Paragraph header h1>
                  Login
                </Paragraph>
                <Icon.CgClose
                  className="text-gray-400 transform scale-125 cursor-pointer"
                  onClick={() => setLoginModal((prev) => !prev)}
                />
              </div>
              <div className="border-b border-gray-500 mt-4 mb-3"></div>

              <form onSubmit={handleUserLogin}>
                <TextInput
                  label="Email"
                  name="email"
                  type="email"
                  full
                  marbott
                  onChange={(e) =>
                    setPayload({ ...payload, email: e.target.value })
                  }
                />
                <TextInput
                  label="Password"
                  name="password"
                  type="password"
                  full
                  eyeIcon
                  marbott
                  onChange={(e) =>
                    setPayload({ ...payload, password: e.target.value })
                  }
                />

                <Button ternary bold text="Login" fullWidht />
                <Paragraph className="mt-3">
                  Don't have an account yet?
                </Paragraph>
                <Paragraph
                  header
                  className="text-ternary cursor-pointer w-max"
                  onClick={() => {
                    setLoginModal((prev) => !prev);
                    setRegisterModal((prev) => !prev);
                  }}
                >
                  Sign Up
                </Paragraph>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default LoginPage;
