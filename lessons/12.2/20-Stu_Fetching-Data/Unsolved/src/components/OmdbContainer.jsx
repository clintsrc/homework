import { useState, useEffect } from 'react';
import Container from './UI/Container';
import Row from './UI/Row';
import Col from './UI/Col';
import Card from './UI/Card';
import SearchForm from './SearchForm';
import MovieDetail from './MovieDetail';
import API from '../utils/API';

const OmdbContainer = () => {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false); // BONUS: New state for loading

  // When the search form is submitted, use the API.search method to search for the movie(s)
  const searchMovie = (query) => {
    setLoading(true); // Set loading to true when search starts
    API.search(query)
      .then((res) => {
        setResult(res.data);
        setSearch('');
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false)); // Set loading to false after search completes
  };

  // TODO: Fix the useEffect hook running after every state change
  /*
   * useEffect() needs an empty dependency array so that it only runs once when
   *  the component mounts
   * (ref: https://react.dev/reference/react/useEffect#my-effect-runs-twice-when-the-component-mounts)
   *
   */
  useEffect( () => {
      searchMovie('The Matrix');
    }, []
  );

  // TODO: Fix the handleInputChange function
  // the event target value was being console logged which bypassed the state hook
  const handleInputChange = (e) => setSearch(e.target.value);

  // TODO: Fix the handleFormSubmit function not actually searching for the movie
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //setSearch(e.target.value);  // WRONG! setting to the immutable event target value which bypasses the api search itself
    searchMovie(search);
  };

  // Destructure the result object to make the code more readable, assign them to empty strings to start
  const {
    Title = '',
    Poster = '',
    Director = '',
    Genre = '',
    Released = '',
  } = result;

  /* Fall back to default header if `Title` is undefined
  Does `Title` exist? If so, render the `MovieDetail` card 
  If not, render a different header */

  return (
    <Container>
      <Row>
        <Col size="md-8">
          <Card heading={Title || 'Search for a Movie to Begin'}>
            {loading ? (
              <h3>Loading...</h3> // Render loading element if loading is true
            ) : Title ? (
              <MovieDetail
                title={Title}
                src={Poster}
                director={Director}
                genre={Genre}
                released={Released}
              />
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Card>
        </Col>
        <Col size="md-4">
          <Card heading="Search">
            <SearchForm
              value={search}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OmdbContainer;
