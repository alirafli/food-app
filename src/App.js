import React,{useEffect} from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import Aos from "aos";
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000});
  }, [])
  return (
    <div className="px-3">
      <LandingPage />
    </div>
  );
};

export default App;
