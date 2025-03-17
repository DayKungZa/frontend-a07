"use client";
import Rating from "@mui/material/Rating";

interface RatingProps {
  venueName: string;
  dispatch: React.Dispatch<{ type: string; venue: string; rating?: number }>;
}

export default function RatingComponent({ venueName, dispatch }: RatingProps) {
  return (
    <div data-testid={`${venueName} Rating`} className="text-black">
      <Rating
        name={venueName}
        onClick={(e)=>e.stopPropagation()}
        onChange={(_, newValue) => {
          if (newValue) {
            dispatch({ type: "SET_RATING", venue: venueName, rating: newValue });
          }
        }}
        aria-label={`${venueName} Rating`}
      />
    </div>
  );
}
