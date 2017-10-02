import React, { Component } from 'react';
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

    componentWillReceiveProps(nextProps) {
        const {dispatch} = this.props;
        if(nextProps.params.id && this.props.params.id !== nextProps.params.id) {
            dispatch(fetchMovieDetail(nextProps.params.id));
            dispatch(fetchCastList(nextProps.params.id));
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.props.movie.id !== nextProps.movie.id) {
          //console.log('shouldComponentUpdate');
          return true;
        }
        return false;
    }

    render() {
        const {movie, casts, isFetcing_movie, isFetcing_casts} = this.props;

        if(isFetcing_movie || isFetcing_casts) {
            return <p>Loading...</p>
        }
        if(movie.hasOwnProperty('id')) {
            return(
                <Grid fluid={false}>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <BackdropComponent id={movie.id} path={movie.backdrop_path} responsive />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} md={12}>
                            <MovieInfoComponent movie={movie}/>
                            <CastListComponent data={casts.slice(0,5)} />
                        </Col>
                    </Row>
                </Grid>
            );
        } else
            return null;

    }
}

function mapStateToProps(state){
    const {movieDetail, castList} = state;
    const {isFetcing_movie, item: movie, error_movie} = movieDetail;
    const {isFetcing_casts, items: casts, error_casts} = castList;

    return {isFetcing_movie, movie, error_movie, isFetcing_casts, casts, error_casts}
}

export default connect(mapStateToProps)(MovieDetails);