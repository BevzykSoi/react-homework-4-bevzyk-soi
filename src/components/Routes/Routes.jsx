import { Route, Switch } from "react-router-dom";

import HomePage from 'components/HomePage/HomePage';
import NotFound from 'components/NotFound/NotFound';
import MoviesPage from 'components/MoviesPage/MoviesPage';
import MovieDetailsPage from "components/MovieDetailsPage/MovieDetailsPage";

const Routes = () => {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" render={props => <MovieDetailsPage {...props} />} />
        <Route component={NotFound} />
      </Switch>
    );  
};

export default Routes;