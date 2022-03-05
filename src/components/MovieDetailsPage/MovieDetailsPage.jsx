import { Component, lazy, Suspense } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import styles from './MovieDetailsPage.module.css';
import defaultMovie from "../../static/defaultMovie.jpg";
import defaultCompany from "../../static/defaultCompany.jfif";

import axios from 'axios';
import propTypes from 'prop-types';

const Cast = lazy(() => import("components/Cast/Cast"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '170b9b9397b0574b7d603cba918ea1f4';

export default class MovieDetailsPage extends Component {
  state = {
    loading: true,
    info: {}
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;

    setTimeout(() => {
      axios
        .get(`movie/${movieId}?api_key=${API_KEY}`)
        .then(response => this.setState({ info: response.data }))
        .catch(error => console.error(error))
        .finally(() => this.setState({ loading: false, }))
    }, 500);
  }

  goBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from);
  }

  render() {
    let { title, id, poster_path, overview, backdrop_path, release_date, tagline, homepage, vote_average, genres, production_companies } = this.state.info;

    if (!title) {
      return null;
    }

    if (!poster_path) {
      poster_path = defaultMovie;
    } else {
      poster_path = `https://image.tmdb.org/t/p/original${poster_path}`;
    }

    if (!backdrop_path) {
      backdrop_path = defaultCompany;
    } else {
      backdrop_path = `https://image.tmdb.org/t/p/original${backdrop_path}`;
    }

    release_date = new Date(release_date);

    return (
      <>
        <div className={styles.movie} style={{
          backgroundImage: `url(${backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(0, 0, 0, 0.80)",
          backgroundBlendMode: "darken",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }
        }>
          <div className={styles.movieMain}>
            <button type='button' onClick={this.goBack}>&#8592; Go back</button>
            <img src={poster_path} alt={title} className={styles.poster} />
          </div>

          <div className={styles.movieDesc}>
            <h2 className={styles.movieTitle}>{title} ({release_date.getFullYear()})</h2>
            <p className={styles.movieOverview}><b>Description:</b> {overview}</p>
            <h3><b>Rating:</b> {vote_average}</h3>
            <h3><b>Tagline:</b> "<i>{tagline}</i>"</h3>
            <h3><b>Homepage:</b> <a href={homepage}>{homepage}</a></h3>
            <h3><b>Genres:</b> </h3>
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
            <h3><b>Production companies:</b></h3>
            <div className={styles.production}>
              <ul>
                {production_companies.map(({ id, logo_path, name, origin_country }) => {
                  if (!logo_path) {
                    logo_path = defaultCompany;
                  } else {
                    logo_path = `https://image.tmdb.org/t/p/original${logo_path}`;
                  }

                  return (
                    <li key={id}>
                      <img src={logo_path} alt={name} />
                      <h5><b>{name}</b> {origin_country ? `(${origin_country})` : ""}</h5>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div >
        <div className={styles.additional}>
          <h2>Additional information:</h2>
          <div className={styles.information}>

            <NavLink to={{ pathname: `/movies/${id}/cast`, state: { from: this.props.location } }} className={styles.informationLink} activeClassName={styles.activeInformationLink}>Cast</NavLink>
            <NavLink to={{ pathname: `/movies/${id}/reviews`, state: { from: this.props.location } }} className={styles.informationLink} activeClassName={styles.activeInformationLink}>Reviews</NavLink>
          </div>

        </div>

        <Suspense fallback={<TailSpin
          heigth="100"
          width="100"
          color="#ce0b0b"
          ariaLabel="loading"
          wrapperClass="loader"
        />}>
          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
        </Suspense>
      </>
    );
  }
}

MovieDetailsPage.propTypes = {
  match: propTypes.object.isRequired,
  location: propTypes.object.isRequired,
  history: propTypes.object.isRequired,
}