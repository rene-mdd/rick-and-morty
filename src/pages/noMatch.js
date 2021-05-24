import { Message, Container } from 'semantic-ui-react';

export default function noMatch() {
  return (
    <Container>
      <Message negative>
        <Message.Header>Sorry, this page is not available.</Message.Header>
        <p>Try another or go back.</p>
      </Message>
    </Container>
  );
}
