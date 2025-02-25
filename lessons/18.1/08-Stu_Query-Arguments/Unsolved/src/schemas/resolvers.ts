import { School, Class, Professor } from '../models/index.js';

// TODO: Define an interface for the class resolver arguments
// Define types for the arguments
interface ClassArgs {
  id: string;
}

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate('classes').populate({
        path: 'classes',
        populate: 'professor'
      });
    },
    classes: async () => {
      return await Class.find({}).populate('professor');
    },

    // TODO: Add a new resolver for a single Class object
    // Resolver for returning a single class based on ID
    class: async (_: unknown, { id }: ClassArgs) => {
      return await Class.findById(id).populate('professor');
    },

    professors: async () => {
      return await Professor.find({}).populate('classes');
    }
  },
};

export default resolvers;
