import React from 'react';
import './RequestCard.css';
import axios from 'axios';

const RequestCard = ( {trip,  fromEmailId} ) => {
  
  const handleAccept = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/submittrip/acceptCard/${trip.id}`);
      console.log(`Accepted card with ID: ${response.data.data._id}`);
      // console.log('Response:', response.data);
    } catch (error) {
      // console.error('Error:', error);
    }
  };
const handleReject = async () => {
  try {
    const response = await axios.post(`http://localhost:5000/submittrip/deleteCard/${trip.id}`);
    console.log(`Rejected card with ID: ${response.data.data._id}`);
    // console.log('Response:', response.data);
  } catch (error) {
    // console.error('Error:', error);
    }
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
        <button className="accept_btn" onClick={handleAccept} >Accept</button>
        <button className="reject_btn" onClick={handleReject}>Reject</button>
      </div>
    </div>
   
  
  );
};

export default RequestCard;
