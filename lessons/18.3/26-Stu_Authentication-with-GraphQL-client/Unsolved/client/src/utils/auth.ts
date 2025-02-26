import { type JwtPayload, jwtDecode } from 'jwt-decode';

// TODO: What is the purpose of extending the JwtPayload interface?
/* It is used to add custom properties to the decoded JWT payload to include 
  additional user information (username, email, id) directly from the decoded 
  token. */
interface ExtendedJwt extends JwtPayload {
  data: {
    username: string,
    email: string,
    id: string
  }
};

class AuthService {
  // TODO: What is this method supposed to do?
  /* getProfile retrieves and decodes the JWT token from local storage for access to 
  the user's profile information. */
  getProfile() {
    // TODO: Why is jwtDecode being used here and what does it return?
    /* It decodes the JWT token and returns its payload as an object.
      This allows access to the user information stored in the token. */
    return jwtDecode<ExtendedJwt>(this.getToken());
  }

  // TODO: What is the purpose of this method?
  /* loggedIn checks if the user is logged in by checking for a current (non-expired) 
    valid token */
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // TODO: What is the purpose of this method?
  /* isTokenExpired decoding the token then validates it to ensure it isn't expired 
    by comparing the expiration time against the current time. */
  isTokenExpired(token: string) {
    try {
      // TODO: What is jwtDecode doing with the token here?
      /* jwtDecode decodes then extracts the expiration time (exp) payload from the 
        JWT token */
      const decoded = jwtDecode<JwtPayload>(token);

      if (decoded?.exp && decoded?.exp < Date.now() / 1000) {
        return true; // The token is expired
      }
    } catch (err) {
      return false; // If decoding fails, assume the token is not expired
    }
  }

  // TODO: What is the purpose of this method?
  /* getToken retrieves the JWT token from local storage */
  getToken(): string {
    const loggedUser = localStorage.getItem('id_token') || '';
    return loggedUser; // Return the token or an empty string if not found
  }

  // TODO: What is the purpose of this method?
  /* getToken stores the JWT token in local storage. It redirects the user to the
    homepage to log them in */
  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/'); // Redirect to the homepage after login
  }

  // TODO: What is the purpose of this method?
  /* logout removes the JWT token from local storage then redirects the user to the 
    homepage, logging them out. */
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/'); // Redirect to the homepage after logout
  }
}

export default new AuthService();