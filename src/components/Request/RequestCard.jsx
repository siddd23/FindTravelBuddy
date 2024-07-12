import React from 'react';
import './RequestCard.css';
import axios from 'axios';

const RequestCard = ( {trip,  fromEmailId} ) => {
  const handleAccept = () => {
    axios.post(`https://findtravelbuddy.onrender.com/submittrip/accept/${trip._id}`)
      .then(response => {
        // Handle the response if needed
        console.log(response.data);
      })
      .catch(error => {
        // Handle errors if any
        console.error(error);
      });
  };

  const handleReject = () => {
    axios.delete(`https://findtravelbuddy.onrender.com/submittrip/reject/${trip._id}`)
      .then(response => {
        // Handle the response if needed
        console.log(response.data);
      })
      .catch(error => {
        // Handle errors if any
        console.error(error);
      });
  };

  
  return (
    <div className="request-card">
      <div className="request-header">
        <h3 className="fromemail">Request From: {fromEmailId}</h3>
        <h3 className="request-name">{trip.tripName}</h3>
        <p className="request-category">Category: {trip.category}</p>
      </div>
      <p className="request-description">{trip.overview}</p>

      <div className="request-details">
        <div className="request-detail">
          <strong>Departure Date:</strong> {new Date(trip.departureDate).toLocaleDateString()}
        </div>
        <div className="request-detail">
          <strong>Trip Type:</strong> {trip.tripType}
        </div>
      </div>
      <div className="request-options">
        <button className="accept_btn"  onClick={handleAccept}>Accept</button>
        <button className="reject_btn" onClick={handleReject}>Reject</button>
      </div>
    </div>
   
  
  );
};

export default RequestCard;
