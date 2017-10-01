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

    //
    // componentWillReceiveProps(nextProps) {
    //     const {dispatch} = this.props;
    //     if(nextProps.params.keyword && this.props.params.keyword !== nextProps.params.keyword) {
    //         dispatch(searchMovieList(nextProps.params.keyword));
    //     }
    // }


    // shouldComponentUpdate(nextProps, nextState){
    //     if(this.props.movies !== nextProps.movies) {
    //         return true;
    //     }
    //     return false;
    // }

    render() {
        const {movies} = this.props;
        return (
            <MoviesList movies={movies}/>
        );
        // if(movies.length > 0) {
        // } else {
        // return (<DisplayMsg />);
        // }
    }
}

function mapStateToProps(state, ownProps) {
    const {movieList} = state;
    const {isFetcing_movieList, items: movies, error_movieList} = movieList;

    const keyword = ownProps.params.keyword;
    return {movies, keyword}
}

export default connect(mapStateToProps)(MoviesContainer);