import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/nav-logo.png";
import ActiveLogo from "../../assets/nav-logo-active.png";
import { SidebarData } from "./SidebarData";
import Paragraph from "../Paragraph/Paragraph";
import Profile from "../../assets/sidebar/profile.svg";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";

const Navbar = () => {
  const [Sidebar, setSidebar] = useState(false);
  const [LoginModal, setLoginModal] = useState(false);
  const [RegisterModal, setRegisterModal] = useState(false);

  const showSidebar = () => setSidebar(!Sidebar);

  const openLoginModal = () => {
    setLoginModal((prev) => !prev);
  };

  return (
    <div className="">
      <div
        className={`bg-gray-900  w-full h-full fixed top-0 ${
          Sidebar ? "bg-opacity-60" : "hidden"
        } transition duration-300`}
        onClick={showSidebar}
      />

      <div className={`h-screen w-16 shadow-primary rounded-r-lg fixed`}>
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
            {SidebarData.map((item, index) => {
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
            <li
              className="flex mt-36 items-center pl-3"
              onClick={openLoginModal}
            >
              <Link to="#">
                <img src={Profile} alt="" className="pr-2 transform scale-75" />
              </Link>
            </li>
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
            {SidebarData.map((item, index) => {
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
            <li>
              <Link
                to="#"
                className="flex mt-40 items-center pl-3"
                onClick={openLoginModal}
              >
                <img src={Profile} alt="" className="pr-2 transform scale-75" />
                <Paragraph>Login</Paragraph>
              </Link>
            </li>
          </ul>
        </nav>

        {/* modals */}
        <LoginPage LoginModal={LoginModal} setLoginModal={setLoginModal} setRegisterModal={setRegisterModal} />
        <SignUpPage RegisterModal={RegisterModal} setRegisterModal={setRegisterModal} setLoginModal={setLoginModal} />
      </div>
    </div>
  );
};

export default Navbar;
