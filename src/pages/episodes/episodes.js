import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import {
  Table, Container, Button, Pagination, Icon
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Loading from '../../components/loading/loading';
import Error from '../error';
import GET_EPISODES from '../../graphql/queries/getEpisodes';

function Episodes() {
  const [page, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery(GET_EPISODES, {
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
              <Table.HeaderCell>Episode</Table.HeaderCell>
              <Table.HeaderCell>Air date</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data ? (
              data.episodes.results.map((episode) => (
                <Table.Row key={episode.id}>
                  <Table.Cell>{episode.name}</Table.Cell>
                  <Table.Cell>{episode.episode}</Table.Cell>
                  <Table.Cell>{episode.air_date}</Table.Cell>
                  <Table.Cell textAlign='center'>
                    <Link
                      to={{
                        pathname: `/episode/${episode.id}`,
                        param: episode.id
                      }}
                    >
                      <Button primary>View</Button>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              null
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
          totalPages={data.episodes.info.pages}
        />
      </Container>
    </Container>
  );
}

const episodesWrapper = graphql(GET_EPISODES)(Episodes);
export default episodesWrapper;
