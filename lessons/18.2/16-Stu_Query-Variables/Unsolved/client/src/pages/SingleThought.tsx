/* 

  BONUS:
  Q: This activity uses React Router to handle client-side routing. Which browser API 
    does React Router leverage?
  A: React Router leverages the History API of the browser for client-side routing. 
    The History API allows you to manipulate the browser's history stack and change the 
    URL without triggering a full page reload.

  Q: Where can we define queries that accept arguments?
  A: In typeDefs:
    type Query {
    thoughts: [Thought]!
    thought(thoughtId: ID!): Thought

    The route/s that pass the argument is specified in main.tsx:
      {
        path: '/thoughts/:thoughtId',
        element: <SingleThought />,
      },
  }
*/

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// TODO: Import the required code here
import { QUERY_SINGLE_THOUGHT } from "../utils/queries";

const SingleThought = () => {
  // Use `useParams()` to retrieve value of the route parameter `:thoughtId`
  const { thoughtId } = useParams();

  // TODO: Set up the useQuery to take query for a single thought by its ID
  const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    /*
    ! Important for Query Variables:
    The useQuery hook is able to take a second argument which is where we will pass 
      the query arguments needed to complete the request for a specific profile
    The second argument is passed as an object with a variables property
    The variables object will receive each key matching the query definition 
      in utils/queries.js, and the value we'd like to deliver to the server
  */
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {thought.thoughtAuthor} <br />
        <span style={{ fontSize: "1rem" }}>
          had this thought on{" "}
          {new Date(Number(thought.createdAt)).toLocaleString()}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: "1.5rem",
            fontStyle: "italic",
            border: "2px dotted #1a1a1a",
            lineHeight: "1.5",
          }}
        >
          {thought.thoughtText}
        </blockquote>
      </div>
    </div>
  );
};

export default SingleThought;
