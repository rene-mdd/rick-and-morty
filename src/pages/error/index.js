import { Message } from 'semantic-ui-react';

export default function Error() {
  return (
    <>
      <Message warning>
        <Message.Header>There was an error fetching the data</Message.Header>
        <p>Please check your internet connection or try again later.</p>
      </Message>
    </>
  );
}
