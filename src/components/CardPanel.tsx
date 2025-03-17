"use client";
import { useReducer } from "react";
import Card from "./Card";
import RatingDisplay from "./RatingDisplay";


// Reducer function to manage ratings
function ratingReducer(state: Map<string, number>, action: { type: string; venue: string; rating?: number }) {
  const newState = new Map(state);
  if (action.type === "SET_RATING" && action.rating !== undefined) {
    newState.set(action.venue, action.rating);
  } else if (action.type === "REMOVE_RATING") {
    newState.delete(action.venue);
  }
  return newState;
}

export default function CardPanel() {
  const initialRatings = new Map([
    ["The Bloom Pavilion", 0],
    ["Spark Space", 0],
    ["The Grand Table", 0],
  ]);

  const venueRepo = [
    {vid:"001", venueName:"The Bloom Pavilion", imgSrc:"/img/bloom.jpg", description:"Blooming flowers pavilion."},
    {vid:"002", venueName:"Spark Space", imgSrc:"/img/sparkspace.jpg", description:"Creative space for ideas."},
    {vid:"003", venueName:"The Grand Table", imgSrc:"/img/grandtable.jpg", description:"A grand table for events."}
  ]

  const [ratings, dispatch] = useReducer(ratingReducer, initialRatings);

  return (
    <div className="flex flex-col items-center w-full h-[90%]">
      <div className="flex flex-nowrap justify-center w-full">
      {
        venueRepo.map((venue)=>(
          <Card
            vid={venue.vid}
            venueName={venue.venueName}
            imgSrc={venue.imgSrc}
            description={venue.description}
            dispatch={dispatch}
          />
        ))
      }
      </div>

      {/* Rating Display */}
      <RatingDisplay ratings={ratings} dispatch={dispatch} />
    </div>
  );
}
