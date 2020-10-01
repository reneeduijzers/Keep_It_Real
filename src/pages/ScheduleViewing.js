import React from "react";
import Title from "../components/Title";
import RequestViewingForm from "../components/RequestViewingForm";

export default function scheduleViewingPage() {
  return (
    <div>
      <Title content="SCHEDULE VIEWING" />
      <RequestViewingForm />
    </div>
  );
}
