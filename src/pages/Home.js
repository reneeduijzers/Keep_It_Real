import React, { useState } from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import "./Home.css";
import VerticalForest from "./VerticalForest.jpg";

export default function HomePage() {
  const [language, set_language] = useState("English");

  const url = `/aboutus/${language}`;

  function changeTextButtonListings() {
    var textButtonListings;
    if (language === "Dutch") {
      textButtonListings = "Bekijk Woningen";
    } else if (language === "German") {
      textButtonListings = "Immobilienangebote";
    } else if (language === "Spanish") {
      textButtonListings = "Venta propiedades";
    } else {
      textButtonListings = "See listings";
    }
    return textButtonListings;
  }

  function changeTextButtonAboutUs() {
    var textButtonAboutUs;
    if (language === "Dutch") {
      textButtonAboutUs = "Over ons";
    } else if (language === "German") {
      textButtonAboutUs = "Über uns";
    } else if (language === "Spanish") {
      textButtonAboutUs = "Sobre nosotras";
    } else {
      textButtonAboutUs = "About us";
    }
    return textButtonAboutUs;
  }

  const textButtonListings = changeTextButtonListings(language);

  const textButtonAboutUs = changeTextButtonAboutUs(language);

  return (
    <div>
      <Title content="WELCOME TO REAL ESTATE" />
      <div>
        <img
          className="VerticalForest"
          src={VerticalForest}
          alt="VerticalForest"
        />
      </div>
      <div>
        <div classname="Side-center">
          <button className="Button">
            <Link className="ButtonLink" to="/listings">
              {textButtonListings}
            </Link>
          </button>
          <button className="Button">
            <Link className="ButtonLink" to={url}>
              {textButtonAboutUs}
            </Link>
          </button>
          <select
            className="Button"
            onChange={(event) => set_language(event.target.value)}
          >
            <option value="English">English</option>
            <option value="Dutch">Dutch</option>
            <option value="German">German</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
      </div>
    </div>
  );
}
