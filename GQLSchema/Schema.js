const { gql } = require("apollo-server");
const Characters = require("../Data/data.json");

const typeDefs = gql`
  type Common {
    name: String
    url: String
  }
  type Character {
    id: ID!
    name: String
    status: String

    species: String
    type: String
    gender: String
    origin: Common
    location: Common

    image: String
    url: String
    episode: [String]
    created: String
  }

  type Query {
    characters(id: ID, name: String, pageNumber: Int!): [Character]
  }
`;
const resolvers = {
  Query: {
    characters: (_, { name, pageNumber }) => {
      let limit = 20;
      let first = 0;
      let offset = pageNumber * limit + limit;

      if (name) {
        let datas = Characters.filter((character) =>
          character.name.toLowerCase().includes(name.toLowerCase())
        );
        if (datas.length > 20) {
          return datas.slice(first, offset);
        }
        return datas;
      } else return Characters.slice(first, offset);
    },
  },
};

module.exports = { typeDefs, resolvers };
