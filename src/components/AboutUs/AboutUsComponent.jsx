import React from 'react'
import './AboutUs.css'; 

import Navigation from '../Navigation'
import Footer from '../Footer'
const AboutUsComponent = () => {
  return (
    <div className="about-us-container">
         <div><Navigation/></div>
    <img
      src="/images/about.jpg"
      alt="About Us"
      className="about-us-image"
    />
         <div className="about-us-overlay">
        <h1>About Us</h1>
      </div>
      <div className="about-us-description">
        <h1>Travel Solo in a Group!</h1>
        <p>
        At Find Travel Buddy, we connect travelers worldwide with our unique group trips.
We are here to give everyone a chance to experience amazing trips around the world!
When traveling with us, you'll travel insanely authentic and in incredibly small groups with forever memorable experiences.
We are driven by passion. We're here to change lives - trip by trip!
Become part of the change and join our trip!
        </p>

    </div>
    <div className="image-container">
      <div className="image">
        <img src="/images/first.jpg" alt="Image 1" />
      </div>
      <div className="image">
        <img src="/images/second.jpg" alt="Image 2" />
      </div>
      <div className="image">
        <img src="/images/third.jpg" alt="Image 3" />
      </div>
    </div>
    <div className='footer-position'><Footer/></div>
  </div>
  )
}

export default AboutUsComponent