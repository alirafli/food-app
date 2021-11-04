import React from "react";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import Jumbotron from "../../assets/jumbotron-landingpage.png";
import Logo from "../../assets/mini-logo.png";

const LandingPage = () => {
  return (
    <div>
      <div className="box bg-primary w-2/6 h-full absolute -z-1 right-0"></div>
      <div className="flex items-center justify-between">
        <img src={Logo} alt="logo" />
        <div>
          <Button secondary text="Login" bold />
        </div>
      </div>

      <div className="flex px-5 justify-around items-center">
        <div>
          <Title main>
            Make your <br /> culinary dreams <br /> come true.
          </Title>
          <div className="mt-10">
            <Button arrow bold text="Get Started" />
          </div>
        </div>
        <div className="-mt-5 relative overflow-hidden">
          <img src={Jumbotron} alt="jumbotron" data-aos="fade-up" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
