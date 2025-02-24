import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// TODO: Import the required code here

const SingleThought = () => {
  // Use `useParams()` to retrieve value of the route parameter `:thoughtId`
  const { thoughtId } = useParams();

  // TODO: Set up the useQuery to take query for a single thought by its ID
  const { loading, data } = useQuery( /* Your Code Here */);

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {thought.thoughtAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          had this thought on {new Date(Number(thought.createdAt)).toLocaleString()}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {thought.thoughtText}
        </blockquote>
      </div>
    </div>
  );
};

export default SingleThought;
