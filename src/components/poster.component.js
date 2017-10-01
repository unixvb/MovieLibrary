import React from 'react';
import {IMG_URL} from '../consts';
import {Image} from 'react-bootstrap';

export default function PosterComponent(props) {
    const style = {
        'border-radius': '4px 4px 0 0'
    };
    return (
        <Image key={props.id}
               src={IMG_URL + props.path}
               style={style}
               responsive/>
    );
}