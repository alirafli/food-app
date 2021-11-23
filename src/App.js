import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Aos from "aos";
import "aos/dist/aos.css";
import Homepage from "./pages/Homepage/Homepage";
import Maintenance from "./pages/Maintenance/Maintenance";
import SearchPage from "./pages/SearchPage/SearchPage";
import Navbar from "./components/Navbar/Navbar";
import UserProfile from "./pages/UserProfile/UserProfile";
import LikePage from "./pages/LikePage/LikePage";
import AddResep from "./pages/AddResep/AddResep";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/homepage">
          <div className="flex">
            <Navbar />
            <Homepage />
          </div>
        </Route>
        <Route path="/searchpage">
          <div className="flex">
            <Navbar />
            <SearchPage />
          </div>
        </Route>
        <Route path="/maintenance">
          <div className="flex">
            <Navbar />
            <Maintenance />
          </div>
        </Route>
        <Route path="/userprofile">
          <div className="flex">
            <Navbar />
            <UserProfile />
          </div>
        </Route>
        <Route path="/addresep">
          <div className="flex">
            <Navbar />
            <AddResep />
          </div>
        </Route>
        <Route path="/liked">
          <div className="flex">
            <Navbar />
            <LikePage />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
