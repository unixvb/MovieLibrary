import React from 'react';
import {Col} from 'react-bootstrap';
import {IMG_URL, IMG_W150} from "../consts";
import {Thumbnail} from 'react-bootstrap';

export default function CastListComponent(data) {
    let casts = data.map(function (cast) {
        if (cast.profile_path !== null) {
            return (
                <Col xs={4} sm={3} md={2} key={cast.id}>
                    <Thumbnail src={IMG_URL + IMG_W150 + cast.profile_path}
                               alt={cast.name}>
                        <p>{cast.name}</p>
                    </Thumbnail>
                </Col>
            );
        }
    });

    return (
        <div>
            <h3>Casts</h3>
            {casts}
        </div>
    );
}
