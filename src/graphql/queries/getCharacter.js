import { gql } from '@apollo/client';

const GET_CHARACTER = gql`
query GetCharacter($id: ID!) {
  character(id: $id) {
    name
    status
    species
    type
    gender
    image
    origin {
      id
      name
    }
    location {
      id
      name
    }
    episode {
      id
      episode
      name
      air_date
    }
  }
}
`;

export default GET_CHARACTER;
