import { gql } from '@apollo/client';

const GET_EPISODE = gql`
query GetEpisode($id: ID!) {
  episode(id: $id) {
    name
    episode
    air_date
    characters {
      id
      name
      species
      origin {
        id
        name
      }
    }
  }
}
`;

export default GET_EPISODE;
