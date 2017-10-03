import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Grid, Row} from "react-bootstrap";

import {BackdropComponent, MovieInfoComponent, CastListComponent} from '../components';
import {fetchMovieDetail, fetchCastList} from '../actions';

class MovieDetails extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchMovieDetail(this.props.params.id));
        dispatch(fetchCastList(this.props.params.id));
    }

    render() {
        const {movie, casts, isFetcing_movie, isFetcing_casts} = this.props;

        if (isFetcing_movie || isFetcing_casts) {
            return <p>Loading...</p>
        }

        if (movie.hasOwnProperty('id')) {
            return (
                <div>
                    <div>
                        <BackdropComponent id={movie.id} path={movie.backdrop_path} responsive/>
                    </div>
                    <div>
                        <MovieInfoComponent movie={movie}/>
                        <CastListComponent data={casts.slice(0, 6)}/>
                    </div>
                </div>
            );
        } else
            return null;
    }
}

function mapStateToProps(state) {
    const {movieDetail, castList} = state;
    const {isFetcing_movie, item: movie, error_movie} = movieDetail;
    const {isFetcing_casts, items: casts, error_casts} = castList;
    return {isFetcing_movie, movie, error_movie, isFetcing_casts, casts, error_casts}
}

export default connect(mapStateToProps)(MovieDetails);