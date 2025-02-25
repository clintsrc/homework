const typeDefs = `
  # TODO: Add a comment describing the functionality of this statement
  # The Class type defines the structure of a class object, including its fields and their data types.
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # TODO: Add a comment describing the functionality of this statement
  # The Query type defines the available queries for fetching data. 
  # In this case, it allows fetching an array of Class objects.
  type Query {
    classes: [Class]
  }
`;

export default typeDefs;
