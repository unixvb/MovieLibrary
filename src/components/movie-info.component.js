import React from 'react'
import {Row, Col, Glyphicon} from 'react-bootstrap'

export default function MovieInfoComponent(props) {
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
            </Row>
            <Row>
                <Col xs={4}>
                    <h3>
                        <Glyphicon glyph={'star'}/>
                        {props.movie.vote_average}
                    </h3>
                </Col>
                <Col xs={4}>
                    <h3>
                        <Glyphicon glyph={'heart'}/>
                        {props.movie.vote_count}
                    </h3>
                </Col>
                <Col xs={4}>
                    <h3>{props.movie.release_date.substring(0, 4)}</h3>
                </Col>
            </Row>
            <Row>
                <h3>Overview</h3>
                <p>
                    {props.movie.overview}
                </p>
            </Row>
        </div>
    );
}
