import { gql } from '@apollo/client';

const GET_EPISODES = gql`
query GetEpisodes($page: Int!) {
  episodes(page: $page) {
    info {
      count
      pages
      prev
      next
    }
    results {
      id
      name
      air_date
      episode
    }
  }
}
`;

export default GET_EPISODES;
