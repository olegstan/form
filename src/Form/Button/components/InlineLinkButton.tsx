import React from 'react';
// @ts-ignore
import {InlineLink} from './../styles';
import BaseButton from "./BaseButton";

const InlineLinkButton = (props: any) => {
    return (
        <BaseButton Component={InlineLink} {...props} />
    );
};

export default InlineLinkButton;