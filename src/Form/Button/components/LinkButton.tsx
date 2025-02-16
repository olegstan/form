import React from 'react';
import {ButtonLink} from './../styles';
import BaseButton from "./BaseButton";

const LinkButton = (props) => {
    return (
        <BaseButton Component={ButtonLink} {...props} />
    );
};

export default LinkButton;