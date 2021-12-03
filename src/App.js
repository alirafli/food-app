import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Aos from "aos";
import { AuthContext } from "./config/Auth";
import "aos/dist/aos.css";
import Homepage from "./pages/Homepage/Homepage";
import Maintenance from "./pages/Maintenance/Maintenance";
import SearchPage from "./pages/SearchPage/SearchPage";
import Navbar from "./components/Navbar/Navbar";
import UserProfile from "./pages/UserProfile/UserProfile";
import LikePage from "./pages/LikePage/LikePage";
import AddResep from "./pages/AddResep/AddResep";
import EditProfile from "./pages/EditProfile/EditProfile";
import EditResep from "./pages/EditResep/EditResep"
import ResepDetail from "./pages/ResepDetail/ResepDetail";

const App = () => {
  const existingToken = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingToken);
  // console.log(existingToken)
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/homepage">
              <div className="flex">
                <Navbar isLoggedIn={!authTokens ? false : true} />
                <Homepage />
              </div>
            </Route>
            <Route path="/searchpage">
              <div className="flex">
                <Navbar isLoggedIn={!authTokens ? false : true} />
                <SearchPage />
              </div>
            </Route>
            <Route path="/maintenance">
              <div className="flex">
                <Navbar isLoggedIn={!authTokens ? false : true} />
                <Maintenance />
              </div>
            </Route>
            <Route path="/editResep/:id">
              <div className="flex">
                <Navbar isLoggedIn={!authTokens ? false : true} />
                <EditResep />
              </div>
            </Route>
            <Route path="/userprofile">
              <div className="flex">
                <Navbar isLoggedIn={!authTokens ? false : true} />
                <UserProfile />
              </div>
            </Route>
            <Route path="/editProfile">
              <div className="flex">
                <Navbar isLoggedIn={!authTokens ? false : true} />
                <EditProfile />
              </div>
            </Route>
            <Route path="/resep/:id">
              <div className="flex">
                <Navbar isLoggedIn={!authTokens ? false : true} />
                <ResepDetail />
              </div>
            </Route>
            <Route path="/addresep">
              <div className="flex">
                <Navbar isLoggedIn={!authTokens ? false : true} />
                <AddResep />
              </div>
            </Route>
            <Route path="/liked">
              <div className="flex">
                <Navbar isLoggedIn={!authTokens ? false : true} />
                <LikePage />
              </div>
            </Route>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
