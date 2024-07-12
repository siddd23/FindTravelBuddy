import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useUser } from "@clerk/clerk-react";
import Navigation from '../Navigation';
import RequestCard from './RequestCard';
import LoadingScreen from './LoadingScreen';
const RequestList = () => {
  const { user } = useUser();
  const [fromEmailId, setFromEmailId] = useState("");
  const [toEmailId, setToEmailId] = useState("");
  const [tripName, setTripName] = useState("");
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const currentUser = user?.primaryEmailAddress.emailAddress;
  
  const getData = async () => {
    setIsLoading(true); // Set loading state to true
    try {
      const response = await axios.post('https://findtravelbuddy.onrender.com/submittrip/getjoinstrip', {
        to_email_id: currentUser
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setFromEmailId(response.data.from_email_id);
      setTripName(response.data.tripName);
      // You may set other state variables as needed

      console.log(response.data.from_email_id);
    } catch (error) {
      console.error('Error:', error);
    }finally {
      setIsLoading(false); // Set loading state to false when data is fetched
    }
  };

  const gotData = async () => {
    try {
      const response = await axios.post('https://findtravelbuddy.onrender.com/submittrip/getbyfeilds', {
        to_email_id: currentUser,
        tripName: tripName
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        // Check if the response data already exists in the requests array
        if (!requests.some((request) => request._id === response.data._id)) {
          setRequests((prevRequests) => [...prevRequests, response.data]);
        }
      } else {
        console.error('Error fetching data:', response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getData(); // Call getData to set necessary state variables
  }, [currentUser]);

  useEffect(() => {
    // Call gotData after tripName is set
    if (tripName) {
      gotData();
    }
  }, [tripName]);

  return (
    <div>
      <Navigation/>
      <div className="trip-list">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <div className="trip-list-container">
            {requests.length > 0 ? requests.map((trip) => (
              <RequestCard
                key={trip._id}
                trip={trip}
                fromEmailId={fromEmailId}
                // currentUserEmail={currentUser}
              />
            )) : <h1>No data available</h1>}
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestList;
