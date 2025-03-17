import InteractiveCard from "./InteractiveCard";
import Image from "next/image";
import RatingComponent from "./RatingComponent";
import Link from "next/link";

interface CardProps {
  venueName: string;
  imgSrc: string;
  description: string;
  vid: string;
  dispatch: React.Dispatch<{ type: string; venue: string; rating?: number }>;
}

export default function Card({ venueName, imgSrc, description, vid, dispatch }: CardProps) {
  return (
    <div className="flex flex-col bg-purple-200 w-[100%] rounded-lg p-3 mx-5 my-6">
        <InteractiveCard>
          <Link href={`/venue/${vid}`} key={venueName}>
            <Image className="rounded-lg" src={imgSrc} alt={venueName} width={400} height={300} />
            <div className="px-2 py-3">
              <div className="text-3xl font-bold text-purple-900">{venueName}</div>
              <p className="text-black">{description}</p>
            </div>
            <div className="mt-auto px-2">
              <RatingComponent venueName={venueName} dispatch={dispatch} />
            </div>
          </Link>
        </InteractiveCard>
    </div>
  );
}
