import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <ul className="NavBar">
        <NavLink className="NavBarLink" to="/" exact={true}>
          Home{" "}
        </NavLink>
        |
        <NavLink className="NavBarLink" to="/listings">
          Listings
        </NavLink>
        |
        <NavLink className="NavBarLink" to="/Scheduleviewing">
          Schedule viewing
        </NavLink>
        |
        <NavLink className="NavBarLink" to="/Aboutus">
          About us
        </NavLink>
      </ul>
    </div>
  );
}
