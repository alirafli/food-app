import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Paragraph from "../../components/Paragraph/Paragraph";
import * as Icon from "react-icons/cg";
import TextInput from "../../components/TextInput/TextInput";
import BaseUrl from "../../api/BaseURL";
import { useAuth } from "../../config/Auth";
import { useHistory } from "react-router-dom";

const SignUpPage = ({ RegisterModal, setRegisterModal, setLoginModal }) => {
  const [payload, setPayload] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const { setAuthTokens } = useAuth();
  let history = useHistory();

  const handleUserSignup = async (e) => {
    e.preventDefault();
    await BaseUrl.post("/register", {
      name: payload.fullname,
      email: payload.email,
      password: payload.password,
    }).then((res) => {
      // console.log(res);
      // res.status === 201 && setAuthTokens(res.data.data.token);
      setRegisterModal((prev) => !prev);
    });

    await BaseUrl.post("/login", {
      email: payload.email,
      password: payload.password,
    }).then((res) => {
      setAuthTokens(res.data);
      res.status === 200 && history.push("/homepage");
    });
  };

  return (
    <>
      {RegisterModal ? (
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
                  Sign Up
                </Paragraph>
                <Icon.CgClose
                  className="text-gray-400 transform scale-125 cursor-pointer"
                  onClick={() => setRegisterModal((prev) => !prev)}
                />
              </div>
              <div className="border-b border-gray-500 mt-4 mb-3"></div>

              <form className="" onSubmit={handleUserSignup}>
                <TextInput
                  label="Full Name"
                  name="fullName"
                  type="text"
                  full
                  marbott
                  onChange={(e) =>
                    setPayload({ ...payload, fullname: e.target.value })
                  }
                />
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
                  marbott
                  onChange={(e) =>
                    setPayload({ ...payload, password: e.target.value })
                  }
                />

                <Button ternary bold text="Sign Up" fullWidht type="submit" />
                <Paragraph className="mt-3">Have an Account?</Paragraph>
                <Paragraph
                  header
                  className="text-ternary cursor-pointer w-max"
                  onClick={() => {
                    setLoginModal((prev) => !prev);
                    setRegisterModal((prev) => !prev);
                  }}
                >
                  Click here
                </Paragraph>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default SignUpPage;
