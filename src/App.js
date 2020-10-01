import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import ScheduleViewing from "./pages/ScheduleViewing";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/NavBar";
import "./MyOwnApp.css";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/aboutus/:agentLanguage?" component={AboutUs} />
        <Route path="/scheduleviewing" component={ScheduleViewing} />
        <Route path="/listings" component={Listings} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
