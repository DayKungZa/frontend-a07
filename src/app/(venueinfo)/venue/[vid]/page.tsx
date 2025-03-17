"use client"
import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";

// Example of venue data. In a real-world scenario, this could come from an API.
const venueData = [
    {vid:"001", venueName:"The Bloom Pavilion", imgSrc:"/img/bloom.jpg", description:"Blooming flowers pavilion."},
    {vid:"002", venueName:"Spark Space", imgSrc:"/img/sparkspace.jpg", description:"Creative space for ideas."},
    {vid:"003", venueName:"The Grand Table", imgSrc:"/img/grandtable.jpg", description:"A grand table for events."}
]

export default function VenueDetailPage({ params }: { params: { vid: string } }) {
  const [venue, setVenue] = useState<{ venueName: string; imgSrc:string; description: string } | null>(null);

  useEffect(() => {
    // Find the venue data based on the `vid` parameter
    const selectedVenue = venueData.find((v) => v.vid === params.vid);
    setVenue(selectedVenue || null);
  }, [params.vid]);

  if (!venue) {
    return <div>Venue not found</div>;
  }

  return (
    <main className={styles.main}>
        <h2>Venue: {venue.venueName}</h2>
        <p>{venue.description}</p>
    </main>
  );
}
