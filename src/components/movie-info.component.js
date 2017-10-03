import React from 'react'
import {Glyphicon} from 'react-bootstrap'
import NumericInput from 'react-numeric-input';
import {Link} from "react-router";

import {sendMovieRating} from '../actions/index';

export default function MovieInfoComponent(props) {
    let value = 8.5;

    const h1Style = {
        width: '100%',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    };

    const flexDivStyle = {
        width: '100%',
        display: 'flex',
        margin: '15px auto'
    };

    function onChange(num) {
        value = num;
    }

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            <h1 style={h1Style}> {props.movie.title} </h1>
            <div style={flexDivStyle}>
                <h3 style={{margin: '0 auto 0 0'}}>
                    {props.movie.release_date.substring(0, 4)}
                </h3>
                <h3 style={{margin: '0 5% 0 auto'}}>
                    <Glyphicon glyph={'star'}/>
                    {props.movie.vote_average}
                </h3>
                <h3 style={{margin: '0 0 0 5%'}}>
                    <Glyphicon glyph={'heart'}/>
                    {props.movie.vote_count}
                </h3>
            </div>
            <div style={flexDivStyle}>
                <Link to="/" style={{margin: '0 auto 0 0'}}>
                    <button type="button" className="btn default btn-xs">Back to main page</button>
                </Link>
                <NumericInput min={1}
                              max={10}
                              step={0.5}
                              precision={1}
                              value={8.5}
                              onChange={onChange}
                              readOnly={true}
                              className="form-control"
                              style={{margin: '0 2% 0 auto'}}/>
                <button className="btn btn-primary btn-sm"
                        style={{margin: '0 0 0 2%'}}
                        onClick={() => {
                            sendMovieRating(props.movie.id, value)
                        }}>
                    Rate
                </button>
            </div>
            <h3>Overview</h3>
            <p>{props.movie.overview}</p>
        </div>
    );
}
