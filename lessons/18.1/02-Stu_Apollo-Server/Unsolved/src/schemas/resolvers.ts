import { Class } from '../models/index.js';

// TODO: Add a comment describing the functionality of this expression
// The resolvers object defines the methods that can be called in response to GraphQL queries.
const resolvers = {
  Query: {
    // The classes method is a resolver for the 'classes' query. It retrieves all class documents from the database.
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement
      // This statement uses the Class model to find all documents in the classes collection and return them.
      return await Class.find({});
    },
  },
};

export default resolvers;
