/*
  BONUS:
  Q: Which React API is the Apollo Client provider functionality built with?
  A: The Apollo Client provider functionality is built with the React Context API. 
    That can make Apollo Client available from anywhere in the component tree, 
    so that components can access the Apollo Client instance and run queries and
    mutations
 */


// import gql from @apollo/client
import { gql } from '@apollo/client';

// Use the gql function to access the thoughts entrypoint and export it
// TODO: Add a query called 'getThoughts' that returns a thought's _id, thoughtText, 
// thoughtAuthor, and createdAt fields
export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;
