import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Request() {
  const [form, set_form] = useState("");
  const [listings, set_listing] = useState();
  const [submitted, set_submitted] = useState("");

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");

      const res = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/listings-agents-data/listings"
      );

      console.log("Got back:", res.data);

      set_listing(res.data);
    }

    doSomeDataFetching();
  }, []);

  const handleChange = (event) => {
    set_form({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    set_submitted(
      "Your request has been submitted. We will get back to you asap. Thank you for your interest!"
    );
  };

  return (
    <div>
      <form>
        <div>
          <label>listing address: </label>
          <select name="listing adress" onChange={handleChange} type="text">
            <option>select adress</option>
            {listings &&
              listings.map((listing) => {
                return (
                  <option key={listing.id}>
                    {listing.address.street} {listing.address.number},{" "}
                    {listing.address.city}
                  </option>
                );
              })}
          </select>
        </div>
        <br />
        <div>
          <label>name: </label>
          <input name="name" onChange={handleChange} type="text" />
        </div>
        <br />
        <div>
          <label>email: </label>
          <input name="email" onChange={handleChange} type="text" />
        </div>
        <br />
        <div>
          <label>phone: </label>
          <input name="phone" onChange={handleChange} type="text" />
        </div>
        <br />
        <div>
          <label>date: </label>
          <input name="birth" onChange={handleChange} type="date" />
        </div>
        <br />
        <button onClick={handleSubmit} type="submit">
          submit
        </button>
      </form>
      <h2>{submitted}</h2>
    </div>
  );
}
