import axios from 'axios';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './HomePage.module.css';
import defaultMovie from "../../static/defaultMovie.jpg";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '170b9b9397b0574b7d603cba918ea1f4';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    await axios
      .get(`/trending/movie/week?api_key=${API_KEY}`)
      .then(response => this.setState({ movies: response.data.results }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <>
        <h2 className={styles.trendingTitle}>Trending movies:</h2>
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
                  <Link to={`movies/${id}`}>
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
      </>
    );
  }
}
