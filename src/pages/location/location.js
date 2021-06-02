import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import {
  Container, Card, Divider, Header, Table
} from 'semantic-ui-react';
import Loading from '../../components/loading/loading';
import Error from '../error';
import GET_LOCATION from '../../graphql/queries/getLocation';

function Location({ match }) {
  const locationId = Number(match.params.id);
  const { loading, error, data } = useQuery(GET_LOCATION, {
    variables: { id: locationId }
  });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Container>
      {data ? (
        <Card centered>
          <Card.Content textAlign='center'>
            <Card.Header>{data.location.name}</Card.Header>
            <Card.Meta>
              <p>Type: {data.location.type}</p>
            </Card.Meta>
            <Divider />
            <Card.Description>
              <p>Dimension: {data.location.dimension}</p>
            </Card.Description>
          </Card.Content>
          <Card.Content extra textAlign='center'>
            <p>Information</p>
          </Card.Content>
        </Card>
      ) : (
        <h1>Loading</h1>
      )}
      <Container>
        <Header as='h2'>Residents</Header>
        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Species</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data ? (
              data.location.residents.map((resident) => (
                <Table.Row key={`${resident.name} ${resident.id}`}>
                  <Table.Cell>{resident.name}</Table.Cell>
                  <Table.Cell>{resident.species}</Table.Cell>
                  <Table.Cell>
                    <span style={{ color: resident.status !== 'Alive' ? '#FE2C54' : '#0CB577' }}>
                      {resident.status}
                    </span>
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              null
            )}
          </Table.Body>
        </Table>
      </Container>
    </Container>
  );
}

const locationWrapper = graphql(GET_LOCATION)(Location);
export default locationWrapper;

// PropTypes

Location.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) })
};

Location.defaultProps = {
  match: 1
};
