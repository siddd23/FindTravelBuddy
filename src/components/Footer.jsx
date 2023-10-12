import React from 'react'
import '../App.css'

const Footer=() =>{
  return (<footer className="footer">
    <div className="footer-section">
      <h4>TRAVEL</h4>
      <ul>
        <li>How it works</li>
        <li>Find a trip</li>
        <li>Create a trip</li>
        
      </ul>
    </div>
    
    <div className="footer-section">
      <h4>Find Your Travel Buddy</h4>
      <ul>
        <li>About Us</li>
        <li>Trustpilot reviews</li>
       
        <li>Careers</li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>SUPPORT</h4>
      <ul>
        <li>Help & FAQ</li>
      
        <li>Contact</li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer