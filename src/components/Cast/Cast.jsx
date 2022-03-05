import axios from "axios";
import { Component } from "react";
import styles from './Cast.module.css';
import defaultCast from "../../static/defaultCast.jpg";
import propTypes from "prop-types";

const API_KEY = '170b9b9397b0574b7d603cba918ea1f4';

export default class Cast extends Component {
    state = {
        cast: [],
    };

    componentDidMount() {
        const movieId = this.props.match.params.movieId;
        axios
            .get(`/movie/${movieId}/credits?api_key=${API_KEY}`)
            .then(response => this.setState({ cast: response.data.cast }))
            .catch(error => console.error(error));
    }

    render() {
        const { cast } = this.state;

        return (
            <ul className={styles.castList}>
                {cast.map(({ id, name, profile_path, character }) => {

                    if (!profile_path) {
                        profile_path = defaultCast;
                    } else {
                        profile_path = `https://image.tmdb.org/t/p/original${profile_path}`;
                    }

                    return (
                        <li key={id}>
                            <img src={profile_path} alt={name} />

                            <div className={styles.actorDesc}>
                                <h3><b>Actor:</b> {name}</h3>
                                <h3><b>Character:</b> {character}</h3>
                            </div>

                        </li>
                    );
                })}
            </ul>
        );
    }
}

Cast.propTypes = {
    match: propTypes.object.isRequired,
}