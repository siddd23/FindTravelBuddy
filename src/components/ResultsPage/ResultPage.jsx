// ResultsPage.js
import React from 'react';
import Navigation from '../Navigation';
import { useSearchParams } from "react-router-dom";
import './ResultPage.css'; 
import TripCard from '../CardView/TripCard';
const ResultPage = () => {
  // Check if data is defined
  // const dataFromApi = data.location.state.dataFromApi;
  const [params] = useSearchParams(); 
  const dataParam =  params.get('others');
  const data = JSON.parse(dataParam);

  console.log("data in Result Page",params.get('others'));
  console.log("data extracted",data);
  // if (!dataFromApi || !dataFromApi.length==0) {
  //   // Handle the case where data is not available, for example, show a loading message or an error message
  //   return (
  //     <div>
  //       <Navigation/>
  //       <p>Loading...</p>
  //       {/* You can add an error message here if needed */}
  //     </div>
  //   );
  // }

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