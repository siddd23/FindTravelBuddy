// ResultsPage.js
import React from 'react';
import Navigation from '../Navigation';
const ResultPage = ({ data }) => {
  // Check if data is defined
  if (!data || !data.dataFromApi) {
    // Handle the case where data is not available, for example, show a loading message or an error message
    return (
      <div>
        <Navigation/>
        <p>Loading...</p>
        {/* You can add an error message here if needed */}
      </div>
    );
  }

  const { dataFromApi } = data; // Destructure dataFromApi from the data prop

  return (
    <div>
      {/* The rest of your component */}
      {console.log("data in data  ", dataFromApi)}
      <Navigation/>
      <div className="results-container">
        {dataFromApi.map((item) => (
          <div key={item._id} className="data-card">
            <h2>{item.tripName}</h2>
            <p>{item.tripDescription}</p>
            <p>Category: {item.category}</p>
            <p>Trip Type: {item.tripType}</p>
            <p>Overview: {item.overview}</p>
            {/* Add more data fields as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ResultPage;