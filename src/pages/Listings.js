import React, { useState, useEffect } from "react";

import ListingCard from "../components/ListingCard";
import axios from "axios";

export default function ListingDatabase() {
  const [listings, set_listings] = useState([]);
  const [filter_byPrice, set_filter_byPrice] = useState("");
  const [filter_bySpace, set_filter_bySpace] = useState("");

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");

      const res = await axios.get(
        "https://keep-it-real.herokuapp.com/listings"
      );

      console.log("Got back:", res.data);

      set_listings(res.data);
    }

    doSomeDataFetching();
  }, []);

  const sortedListings = listings.sort(
    (listing_a, listing_b) => listing_a.priceEuro - listing_b.priceEuro
  );

  function filterBySpaceAndPrice(listing) {
    if (listing.m2 > filter_bySpace && listing.priceEuro < filter_byPrice) {
      return true;
    } else {
      return false;
    }
  }

  const filteredListings = [...sortedListings].filter(filterBySpaceAndPrice);

  return (
    <div>
      <div className="Text-block">
        <h1>AVAILABLE PROPERTIES</h1>
      </div>

      <div className="Outer-container">
        <div className="Inner-container">
          <label>budget: </label>
          <input
            type="range"
            min="161000"
            max="886000"
            defaultValue="886000"
            onChange={(event) => set_filter_byPrice(event.target.value)}
          />
          <label>floor space: </label>
          <input
            type="range"
            min="44"
            max="103"
            defaultValue="41"
            onChange={(event) => set_filter_bySpace(event.target.value)}
          />
        </div>
      </div>
      <div className="Listing-block">
        {filteredListings.length > 0
          ? filteredListings.map((listing) => {
              return <ListingCard key={listing.id} {...listing} />;
            })
          : sortedListings.map((listing) => {
              return <ListingCard key={listing.id} {...listing} />;
            })}
      </div>
      <div className="Footer"></div>
    </div>
  );
}
