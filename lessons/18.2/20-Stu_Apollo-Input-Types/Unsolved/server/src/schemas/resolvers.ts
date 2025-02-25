/*
  BONUS:
  Q: What are the union and interface GraphQL types provided by Apollo Server? 
  A: A union type allows a field handle multiple possible types without requiring 
    a common set of fields.
    Unions can be used when types are unrelated and don't share 
    fields (e.g., Book | Author).

  Q: What is an example of where they might be useful?
  A: Interface types are similar unions but they require all of the implementing types
    to share a common set of fields
    Interface types can be used when multiple types share properties.
    Interfaces types can be used when types share common fields but need additional 
    unique properties (e.g., Notification).
*/


import { Thought } from '../models/index.js';

// Define types for the arguments
interface ThoughtArgs {
  thoughtId: string;
}

interface AddThoughtArgs {
  thoughtText: string;
  thoughtAuthor: string;
}

interface AddCommentArgs {
  thoughtId: string;
  commentText: string;
}

interface RemoveCommentArgs {
  thoughtId: string;
  commentId: string;
}

const resolvers = {
  Query: {
    thoughts: async () => {
      return await Thought.find().sort({ createdAt: -1 });
    },
    thought: async (_parent: unknown, { thoughtId }: ThoughtArgs) => {
      return await Thought.findOne({ _id: thoughtId });
    },
  },
  Mutation: {
    // addThought: async (
    //   _parent: unknown,
    //   { thoughtText, thoughtAuthor }: AddThoughtArgs
    // ) => {
    //   return await Thought.create({ thoughtText, thoughtAuthor });
    // },
    addThought: async (_parent: unknown, { input }: { input: AddThoughtArgs }) => {
      return await Thought.create(input);
    },    
    addComment: async (
      _parent: unknown,
      { thoughtId, commentText }: AddCommentArgs
    ) => {
      return await Thought.findOneAndUpdate(
        { _id: thoughtId },
        {
          $addToSet: { comments: { commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeThought: async (_parent: unknown, { thoughtId }: ThoughtArgs) => {
      return await Thought.findOneAndDelete({ _id: thoughtId });
    },
    removeComment: async (
      _parent: unknown,
      { thoughtId, commentId }: RemoveCommentArgs
    ) => {
      return await Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

export default resolvers;
