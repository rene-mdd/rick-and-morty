import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import SemanticMenu from './components/semanticMenu';
import Characters from './pages/characters/characters';
import Episodes from './pages/episodes/episodes';
import Locations from './pages/locations/locations';
import Character from './pages/character/character';
import Episode from './pages/episode/episode';
import Location from './pages/location/location';
import NoMatch from './pages/noMatch';

export default function App() {
  return (
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
  );
}
