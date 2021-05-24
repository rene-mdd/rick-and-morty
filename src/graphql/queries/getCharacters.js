import { gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
        prev
        next
      }
      results {
        id
        name
        species
        origin {
          id
          name
        }
        location {
          id
          name
        }
      }
    }
  }
`;

export default GET_CHARACTERS;
