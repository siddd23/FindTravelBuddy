// ResultsPage.js
import React, { useState, useEffect } from 'react';

const ResultPage = () => {
  const [results, setResults] = useState([]);
  const queryParams = new URLSearchParams(window.location.search);
  const location = queryParams.get('location');
  const date = queryParams.get('date');

  useEffect(() => {
    // Fetch data based on location and date
    // Replace 'your-api-endpoint' with the actual API endpoint
    fetch(`http://localhost:5000/submittrip/gettrips?location=${location}&date=${date}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data); // Assuming data is an array of results
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [location, date]);

  return (
    <div>
      <h1>Search Results for {location} on {date}</h1>
      <div className="results-container">
        {results.map((result) => (
          <div key={result.id} className="result-card">
            {/* Render individual result data here */}
            <h2>{result.title}</h2>
            <p>{result.description}</p>
            {/* Add more content as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultPage;