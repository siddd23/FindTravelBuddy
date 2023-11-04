import React from 'react';
import './RequestCard.css';


const RequestCard = ( {trip,  fromEmailId} ) => {
 
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
        <button className="accept_btn" >Accept</button>
        <button className="reject_btn" >Reject</button>
      </div>
    </div>
   
  
  );
};

export default RequestCard;
