// ResultsPage.js
import React from 'react';
import Navigation from '../Navigation';
import { useSearchParams } from "react-router-dom";
import './ResultPage.css'; 
import TripCard from '../CardView/TripCard';
const ResultPage = () => {
 
  const [params] = useSearchParams(); 
  const dataParam =  params.get('others');
  const data = JSON.parse(dataParam);

  console.log("data in Result Page",params.get('others'));
  console.log("data extracted",data);
  

  return (
    <div>
      {/* The rest of your component */}
      <Navigation/>
      <div className="results-container">
        {data.map((item) => (
          <div key={item._id} className="data-card">
                <TripCard key={item._id} trip={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ResultPage;