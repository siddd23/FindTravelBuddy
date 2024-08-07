import React, { useState, useEffect } from 'react';
import { createSearchParams,useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link

const HeroSection = () => {
  const navigate = useNavigate();
  const [dataFromApi, setDataFromApi] = useState([]);
  const [location, setLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const currentDate = new Date().toISOString().split('T')[0];
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  
  const openPopUp = () => {
    setIsPopUpOpen(true);
  };

  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://findtravelbuddy.onrender.com/submittrip/gettripsbylocanddate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ location, selectedDate }),
      });

      if (response.status === 200) {
        const data = await response.json();
        setDataFromApi(data);
        console.log("Test",data)
        navigate(`/results?others=${JSON.stringify(data)}`);
      } else {
        console.error('An error occurred while saving the data.');
        openPopUp();
        //ui
      }
    } catch (error) {
      console.error(error);
      openPopUp();
    }
  };

  return (
    <div className={`photo-container ${isPopUpOpen ? 'blur-background' : ''}`}>
      <img src="/images/bg_photo.jpg" alt="Background" className="background-image" />
      <div className="content" id="find-section">
        <h1>Find Your Buddies</h1>
        <p>Discover a new and authentic way of traveling. Find Travel Buddies who fit your travel style and discover the world together.</p>
        <form className="location-search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            id="locationID"
            name="locationID"
            placeholder="Search for a location"
            value={location}
            onChange={handleLocationChange}
          />
          <input
            type="date"
            id="dateID"
            name="dateID"
            placeholder="Select a date"
            value={selectedDate}
            onChange={handleDateChange}
            className="date-picker"
            min={currentDate}
          />
          <div className="nav-item">
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
     
      {isPopUpOpen && (
        <div className="no-data-popup">
          <p>No data found for the corresponding search.</p>
          <button onClick={closePopUp}>Close</button>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
