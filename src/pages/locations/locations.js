import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import {
  Table, Container, Button, Pagination, Icon
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Loading from '../loading';
import Error from '../error';
import GET_LOCATIONS from '../../graphql/queries/getLocations';

function Locations() {
  const [page, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { page }
  });

  const handlePaginationChange = (e, { activePage }) => {
    setCurrentPage(activePage);
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Container>
      <Container className='menu'>
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Dimension</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data ? (
              data.locations.results.map((location) => (
                <Table.Row key={location.id}>
                  <Table.Cell>{location.name}</Table.Cell>
                  <Table.Cell>{location.dimension}</Table.Cell>
                  <Table.Cell>{location.type}</Table.Cell>
                  <Table.Cell textAlign='center'>
                    <Link
                      to={{
                        pathname: `/location/${location.id}`,
                        param: location.id
                      }}
                    >
                      <Button primary>View</Button>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <p>{loading && 'Loading'}</p>
            )}
          </Table.Body>
        </Table>
      </Container>
      <Container textAlign='center'>
        <Pagination
          activePage={page}
          onPageChange={handlePaginationChange}
          prevItem={{ content: <Icon name='angle left' />, icon: true }}
          nextItem={{ content: <Icon name='angle right' />, icon: true }}
          totalPages={data.locations.info.pages}
        />
      </Container>
    </Container>
  );
}

const locationsWrapper = graphql(GET_LOCATIONS)(Locations);
export default locationsWrapper;
