import { Component } from 'react';
import styles from './MovieDetailsPage.module.css';
import defaultMovie from "../../static/defaultMovie.jpg";

import axios from 'axios';

const API_KEY = '170b9b9397b0574b7d603cba918ea1f4';

export default class MovieDetailsPage extends Component {
  state = {};

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;

    await axios
      .get(`movie/${movieId}?api_key=${API_KEY}`)
      .then(response => this.setState(response.data))
      .catch(error => console.error(error));
  }

  render() {
    let { title, poster_path } = this.state;

    if (!poster_path) {
      poster_path = defaultMovie;
    } else {
      poster_path = `https://image.tmdb.org/t/p/original${poster_path}`;
    }

    return (
      <>
        <img src={poster_path} alt={title} />
        <h2>{title}</h2>
      </>
    );
  }
}
