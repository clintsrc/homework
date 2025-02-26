import { Link } from 'react-router-dom';
import { type MouseEvent} from 'react';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Tech Thoughts</h1>
          </Link>
          <p className="m-0">Get into the mind of a programmer.</p>
        </div>
        <div>
          {/*
            TODO: What is the Auth.loggedIn() doing here  
            Check if the user is currently logged in. 
            If the user is authenticated, allow access to the profile and logout 
            options, otherwise show the login and signup options.
            */}
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {/*
                  TODO: What is the Auth.getProfile() doing here 
                  Retrieve the username from the profile information
                  Set the username in the text for the link to the user profile
                  */}
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
