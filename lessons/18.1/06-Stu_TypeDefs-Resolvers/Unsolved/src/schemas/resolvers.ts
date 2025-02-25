import { School, Class, Professor } from '../models/index.js';

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
    // TODO: Update resolver to include classes
    /* 
      populate('classes'): Ensures that when fetching professors, it includes the classes array (which contains ObjectId references).
      select: 'name': Restricts the class fields to just name, so the response matches the desired format.
      Returns the correct nested structure: Now each professor will have their classes field properly populated with only the class names.
    */
    professors: async () => {
      // return await Professor.find({});
      return await Professor.find({}).populate({
        path: 'classes',
        select: 'name', // Only return the name field
      });
    }
  },
};

export default resolvers;
