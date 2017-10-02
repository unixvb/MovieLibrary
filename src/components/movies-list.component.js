import React, {Component} from 'react';
import {Link} from 'react-router';
import {Row, Col} from 'react-bootstrap';
import PosterComponent from "./poster.component";

export default class MoviesListComponent extends Component {
    render() {
        const style = {
            margin: '0 -15px',
            display: 'flex',
            flexWrap: 'wrap'
        };

        let movies = this.props.movies.filter(function (movie) {
            return movie.poster_path !== null;
        }).map(function (movie) {
            return (
                <Col sm={6} md={3}
                     key={movie.id}>
                    <div className="thumbnail">
                        <Link to={'/movie/' + movie.id}>
                            <PosterComponent id={movie.id}
                                             path={movie.poster_path}
                                             responsive/>
                            <div className="caption">
                                <h3>{movie.title}</h3>
                                <p>{movie.overview.substr(0, 70) + '...'}</p>
                            </div>
                        </Link>
                    </div>
                </Col>
            );
        });

        return (
            <Row style={style}>
                {movies}
            </Row>
        );
    }
}