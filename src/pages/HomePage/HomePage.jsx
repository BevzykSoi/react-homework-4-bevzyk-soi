import axios from 'axios';
import propTypes from 'prop-types';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

import styles from './HomePage.module.css';
import defaultMovie from "../../static/defaultMovie.jpg";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '170b9b9397b0574b7d603cba918ea1f4';

export default class HomePage extends Component {
  state = {
    movies: [],
    loading: true
  };

  componentDidMount() {
    setTimeout(() => {
      axios
        .get(`/trending/movie/day?api_key=${API_KEY}`)
      .then(response => this.setState({ movies: response.data.results, loading: false }))
      .catch(error => console.error(error))
    },
      500);

  }

  render() {
    const { loading } = this.state;

    return (
      <>
        <h2 className={styles.trendingTitle}>Trending today:</h2>
        {loading && <TailSpin
          heigth="100"
          width="100"
          color="#ce0b0b"
          ariaLabel="loading"
          wrapperClass="loader"
        />}
        {this.state.movies.length > 0 &&
          <ul className={styles.movieList}>
            {this.state.movies.map(
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
                          src={`https://image.tmdb.org/t/p/original${poster_path}`}
                          alt=""
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
        }

      </>
    );
  }
}

HomePage.propTypes = {
  location: propTypes.object.isRequired,
}