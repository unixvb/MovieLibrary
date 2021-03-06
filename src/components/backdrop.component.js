import React from 'react';
import {Image} from 'react-bootstrap';

import {IMG_URL, IMG_W1000} from '../consts';

export default function BackdropComponent(props) {
    const style = {
        borderRadius: '4px',
        margin: '0 auto 20px auto'
    };

    return (
        <Image key={props.id}
               src={IMG_URL + IMG_W1000 + props.path}
               style={style}
               responsive/>
    );
}