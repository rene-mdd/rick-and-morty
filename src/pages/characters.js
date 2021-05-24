import { useState } from 'react';
import { useQuery } from '@apollo/client';
import {
  Table, Container, Button, Pagination, Icon
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Loading from './loading';
import Error from './error';
import GET_CHARACTERS from '../graphql/queries/getCharacters';

export default function Characters() {
  const [page, setCurrentPage] = useState(1);

  const handlePaginationChange = (e, { activePage }) => {
    setCurrentPage(activePage);
  };

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page }
  });

  if (loading) {
    return <Loading />;
  } if (error) {
    return <Error />;
  } return (
    <Container>
      <Container>
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Species</Table.HeaderCell>
              <Table.HeaderCell>Origin</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data ? (
              data.characters.results.map((character) => (
                <Table.Row key={`${character.name}-${character.id}`}>
                  <Table.Cell>{character.name}</Table.Cell>
                  <Table.Cell>{character.species}</Table.Cell>
                  <Table.Cell>{character.origin.name}</Table.Cell>
                  <Table.Cell>{character.location.name}</Table.Cell>
                  <Table.Cell textAlign='center'>
                    <Link to={{
                      pathname: `/character/${character.id}`,
                      param: character.id
                    }}
                    >
                      <Button primary>View</Button>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))) : (
                <p>Loading...</p>)}
          </Table.Body>
        </Table>
      </Container>
      <Container textAlign='center'>
        <Pagination
          activePage={page}
          onPageChange={handlePaginationChange}
          prevItem={{ content: <Icon name='angle left' />, icon: true }}
          nextItem={{ content: <Icon name='angle right' />, icon: true }}
          totalPages={data.characters.info.pages}
        />
      </Container>
    </Container>
  );
}
