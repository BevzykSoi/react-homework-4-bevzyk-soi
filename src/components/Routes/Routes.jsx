import { lazy } from 'react';
import { Route, Switch } from "react-router-dom";

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const NotFound = lazy(() => import('components/NotFound/NotFound'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage/MovieDetailsPage'));

const Routes = () => {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route component={NotFound} />
      </Switch>
    );  
};

export default Routes;