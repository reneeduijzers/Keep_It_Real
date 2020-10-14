import React from "react";

import RequestViewingForm from "../components/RequestViewingForm";

export default function scheduleViewingPage() {
  return (
    <div>
      <div className="Text-block">
        <h1>SCHEDULE A VIEWING</h1>
      </div>
      <div className="Listing-block-schedule">
        <RequestViewingForm />
      </div>
      <div className="Footer"></div>
    </div>
  );
}
