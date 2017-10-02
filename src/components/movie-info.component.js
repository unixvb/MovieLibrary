import React from 'react'
import {Row, Col, Glyphicon} from 'react-bootstrap'
import {sendMovieRating} from "../actions/index";

export default function MovieInfoComponent(props) {
    let value = 8.5;
    const style = {
        // paddingLeft: '15px'
    };
    const h1Style = {
        fontWeight: 'bold',
        textTransform: 'uppercase'
    };

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
                <Col xs={12}>
                    <input type="text" value={value}/>
                    <button onClick={() => {sendMovieRating(props.movie.id, value)}}/>
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
