import React from 'react';
import {Link} from './../styles';
import BaseButton from "./BaseButton";

const HrefButton = (props) => {
    return (
        <BaseButton Component={Link} {...props} />
    );
};

export default HrefButton;