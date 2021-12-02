import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/nav-logo.png";
import ActiveLogo from "../../assets/nav-logo-active.png";
import { SidebarData } from "./SidebarData";
import Paragraph from "../Paragraph/Paragraph";
import Profile from "../../assets/sidebar/profile.svg";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import { useAuth } from "../../config/Auth";
import BaseURL from "../../api/BaseURL";
import Button from "../Button/Button";

const Navbar = ({ isLoggedIn }) => {
  const [Sidebar, setSidebar] = useState(false);
  const [LoginModal, setLoginModal] = useState(false);
  const [RegisterModal, setRegisterModal] = useState(false);
  const [userData, setUserData] = useState([]);
  const { authTokens } = useAuth();
  const { setAuthTokens } = useAuth();

  const showSidebar = () => setSidebar(!Sidebar);

  const openLoginModal = () => {
    setLoginModal((prev) => !prev);
  };

  const Logout = () => {
    setAuthTokens();
    localStorage.clear();
  };

  useEffect(() => {
    const fetchUserData = () => {
      BaseURL.get("/me", {
        headers: { Authorization: `Bearer ${authTokens.access_token}` },
      }).then((res) => {
        // console.log(authTokens.access_token);
        setUserData(res.data);
        setLoginModal(false);
        setRegisterModal(false);
      });
    };
    authTokens && fetchUserData();
  }, [authTokens]);

  return (
    <div className="relative z-1">
      <div
        className={`bg-gray-900  w-full h-full fixed top-0 ${
          Sidebar ? "bg-opacity-60" : "hidden"
        } transition duration-300`}
        onClick={showSidebar}
      />

      <div
        className={`h-screen w-16 shadow-primary rounded-r-lg fixed bg-white`}
      >
        <div className={`h-screen  transform duration-300`}>
          <ul className="flex flex-col align-middle justify-center">
            <li>
              <img
                src={Logo}
                alt="logo"
                className="object-none mb-16 transform scale-90 cursor-pointer"
                onClick={showSidebar}
              />
            </li>
            {SidebarData.filter((item) =>
              isLoggedIn ? item.isActive || !item.isActive : item.isActive
            ).map((item, index) => {
              return (
                <NavLink
                  to={item.path}
                  key={index}
                  className="mb-8 transform scale-75 flex justify-center hover:bg-primary rounded-lg py-2 hover:text-white transition-colors duration-300"
                  activeClassName="bg-primary text-white"
                >
                  <div>
                    <div className="transform scale-150 ">{item.icon}</div>
                  </div>
                </NavLink>
              );
            })}
            {isLoggedIn ? (
              <li className="mt-32">
                <Link to="/userprofile">
                  <img
                    src={`https://avatars.dicebear.com/api/adventurer/:${userData.name}.svg`}
                    alt="profile"
                    className="transform scale-50 bg-gray-300 rounded-full"
                  />
                </Link>
              </li>
            ) : (
              <li
                className="flex mt-36 items-center pl-3"
                onClick={openLoginModal}
              >
                <Link to="#">
                  <img
                    src={Profile}
                    alt=""
                    className="pr-2 transform scale-75"
                  />
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* navigasi */}
        <nav
          className={`${
            Sidebar ? "left-0 duration-500" : "-left-full duration-700"
          } bg-white fixed top-0 transform h-screen rounded-r-lg`}
          onClick={showSidebar}
        >
          <ul onClick={showSidebar}>
            <li>
              <Link to="/homepage">
                <img
                  src={ActiveLogo}
                  alt="active logo"
                  className="object-none mb-16"
                />
              </Link>
            </li>
            {SidebarData.filter((item) =>
              isLoggedIn ? item.isActive || !item.isActive : item.isActive
            ).map((item, index) => {
              return (
                <li key={index} className="">
                  <NavLink
                    to={item.path}
                    className="flex mb-8 ml-3 items-center hover:bg-primary w-48 rounded-lg py-2 hover:text-white transition-colors duration-300"
                    activeClassName="bg-primary text-white"
                  >
                    <div className="pr-2 pl-3 transform scale-125">
                      {item.icon}
                    </div>
                    <Paragraph>{item.title}</Paragraph>
                  </NavLink>
                </li>
              );
            })}
            {isLoggedIn ? (
              <>
                <li>
                  <Link
                    to="/userprofile"
                    className="flex items-center mt-40 w-max"
                  >
                    <img
                      src={`https://avatars.dicebear.com/api/adventurer/:${userData.name}.svg`}
                      alt="profile"
                      className="mr-4 transform scale-75 bg-gray-300 rounded-full w-12 h-12"
                    />
                    <Paragraph className="whitespace-nowrap">
                      {userData.name}
                    </Paragraph>
                  </Link>
                </li>
                <li className="flex justify-center">
                  <Link onClick={Logout} to="/">
                    <Button text="Log Out" />
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="#"
                  className="flex mt-40 items-center pl-3"
                  onClick={openLoginModal}
                >
                  <img
                    src={Profile}
                    alt=""
                    className="pr-2 transform scale-75"
                  />
                  <Paragraph>Login</Paragraph>
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {/* modals */}
        <LoginPage
          LoginModal={LoginModal}
          setLoginModal={setLoginModal}
          setRegisterModal={setRegisterModal}
        />
        <SignUpPage
          RegisterModal={RegisterModal}
          setRegisterModal={setRegisterModal}
          setLoginModal={setLoginModal}
        />
      </div>
    </div>
  );
};

export default Navbar;
