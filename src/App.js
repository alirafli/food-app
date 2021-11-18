import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Aos from "aos";
import "aos/dist/aos.css";
// import MainPage from "./pages/MainPage/MainPage";
import Homepage from "./pages/Homepage/Homepage";
import Maintenance from "./pages/Maintenance/Maintenance";
import SearchPage from "./pages/SearchPage/SearchPage";
import Navbar from "./components/Navbar/Navbar";
import UserProfile from "./pages/UserProfile/UserProfile";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route
          path="/homepage"
          element={
            <div className="flex">
              <Navbar />
              <Homepage />
            </div>
          }
        />
        <Route
          path="/searchpage"
          element={
            <div className="flex">
              <Navbar />
              <SearchPage />
            </div>
          }
        />
        <Route
          path="/maintenance"
          element={
            <div className="flex">
              <Navbar />
              <Maintenance />
            </div>
          }
        />
        <Route
          path="/userprofile"
          element={
            <div className="flex">
              <Navbar />
              <UserProfile />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
