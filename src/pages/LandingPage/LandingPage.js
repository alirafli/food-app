import React, {useState} from "react";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import Jumbotron from "../../assets/jumbotron-landingpage.png";
import Logo from "../../assets/mini-logo.png";
import LoginPage from "../LoginPage/LoginPage";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [LoginModal, setLoginModal] = useState(false);

  const openLoginModal = () => {
    setLoginModal((prev) => !prev);
  };
  
  return (
    <div className="px-3">
      <div className="box bg-primary w-3/12 h-full absolute -z-1 right-0 md:w-full md:h-72 sm:w-full sm:h-48"></div>
      <div className="flex items-center justify-between">
        <img src={Logo} alt="logo" />
        <div>
          <Button secondary text="Login" bold onClick={openLoginModal} />
        </div>
      </div>

      <div className="flex px-5 pb-10 justify-around items-center md:flex-col-reverse sm:flex-col-reverse sm:-mt-10">
        <div className="">
          <Title main>
            Make your <br /> culinary dreams <br /> come true.
          </Title>
          <div className="mt-10">
            <Link to="/homepage">
              <Button arrow bold text="Get Started" />
            </Link>
          </div>
        </div>
        <div className="-mt-5 sm:mt-0 relative overflow-hidden sm:transform md:transform md:scale-75 sm:scale-75">
          <img src={Jumbotron} alt="jumbotron" data-aos="fade-up" />
        </div>
      </div>
      {/* modals */}
      <LoginPage
          LoginModal={LoginModal}
          setLoginModal={setLoginModal}
         />
    </div>
  );
};

export default LandingPage;
