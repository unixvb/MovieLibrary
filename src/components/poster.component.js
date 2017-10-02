import React from 'react';
import {Image} from 'react-bootstrap';

import {IMG_URL, IMG_W342} from '../consts';

export default function PosterComponent(props) {
    const style = {
        borderRadius: '4px 4px 0 0'
    };

    return (
        <Image key={props.id}
               src={IMG_URL + IMG_W342 + props.path}
               style={style}
               responsive/>
    );
}