import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MovieList from '../pages/MovieList';
import MovieDetails from '../pages/MovieDetails';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={MovieList}></Route>
        <Route path="/movie-details/:id+" component={MovieDetails}></Route>
    </Switch> 
)

export default Routes;