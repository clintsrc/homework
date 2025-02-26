import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
  // State to hold form input values for email and password
  const [formState, setFormState] = useState({ email: '', password: '' });
  
  // useMutation hook to call the LOGIN_USER mutation
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // Update state based on form input changes
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Update the form state with the new input value
    setFormState({
      ...formState,
      [name]: value, // Use the input name to update the corresponding value
    });
  };

  // Submit form handler
  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log(formState); // Log the current form state for debugging
    try {
      // Call the login mutation with form state variables
      const { data } = await login({
        variables: { ...formState }, // Spread the form state into the variables
      });

      // If login is successful, store the token using Auth utility
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e); // Log any errors that occur during login
    }

    // Clear form values after submission
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {data ? (
              // If login is successful, show success message with a link to homepage
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              // Render the login form if not logged in
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange} // Handle input change
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange} // Handle input change
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit" // Submit the form
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              // Display error message if login fails
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login; // Export the Login component