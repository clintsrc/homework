// TODO: Add code to import the `useQuery()` hook from @apollo/client
import { useQuery } from '@apollo/client';
import ThoughtList from "../components/ThoughtList";

// TODO: Add code to import the `QUERY_THOUGHTS` from utils/queries
import { QUERY_THOUGHTS } from "../utils/queries";

const Home = () => {
  // TODO: Add code to query for thought data using `useQuery()` and return the
  // `loading` and `data` properties to use.

  /*
    Set the useQuery hook to the query we want to execute on component load
    loading: boolean status
    data: empty if still loading, otherwise the query result
  */
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  /*  The optional chaining operator handles an empty array if the query isn't resolved yet */
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {/* If the data is still loading, render a loading message */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
