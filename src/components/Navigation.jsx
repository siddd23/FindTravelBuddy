import { UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from 'react-router-dom';

const Navigation =() =>{
    const { user } = useUser();
    const navigate = useNavigate();
    const userNameContent = user?.fullName;
    
    return <nav className="container">
            <div className="logo"> 
                <img src="/images/logo.png" alt="logo" />
               
            </div>
            <ul>
                <li>
                  <a href="/home">Home</a>
                </li>
                <li >
                  <a href="/startTrip">Start a Trip</a>
                </li>
                <li >
                  <a href="/about">About</a>
                </li>
                <li  >
                  <a href="/contact">Contact</a>
                </li>
                
            </ul>
            <div className='userName'>{
            userNameContent
          }</div>
            {/* <div className='userEmail'>
              {userEmail}
            </div> */}
           
         
            {!user ? (
        <div className="nav-item">
    
    <button
      // className="nav-link btn btn-primary"
      onClick={() => navigate('/sign-in')} className="h-4 w-4 text-black ml-2" size="sm" variant="premium" > Sign In
        </button>
        
        </div>
        
      ) : <UserButton />
      }
        </nav>
}
export default Navigation;