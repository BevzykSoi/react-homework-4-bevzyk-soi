import axios from 'axios';
import propTypes from 'prop-types';
import { Component } from 'react';
import styles from './MoviesPage.module.css';
import { Link } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

import defaultMovie from '../../static/defaultMovie.jpg';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '170b9b9397b0574b7d603cba918ea1f4';

export default class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
    loading: false,
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = async event => {
    const { query } = this.state;

    //event.preventDefault();

    this.setState({ loading: true, });

    await axios
      .get(`search/movie?api_key=${API_KEY}&language=en-US&query=${query}`)
      .then(response => this.setState({ movies: response.data.results, loading: false, }))
      .catch(error => console.error(error));
  };

  render() {
    let { query, movies, loading } = this.state;

    if (!query) {
      movies = [];
    }

    return (
      <>
        <h2 className={styles.searchTitle}>Search movies:</h2>
        <form onSubmit={this.handleSubmit} className={styles.searchForm}>
          <input
            type="text"
            name="query"
            placeholder="Enter the name of a film"
            value={query}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>

        {loading && <TailSpin
          heigth="100"
          width="100"
          color="#ce0b0b"
          ariaLabel="loading"
          wrapperClass="loader"
        />}
        {movies.length > 0 &&
          <>
            <h3 className={styles.resultsTitle}>Results for query "<b>{query}</b>":</h3>
            <ul className={styles.movieList}>
              {movies.map(
                ({ title, id, poster_path, vote_average, release_date }) => {
                  if (!poster_path) {
                    poster_path = defaultMovie;
                  } else {
                    poster_path = `https://image.tmdb.org/t/p/original${poster_path}`;
                  }

                  return (
                    <li key={id}>
                      <Link to={{
                        pathname: `/movies/${id}`,
                        state: { from: this.props.location },
                      }}>
                        <div className={styles.visibleDesc}>
                          <img
                            src={poster_path}
                            alt={title}
                            className={styles.poster}
                          />
                        </div>

                        <div className={styles.hoverDesc}>
                          <h3>
                            <b>{title}</b>
                          </h3>
                          <br />
                          <h3>
                            Rating: <b>{vote_average}</b>
                          </h3>
                          <br />
                          <h3>
                            Release date: <b>{release_date}</b>
                          </h3>
                        </div>
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </>
        }
      </>
    );
  }
}

MoviesPage.propTypes = {
  location: propTypes.object.isRequired,
}