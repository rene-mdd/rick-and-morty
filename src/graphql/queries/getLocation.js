import { gql } from '@apollo/client';

const GET_LOCATION = gql`
query GetLocation($id: ID!) {
    location(id: $id) {
      name
      type
      dimension
      residents {
        id
        name
        species
        status
      }
    }
  }
`;

export default GET_LOCATION;
