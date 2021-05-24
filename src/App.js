/* eslint-disable react/jsx-props-no-spreading */
import {
  ApolloClient, InMemoryCache, ApolloProvider
} from '@apollo/client';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import SemanticMenu from './components/semanticMenu';
import Characters from './pages/characters';
import Episodes from './pages/episodes';
import Locations from './pages/locations';
import Character from './pages/character';
import Episode from './pages/episode';
import Location from './pages/location';
import NoMatch from './pages/noMatch';

export default function App() {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={client}>
      <div>
        <Router>
          <SemanticMenu />
          <Switch>
            <Route exact path='/' render={(routeProps) => <Characters {...routeProps} />} />
            <Route path='/character/:id' render={(routeProps) => <Character {...routeProps} />} />
            <Route path='/episodes' render={(routeProps) => <Episodes {...routeProps} />} />
            <Route path='/episode/:id' render={(routeProps) => <Episode {...routeProps} />} />
            <Route path='/locations' render={(routeProps) => <Locations {...routeProps} />} />
            <Route path='/location/:id' render={(routeProps) => <Location {...routeProps} />} />
            <Route render={() => <NoMatch to='/' />} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}
