import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import {
  Container, Card, Image, Divider, Header, Table
} from 'semantic-ui-react';
import Loading from '../../components/loading/loading';
import Error from '../error';
import GET_CHARACTER from '../../graphql/queries/getCharacter';

function Character({ match }) {
  const characterId = Number(match.params.id);
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id: characterId }
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
          <Image src={data.character.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{data.character.name}</Card.Header>
            <Card.Meta>
              <p>
                Status{' '}
                <span style={{ color: data.character.status !== 'Alive' ? '#FE2C54' : '#0CB577' }}>
                  {data.character.status}
                </span>
              </p>
            </Card.Meta>
            <Divider />
            <Card.Description>
              <p>
                Location: <span>{data.character.location.name || 'No data'}</span>
              </p>
              <p>
                Origin: <span>{data.character.origin.name}</span>
              </p>
              <p>
                Gender: <span>{data.character.gender}</span>
              </p>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <p>
              Species <span style={{ color: '#CFAF7B' }}>{data.character.species}</span>
            </p>
          </Card.Content>
        </Card>
      ) : (
        <h1>Loading</h1>
      )}
      <Container>
        <Header as='h2'>Appearing episodes</Header>
        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Air date</Table.HeaderCell>
              <Table.HeaderCell>Episode</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data ? (
              data.character.episode.map((episode) => (
                <Table.Row key={episode.name}>
                  <Table.Cell>{episode.name}</Table.Cell>
                  <Table.Cell>{episode.air_date}</Table.Cell>
                  <Table.Cell>{episode.episode}</Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell>Loading...</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Container>
    </Container>
  );
}

const characterWrapper = graphql(GET_CHARACTER)(Character);
export default characterWrapper;

// PropTypes

Character.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) })
};

Character.defaultProps = {
  match: 1
};
