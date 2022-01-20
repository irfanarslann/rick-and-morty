import { gql } from "@apollo/client";
export const LIST_CHARACTERS = gql`
  query ListCharacters($pageNumber: Int!, $name: String) {
    characters(pageNumber: $pageNumber, name: $name) {
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
