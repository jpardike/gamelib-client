import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import GameList from '../pages/GameList';
import GameShow from '../pages/GameShow';
import NewGame from '../pages/NewGame';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route exact path='/games' component={ GameList } />
    <Route exact path='/games/new' component={ NewGame } />
    <Route path='/games/:id' component={ GameShow } />
  </Switch>
)