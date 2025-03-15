interface RatingDisplayProps {
  ratings: Map<string, number>;
  dispatch: React.Dispatch<{ type: string; venue: string }>;
}

export default function RatingDisplay({ ratings, dispatch }: RatingDisplayProps) {
  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg text-black">
      <h3 className="text-xl font-bold mb-2 text-purple-900">Venue List with Ratings: {ratings.size}</h3>
      {[...ratings.entries()].map(([venue, rating]) => (
        <h2
          key={venue}
          data-testid={venue}
          className="cursor-pointer text-lg"
          onClick={() => dispatch({ type: "REMOVE_RATING", venue })}
        >
          {venue} Rating: {rating}
        </h2>
      ))}
    </div>
  );
}
