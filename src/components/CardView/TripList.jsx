// TripList.js
import React, { useEffect, useState } from 'react';
import TripCard from './TripCard';
import './TripList.css'; // Add your CSS for styling
import { useUser } from "@clerk/clerk-react";
// import { response } from 'express';
// import axios from 'axios';
const TripList = () => {
  const { user } = useUser();
  const [trips, setTrips] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentUserEmail = user?.primaryEmailAddress.emailAddress;
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < trips.length - 3 ? prevIndex + 1 : prevIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:5000/submittrip/gettrips', {
        method: 'GET',
      });

      if (response.status === 200) {
        const data = await response.json();
        setTrips(data);
        console.log("Data successfully fetched:", data);
      } else {
        alert('An error occurred while fetching the data.');
      }
    } catch (error) {
      console.error(error);
    }
  }
 
  useEffect(() => {
    getData(); // Call the getData function when the component mounts.
  }, []);

  return (
    <div className="trip-list">
    <div className="trip-list-container">
      {trips.slice(currentIndex, currentIndex + 3).map((trip) => (
        <TripCard 
        key={trip._id} 
        trip={trip} 
        currentUserEmail={currentUserEmail}
        // onRequestJoin={handleJoinRequest}
        />
      ))}
    </div>
    <div className="trip-list-controls">
      <button onClick={handlePrev} disabled={currentIndex === 0}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentIndex >= trips.length - 3}>
        Next
      </button>
    </div>
  </div>
  );
};
export default TripList;