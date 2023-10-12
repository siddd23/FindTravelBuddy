import { UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from 'react-router-dom';

const Navigation =() =>{
    const { user } = useUser();
    
    const navigate = useNavigate();
    return <nav className="container">
            <div className="logo"> 
                <img src="/images/logo.png" alt="logo" />
            </div>
            <ul>
                <li>Home</li>
                <li >Start a Trip</li>
                <li >About</li>
                <li >Contact</li>
            </ul>
            {!user ? (
  <div className="nav-item">
    <button
      // className="nav-link btn btn-primary"
      onClick={() => navigate('/sign-in')} className="h-4 w-4 text-black ml-2" size="sm" variant="premium" > Sign In
          </button>
        </div>
      ) : <UserButton />}
        </nav>
}
export default Navigation;