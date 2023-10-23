import '../App.css'
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';


const HeroSection = () =>{
      const [location, setLocation] = useState('');
      const [selectedDate, setSelectedDate] = useState('');
      const currentDate = new Date().toISOString().split('T')[0];
      // const history = useHistory();

      const handleLocationChange = (event) => {
        setLocation(event.target.value);
      };

      const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        // Navigate to the results page with location and date as URL parameters
        // history.push(`/results?location=${location}&date=${selectedDate}`);
     
      };
    return <div className="photo-container">
          <img src={'/images/bg_photo.jpg'} alt="Background" className="background-image" />
          <div className="content" id="find-section">
            <h1>Find Your Buddies</h1>
            <p>Discover a new and authentic way of traveling. Find Travel Buddies who fit your travel style and discover the world together.</p>
            <form className="location-search-bar" onSubmit={handleSubmit}  >
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
        </div>
}

export default HeroSection;