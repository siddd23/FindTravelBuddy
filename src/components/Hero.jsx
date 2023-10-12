import '../App.css'
import React, { useState } from 'react';
const HeroSection = () =>{
    const [location, setLocation] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
      };
    
      const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        // You can perform a search or handle the query in this function
        console.log('Location:', location);
        console.log('Month:', selectedMonth);
        // setResponse(null);

        // You can perform a search or API request here and update the response state
        try {
          const result = await fetch(`your-api-endpoint?location=${location}&month=${selectedMonth}`);
          const data = await result.json();
          // setResponse(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    return <div className="photo-container">
    <img src={'/images/bg_photo.jpg'} alt="Background" className="background-image" />
    <div className="content">
     
      <h1>Find Your Buddies</h1>
      <p>Discover a new and authentic way of traveling. Find Travel Buddies who fit your travel style and discover the world together.</p>
      <form className="location-search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a location"
        value={location}
        onChange={handleLocationChange}
      />
      <select value={selectedMonth} onChange={handleMonthChange}>
        <option value="" disabled>
          Select a month
        </option>
        <option value="January">January</option> <option value="February">February</option> <option value="March">March</option><option value="April">April</option>
        <option value="May">May</option> <option value="June">June</option> <option value="July">July</option>
        <option value="August">August</option> <option value="September">September</option> <option value="October">October</option>
        <option value="November">November</option> <option value="December">December</option>
      </select>
      <button type="submit">Search</button>
    </form>
    </div>

  </div>
}

export default HeroSection;