import React, {Component} from 'react';
import {fetchMoviesList} from '../actions';
import {connect} from 'react-redux';
import {MoviesList} from "../components";

class MoviesContainer extends Component {
    componentDidMount() {
        if (!this.props.params.keyword) {
            const {dispatch} = this.props;
            dispatch(fetchMoviesList());
        }
    }

    render() {
        const {movies} = this.props;
        return (
            <MoviesList movies={movies}/>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const {movieList} = state;
    const {isFetcing_movieList, items: movies, error_movieList} = movieList;

    const keyword = ownProps.params.keyword;
    return {movies, keyword}
}

export default connect(mapStateToProps)(MoviesContainer);