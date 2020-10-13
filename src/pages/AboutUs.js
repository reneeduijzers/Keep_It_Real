import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Title from "../components/Title";
import { Link } from "react-router-dom";

export default function AboutUsPage() {
  const [agents, set_agents] = useState([]);
  const [language, set_language] = useState({});
  const route_parameters = useParams();

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");

      const res = await axios.get("http://localhost:4000/Aboutus");

      console.log("Got back:", res.data);

      set_agents(res.data);
    }

    set_language(route_parameters.agentLanguage);

    doSomeDataFetching();
  }, [route_parameters.agentLanguage]);

  const filteredAgents = agents.filter((agent) => {
    if (agent.languages.includes(route_parameters.agentLanguage)) {
      return true;
    } else {
      return false;
    }
  });

  function changeTextButtonListings() {
    var textButtonListings;
    if (language === "Dutch") {
      textButtonListings = "Bekijk Woningen";
    } else if (language === "German") {
      textButtonListings = "Immobilienangebote";
    } else if (language === "Spanish") {
      textButtonListings = "Venta viviendas";
    } else {
      textButtonListings = "See listings";
    }
    return textButtonListings;
  }

  function changeTextButtonScheduleViewing() {
    var textButtonScheduleViewing;
    if (language === "Dutch") {
      textButtonScheduleViewing = "Bezichtiging aanvragen";
    } else if (language === "German") {
      textButtonScheduleViewing = "Exposé anforden";
    } else if (language === "Spanish") {
      textButtonScheduleViewing = "Programe una cita";
    } else {
      textButtonScheduleViewing = "Schedule a viewing";
    }
    return textButtonScheduleViewing;
  }

  const textButtonListings = changeTextButtonListings(language);

  const textButtonScheduleViewing = changeTextButtonScheduleViewing(language);

  return (
    <div>
      <Title content="ABOUT US" />
      {filteredAgents.length > 0
        ? filteredAgents.map((agent) => {
            return (
              <ul key={agent.id}>
                <h2>
                  {agent.firstName} {agent.lastName}
                </h2>
                <p>
                  <img src={agent.imageUrl} alt="agent" />
                </p>
                <p>{agent.motto}</p>
                <p>{agent.email}</p>
              </ul>
            );
          })
        : agents.map((agent) => {
            return (
              <ul key={agent.id}>
                <h2>
                  {agent.firstName} {agent.lastName}
                </h2>
                <p>
                  <img src={agent.imageUrl} alt="agent" />
                </p>
                <p>{agent.motto}</p>
                <p>{agent.email}</p>
              </ul>
            );
          })}
      <button className="Button">
        <Link className="ButtonLink" to="/listings">
          {textButtonListings}
        </Link>
      </button>
      <button className="Button">
        <Link className="ButtonLink" to="/scheduleviewing">
          {textButtonScheduleViewing}
        </Link>
      </button>
    </div>
  );
}
