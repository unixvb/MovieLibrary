import React from 'react';
import {Thumbnail} from 'react-bootstrap';

import {IMG_URL, IMG_W150} from "../consts";

export default function CastListComponent({data}) {
    let casts = data.map(function (cast) {
        if (cast.profile_path !== null) {
            return (
                <div key={cast.id}
                    style={{
                    margin: '0 auto',
                    padding: '0 10px'
                }}>
                    <Thumbnail src={IMG_URL + IMG_W150 + cast.profile_path}
                               alt={cast.name}>
                        <p>{cast.name}</p>
                    </Thumbnail>
                </div>
            );
        }
    });

    return (
        <div>
            <h3>Casts</h3>
            <div style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                marginTop: '15px'
            }}>
                {casts}
            </div>
        </div>
    );
}
