import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import EventState from './context/events/EventState';

import Home from './components/Home'

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import AddEvent from './components/AddEvent';
import NotFound from './components/NotFound';

function App() {

  useEffect(() => {
    M.AutoInit();
  }, [])

  return (
    <EventState>
      <Router>
      <div className="container center">
        <Redirect from='/' to='/home' />
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/add-event' component={AddEvent} />
          <Route exact path='*' component={NotFound} />
        </Switch>
      </div>
      </Router>
    </EventState>
  );
}

export default App;
