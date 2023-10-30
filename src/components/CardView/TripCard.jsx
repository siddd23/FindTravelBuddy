import React,{useState} from 'react';
import './TripCard.css';

const TripCard = ({ trip }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
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
        <button className="details_btn" onClick={handleOpenModal}>View Details</button>
        <button className="join_btn">Join Trip</button>
      </div>
      {isModalOpen && (
        <div className="trip-modal">
          <div className="modal-content">
            <span className="close-modal" onClick={handleCloseModal}>&times;</span>
            <h2>{trip.tripName}</h2>
            
            <p><strong>About You:</strong> {trip.aboutYou}</p>
            <p><strong>Accommodation:</strong> {trip.accommodation.join(', ')}</p>
            <p><strong>Inclusions:</strong> {trip.inclusions.join(', ')}</p>
            <p><strong>Exclusions:</strong> {trip.exclusions.join(', ')}</p>
            <p><strong>Special Items:</strong> {trip.specialItems.join(', ')}</p>
            <p><strong>Trip Itinerary:</strong> {trip.tripItinerary}</p>
            <p><strong>Trip Expense:</strong> ${trip.tripExpense}</p>
            {/* Add more details as needed */}
          </div>
        </div>
      )}
    </div>
   
  
  );
};

export default TripCard;
