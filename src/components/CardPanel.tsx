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

  const [ratings, dispatch] = useReducer(ratingReducer, initialRatings);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Cards */}
      <div className="flex flex-nowrap justify-center w-full">
        <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg" description="Blooming flowers pavilion." dispatch={dispatch} />
        <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg" description="Creative space for ideas." dispatch={dispatch} />
        <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg" description="A grand table for events." dispatch={dispatch} />
      </div>

      {/* Rating Display */}
      <RatingDisplay ratings={ratings} dispatch={dispatch} />
    </div>
  );
}
