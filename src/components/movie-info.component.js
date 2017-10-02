import React from 'react'
import {Row, Col, Glyphicon} from 'react-bootstrap'
import {sendMovieRating} from '../actions/index';
import NumericInput from 'react-numeric-input';

export default function MovieInfoComponent(props) {
    let value = 8.5;
    const style = {
        // paddingLeft: '15px'
    };
    const h1Style = {
        fontWeight: 'bold',
        textTransform: 'uppercase'
    };

    function onChange(num) {
        value = num;
    }

    return (
        <div style={style}>
            <Row>
                <h1 style={h1Style}> {props.movie.title} </h1>
                <Col xs={8}>
                    <h3>{props.movie.release_date.substring(0, 4)}</h3>
                </Col>
                <Col xs={2}>
                    <h3>
                        <Glyphicon glyph={'star'}/>
                        {props.movie.vote_average}
                    </h3>
                </Col>
                <Col xs={2}>
                    <h3>
                        <Glyphicon glyph={'heart'}/>
                        {props.movie.vote_count}
                    </h3>
                </Col>
                <Col xs={8}>
                </Col>
                <Col xs={2}>
                    <NumericInput min={1}
                                  max={10}
                                  step={0.5}
                                  precision={1}
                                  value={8.5}
                                  onChange={onChange}
                                  readOnly={true}
                                  className="form-control"/>
                </Col>
                <Col xs={2}>
                    <button className="btn btn-default"
                            onClick={() => {
                                sendMovieRating(props.movie.id, value)
                            }}>Rate this movie
                    </button>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h3>Overview</h3>
                    <p>
                        {props.movie.overview}
                    </p>
                </Col>
            </Row>
        </div>
    );
}
