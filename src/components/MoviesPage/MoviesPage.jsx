import axios from 'axios';
import { Component } from 'react';
import styles from './MoviesPage.module.css';
import { Link } from 'react-router-dom';

import defaultMovie from '../../static/defaultMovie.jpg';

const API_KEY = '170b9b9397b0574b7d603cba918ea1f4';

export default class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = async event => {
    const { query } = this.state;

    event.preventDefault();

    await axios
      .get(`search/movie?api_key=${API_KEY}&language=en-US&query=${query}`)
      .then(response => this.setState({ movies: response.data.results }))
      .catch(error => console.error(error));

    this.setState({ query: '' });
  };

  render() {
    const { query, movies } = this.state;

    return (
      <>
        <h2 className={styles.searchTitle}>Search movies:</h2>
        <form onSubmit={this.handleSubmit} className={styles.searchForm}>
          <input
            type="text"
            placeholder="Enter the name of a film"
            value={query}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>

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
                  <Link to={`movies/${id}`}>
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
    );
  }
}
