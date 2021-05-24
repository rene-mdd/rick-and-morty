import { gql } from '@apollo/client';

const GET_LOCATIONS = gql`
query GetLocations($page: Int!) {
  locations(page: $page) {
    info {
      count
      pages
      prev
      next
    }
    results {
      id
      name
      type
      dimension
    }
  }
}
`;

export default GET_LOCATIONS;
