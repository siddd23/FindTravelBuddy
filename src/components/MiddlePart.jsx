import React from 'react'
import '../App.css'
import SectionComponent from '../components/Section/SectionComponent';
import SecondSectionComponent from '../components/SecondSection/SecondSectionComponent'
const MiddlePart = () => {
  return (
    <div>
   <div className="statistics">
    <div className="stat-item">
      <div className="value">160k+</div>
      <div className="separator"></div>
      <div className="label">Travel buddies found</div>
    </div>
    <div className="stat-item">
      <div className="value">8k+</div>
      <div className="separator"></div>
      <div className="label">Destinations traveled</div>
    </div>
    <div className="stat-item">
      <div className="value">4.6</div>
      <div className="separator"></div>
      <div className="label">Trustpilot score</div>
    </div>
  </div>
  <div className="info-section">
      <div className="info-text">
        <h2>Real & Verified Travelers!</h2>
        <div className="separator"></div>
        <p>
          Find Travel Buddies on Find Your Travel Buddy - the best Travel Buddy Website out
          there. Every trip is organized by verified & passionate travelers just
          like you. Find a travel adventure that fits who you are!
        </p>
      </div>
      <div className="info-image">
        <img src="/images/sidephoto.jpg" alt="Travel Buddy" />
      </div>
    </div>
    <div className="how-it-works">
      <h2>How Does It Work?</h2>
      <p>Find your next travel buddies in just a few clicks. Simple as ever!</p>
    </div>
    <div className='section-container'>
      <SectionComponent
        title="Find Your next Travel Buddy"
        description="Find your next travel buddy in your dream destination and discover unique adventures around the world."
        imageSrc="./images/search.png" // Update with your image path
      />
      <SectionComponent
        title="Book Your Next Trip"
        description="Secure your spot on your dream trip with the best travel buddies in the world by paying a 20% deposit."
        imageSrc="./images/dream.png"
      />
      <SectionComponent
        title="Travel the world together"
        description="Pack your bags and off you go! Meet amazing travel friends and discover unique places worldwide!"
        imageSrc="./images/world.png" 
      />
    </div>
    <div className="how-it-works">
      <h2>Why Travel With Us</h2>
    </div>
    <div  className='second-section-container'>
      <SecondSectionComponent
        heading="Incredibly Authentic"
        description="Find like-minded travel buddies and discover an authentic and exciting new way of traveling."
        emoji="⭐️"
      />
      <SecondSectionComponent
        heading="Memorably Unique"
        description="Our TripLeaders have a magic touch to make each trip special! Explore extraordinary destinations, walk off-the-beaten-path, and experience unique itineraries."
        emoji="🎁" 
      />
      <SecondSectionComponent
        heading="Genuinely Easy"
        description="Travel effortlessly with our unique trips. We do the hard work for you. So, sit back and get ready for a wholesome journey!"
        emoji="😊" // 
      />
      <SecondSectionComponent
        heading="24/7 Support"
        description="Your satisfaction is our priority. We are available around the clock to help you. Reach out to our support center for any inquiries."
        emoji="⏰" 
      />
    </div>
    <div className="how-it-works">
      <h2>Reviews from our TripMates</h2>
    </div>
    </div>
 
  
  );
};

export default MiddlePart