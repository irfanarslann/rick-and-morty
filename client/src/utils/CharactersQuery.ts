import { gql } from "@apollo/client";
export const LIST_CHARACTERS = gql`
  query ListCharacters($offset: Int, $name: String) {
    characters(offset: $offset, name: $name) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
        url
      }
      location {
        name
        url
      }
      image
      url
      episode
      created
    }
  }
`;
