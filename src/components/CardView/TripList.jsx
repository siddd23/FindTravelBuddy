// TripList.js
import React, { useEffect, useState } from 'react';
import TripCard from './TripCard';
import './TripList.css'; // Add your CSS for styling

const TripList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint.
    fetch('/submittrip/gettrips')
      .then((response) => response.json())
      .then((data) => setTrips(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="trip-list">
      {trips.map((trip) => (
        <TripCard key={trip._id} trip={trip} />
      ))}
    </div>
  );
};

export default TripList;
