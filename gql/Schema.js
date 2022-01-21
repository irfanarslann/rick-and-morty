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
    characters(id: ID, name: String, limit: Int, offset: Int): [Character]
  }
`;
const resolvers = {
  Query: {
    characters: (_, { name, limit = 20, offset }) => {
      if (name) {
        //If filter selected
        let characters = Characters.filter((character) =>
          character.name.toLowerCase().includes(name.toLowerCase())
        );
        if (characters.length > 20) {
          return characters
            .slice(offset, offset + limit)
            .map((char) => ({ ...char, __typename: "Character" }));
        }
        return characters;
      }
      //Non-filtered data
      else
        return Characters.slice(offset, offset + limit).map((char) => ({
          ...char,
          __typename: "Character",
        }));
    },
  },
};
module.exports = { resolvers, typeDefs };
