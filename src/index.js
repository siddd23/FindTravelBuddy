import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClerkProvider, RedirectToSignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";
import { useNavigate,Routes,Route,BrowserRouter } from 'react-router-dom';
import ProtectedPage from './Pages/ProtectedPage';
import SignIn from './Pages/SignIn'
import ContactForm from './components/ContactForm/ContactForm';
import StartTripComponent from './components/StartTrip/StartTripComponent'
import HomePage from './Pages/HomePage'
import AboutUsComponent from './components/AboutUs/AboutUsComponent';
if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const ClerkWithRoutes = () =>{
  const navigate = useNavigate()
  return(
    <ClerkProvider 
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
    <Routes>
      <Route path="/" element={<App />} />
      <Route 
          path="/sign-in/*"
          element={<SignIn redirectUrl={'/protected'} routing="path" path="/sign-in"/>}
          // element={<SignIn redirectUrl={'/protected'} routing="path" path="/sign-in" />}
      />
      <Route
        path="/sign-up/*"
        element={<SignUp redirectUrl={'/protected'} routing="path" path="/sign-up" />}
      />
      
      <Route
          path="/protected"
          element={
            <>
            <SignedIn>
              <ProtectedPage />
            </SignedIn>
             <SignedOut>
              <RedirectToSignIn />
           </SignedOut>
            </>
          }
        />
        {/* <Route path='/sign' */}
        <Route path="/home" element={<HomePage />}/>
        <Route path="/contact" element={<ContactForm />}/>
        <Route path="/startTrip" element={<StartTripComponent />}/>
        <Route path="/about" element={<AboutUsComponent />}/>

    </Routes>
    </ClerkProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <ClerkWithRoutes />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();