import '../App.css'
import { ClerkProvider } from "@clerk/clerk-react";
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer';
import ReviewSection from '../components/ReviewSection';
import HeroSection from '../components/Hero';
import Navigation from '../components/Navigation';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import MiddlePart from '../components/MiddlePart';

const App=() =>{

    return <div> 
     {/* <ClerkProvider publishableKey={clerkPubKey}> */}
     
    <Navigation/>
    <HeroSection/>
    {/* <ContactForm/> */}
    <MiddlePart/>
    {/* <ReviewSection/> */}
    <Footer/>
    
</div>
  
}
export default App;