import React from 'react'
import '../App.css'

const Footer=() =>{
  const scrollToHow = () => {
    const workingSection = document.getElementById('working-section');
    if (workingSection) {
      workingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToFind=()=>{
    const findSection=document.getElementById('find-section');
    if(findSection){
      findSection.scrollIntoView({behavior:'smooth'});
    }
  }
  const scrollToReview=()=>{
    const reviews=document.getElementById('review-pilot');
    if(reviews){
      reviews.scrollIntoView({behavior:'smooth'});
    }
  }
  return (<footer className="footer">
    <div className="footer-section">
      <h4>TRAVEL</h4>
      <ul>
        <li ><a onClick={scrollToHow}>How it works</a></li>
        <li><a onClick={scrollToFind}>Find a trip</a></li>
        <li><a href="/startTrip">Create a trip</a></li>
        
      </ul>
    </div>
    
    <div className="footer-section">
      <h4>Find Your Travel Buddy</h4>
      <ul>
        <li ><a href="/about">About Us</a></li>
        <li><a onClick={scrollToReview}>Trustpilot reviews</a></li>
       
        
      </ul>
    </div>
    <div className="footer-section">
      <h4>SUPPORT</h4>
      <ul>
        <li>Help & FAQ</li>
      
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer