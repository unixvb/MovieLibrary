import React from 'react';
import {IMG_URL} from '../consts';
import {Image} from 'react-bootstrap';

export default function BackdropComponent(props) {
    const style = {
        'border-radius': '4px'
    };
    return (
        <Image key={props.id}
               src={IMG_URL + props.path}
               style={style}
               responsive/>
    );
}