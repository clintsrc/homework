const typeDefs = `
  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  input ThoughtInput {
    thoughtText: String!
    thoughtAuthor: String!
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }

  type Query {
    thoughts: [Thought]!
    thought(thoughtId: ID!): Thought
  }

  type Mutation {
    # addThought(thoughtText: String!, thoughtAuthor: String!): Thought
    addThought(input: ThoughtInput!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

export default typeDefs;
