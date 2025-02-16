import React from 'react';
import {InlineLink} from './../styles';
import BaseButton from "./BaseButton";

const InlineLinkButton = (props) => {
    return (
        <BaseButton Component={InlineLink} {...props} />
    );
};

export default InlineLinkButton;