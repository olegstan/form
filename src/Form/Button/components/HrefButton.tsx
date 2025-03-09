import React from 'react';
// @ts-ignore
import {Link} from './../styles';
import BaseButton from "./BaseButton";

const HrefButton = (props: any) => {
    return (
        <BaseButton Component={Link} {...props} />
    );
};

export default HrefButton;