import React, { useState } from 'react';
import Navigation from '../Navigation';
import './StartTrip.css';
import { MdCheck } from 'react-icons/md';

const StartTripComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedType, setSelectedType] = useState('');
  const [step, setStep] = useState(1);
  const [inclusions, setInclusions] = useState(['']);
  const [exclusions, setExclusions] = useState(['']);
  const [specialItems, setSpecialItems] = useState(['']);
  const [tripItinerary, setTripItinerary] = useState('');
  const [tripExpense, setTripExpense] = useState(0);
  const categories = [
    { id: 1, name: 'Food' },
    { id: 2, name: 'Wellness' },
    { id: 3, name: 'Beach' },
    { id: 4, name: 'Culture' },
    { id: 5, name: 'Party' },
    { id: 6, name: 'Sport' },
    { id: 7, name: 'Nature' },
    { id: 8, name: 'City' },
    { id: 9, name: 'Backpacking' },
    { id: 10, name: 'Female Only' },
  ];

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleNextClick = () => {
    if (step === 1 && selectedCategory && selectedType) {
      setStep(2); // Proceed to the next page
    }
    else if (step === 2) {
      setStep(3); // Proceed to step 3
    }
  };

  const handleBackClick = () => {
    if (step === 3) {
      setStep(2); // Go back to step 2
    } else if (step === 2) {
      setStep(1); // Go back to step 1
    }
  };
  const addInput = (list, setList) => {
    setList([...list, '']);
  };

  const removeInput = (list, setList, index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  const handleInputChange = (list, setList, event, index) => {
    const updatedList = [...list];
    updatedList[index] = event.target.value;
    setList(updatedList);
  };

  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className="main-container">
        {step === 1 && (
          <div>
            <h2>Hi, Let's get started!</h2>
            <div className="date-picker-container">
              <h3>Departure Date</h3>
              <div className="date-picker">
                <input type="date" id="departureDate" name="departureDate"  required />
              </div>
            </div>
            <div className="separator"></div>
            <div className="category-picker-container">
              <h3>Pick Categories</h3>
              <div className="category-row">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className={`category ${selectedCategory === category.id ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <span>{category.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="separator"></div>
            <div className="trip-type-selector">
              <h3>Select Trip Type</h3>
              <div className="trip-type-options">
                <div className={`trip-type-option ${selectedType === 'guided' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    id="guided"
                    name="tripType"
                    value="guided"
                    checked={selectedType === 'guided'}
                    onChange={handleTypeChange}
                  />
                  <label htmlFor="guided">
                    Guided
                    <p>You’re taking the lead and making all arrangements for those wanting to join.</p>
                  </label>
                </div>
                <div className={`trip-type-option ${selectedType === 'coworking' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    id="coworking"
                    name="tripType"
                    value="coworking"
                    checked={selectedType === 'coworking'}
                    onChange={handleTypeChange}
                  />
                  <label htmlFor="coworking">
                    Coworking
                    <p>Sharing accommodation and working space with other remote professionals.</p>
                  </label>
                </div>
              </div>
            </div>
           
          </div>
        )}
        {step === 2 && (
          <div>
          
          <div className="trip-name-input">
                <label htmlFor="tripName">Trip Name</label>
                <input
                  type="text"
                  id="tripName"
                  name="tripName"
                  placeholder="Enter your trip name"
                  required
                />
          </div>
          <div className='trip-description'>
            <h3>Trip Description</h3>
            <p>Your trip information is divided into different parts to make it easier...</p>
          </div>
          <div className="overview-textarea" >
              <label htmlFor="overview">OVERVIEW</label>
              <textarea
                id="overview"
                name="overview"
                placeholder="Enter an overview of your trip"
                rows="6"
                required
              />
            </div>
            <div className="about-textarea">
              <label htmlFor="about">About You</label>
              <textarea
                id="abouttext"
                name="abouttext"
                placeholder="Introduce Yourself and your expectations of the trip"
                rows="6"
                required
              />
            </div>
            <div className="accommodation-section">
                <h3>Accommodation</h3>
                <div className="accommodation-columns">
                  <div className="accommodation-column">
                    <label>
                      <input type="checkbox" name="accommodation" value="hotel" /> Hotel
                    </label>
                    <label>
                      <input type="checkbox" name="accommodation" value="hostel" /> Hostel
                    </label>
                    <label>
                      <input type="checkbox" name="accommodation" value="apartment" /> Apartment
                    </label>
                  </div>
                  <div className="accommodation-column">
                    <label>
                      <input type="checkbox" name="accommodation" value="bedbreakfast" /> Bed & Breakfast
                    </label>
                    <label>
                      <input type="checkbox" name="accommodation" value="campsite" /> Campsite
                    </label>
                    <label>
                      <input type="checkbox" name="accommodation" value="other" /> Other
                    </label>
                  </div>
                </div>
              </div>
              <div className="inclusions-section">
                      <h3>Inclusions</h3>
                      <p>Write a short list of what your trip will include. e.g.: Transportation between stops, entrance fees</p>
                      <div className="inclusion-inputs">
                        {inclusions.map((inclusion, index) => (
                          <div className="inclusion-input" key={index}>
                            <input
                              type="text"
                              name="inclusion"
                              placeholder="Press + to add more"
                              value={inclusion}
                              onChange={(event) => handleInputChange(inclusions, setInclusions,event, index)}
                            />
                            <button
                              className="plus-minus-button"
                              onClick={index === inclusions.length - 1 ? () => addInput(inclusions, setInclusions) :() => removeInput(inclusions, setInclusions,index)}
                            >
                              {index === inclusions.length - 1 ? '+' : '-'}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="exclusion-section">
                      <h3>Exclusions</h3>
                      <p>Write a short list of what your trip will not include. e.g.: International Flightss</p>
                      <div className="exclusion-inputs">
                        {exclusions.map((exclusion, index) => (
                          <div className="exclusion-input" key={index}>
                            <input
                              type="text"
                              name="exclusion"
                              placeholder="Press + to add more"
                              value={exclusion}
                              onChange={(event) => handleInputChange(exclusions, setExclusions,event, index)}
                            />
                            <button
                              className="plus-minus-button"
                              onClick={index === exclusions.length - 1 ? () => addInput(exclusions, setExclusions) :() => removeInput(exclusions, setExclusions,index)}
                            >
                              {index === exclusions.length - 1 ? '+' : '-'}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="special-section">
                      <h3>What's Special?</h3>
                      <p>What’s unique and special about your trip? List them down.</p>
                      <div className="special-inputs">
                        {specialItems.map((special, index) => (
                          <div className="special-input" key={index}>
                            <input
                              
                              type="text"
                              name="special"
                              placeholder="Press + to add more"
                              value={special}
                              onChange={(event) => handleInputChange(specialItems, setSpecialItems,event, index)}
                            />
                            <button
                              className="plus-minus-button"
                              onClick={index === specialItems.length - 1 ? () => addInput(specialItems, setSpecialItems) :() => removeInput(specialItems, setSpecialItems,index)}
                            >
                              {index === specialItems.length - 1 ? '+' : '-'}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                      </div>
                    )}
                    {step === 3 && (
                      <div className="form-container">
                      <h3>Trip Itinerary</h3>
                      <label htmlFor="tripItinerary">Suitable for your trip:</label>
                      <textarea
                        id="tripItinerary"
                        name="tripItinerary"
                        placeholder="Enter your trip itinerary"
                        value={tripItinerary}
                        onChange={(e) => setTripItinerary(e.target.value)}
                        required
                      />
          
                      <div className="trip-expense-input">
                        <h3>Trip Expense per Person</h3>
                        <label htmlFor="tripExpense">Enter an estimated expense:</label>
                        <input
                          type="number"
                          id="tripExpense"
                          name="tripExpense"
                          placeholder="Estimated expense per person"
                          value={tripExpense}
                          onChange={(e) => setTripExpense(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    )}
         
      </div>
      <div className="button-container">
      {step > 1 && (
          <button className="back-button" onClick={handleBackClick}>
            Back
          </button>
        )}
        {step < 3 && (
          <button className="next-button" onClick={handleNextClick}>
            Next
          </button>
        )}
        {step === 3 && (
          <button className="submit-button" type="submit">
            Submit
          </button>
        )}
            </div>
    </div>
  );
};

export default StartTripComponent;
