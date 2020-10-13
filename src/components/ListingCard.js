import React from "react";
import "./ListingCard.css";

export default function ListingCard(props) {
  return (
    <div>
      <h2>
        {props.address.street} {props.address.number}, {props.address.city}
      </h2>
      <p>price:{props.priceEuro}</p>
      <p>m2: {props.m2}</p>
      <p>bedrooms: {props.bedRooms}</p>
    </div>
  );
}
