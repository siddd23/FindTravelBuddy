import React from 'react';
import './TripCard.css';

const TripCard = ({ trip }) => {
  return (
    <div className="trip-card">
      <div className="trip-header">
        <h3 className="trip-name">{trip.tripName}</h3>
        <p className="trip-category">Category: {trip.category}</p>
      </div>
      <p className="trip-description">{trip.overview}</p>
      <div className="trip-details">
        <div className="trip-detail">
          <strong>Departure Date:</strong> {new Date(trip.departureDate).toLocaleDateString()}
        </div>
        <div className="trip-detail">
          <strong>Trip Type:</strong> {trip.tripType}
        </div>
      </div>
      <div className="trip-options">
        <button className="details_btn">View Details</button>
        <button className="join_btn">Join Trip</button>
      </div>
    </div>
  );
};

export default TripCard;
