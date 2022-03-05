import axios from "axios";
import propTypes from "prop-types";
import { Component } from "react";
import styles from "./Reviews.module.css";

const API_KEY = '170b9b9397b0574b7d603cba918ea1f4';

export default class Reviews extends Component {
    state = {
        reviews: [],
    };

    componentDidMount() {
        const movieId = this.props.match.params.movieId;
        axios
            .get(`/movie/${movieId}/reviews?api_key=${API_KEY}`)
            .then(response => this.setState({ reviews: response.data.results }))
            .catch(error => console.error(error));
    }

    render() {
        return (
            <>
                {this.state.reviews.length === 0 && <h3 className={styles.defaultTitle}>We don`t have any reviews for this movie</h3>}

                {this.state.reviews.length > 0 && <ul className={styles.reviewsList}>

                    {this.state.reviews.map(({ id, author, content, updated_at }) => {

                        updated_at = new Date(updated_at);

                        return (
                            <li key={id}>
                                <h3><b>Author:</b> {author} ({updated_at.getFullYear()})</h3>
                                <p>{content}</p>
                            </li>
                        );
                    })}
                </ul>
                }
            </>
        );
    }
}

Reviews.propTypes = {
    match: propTypes.object.isRequired,
}