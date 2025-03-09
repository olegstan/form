import React from 'react';
// @ts-ignore
import {ButtonLink} from './../styles';
import BaseButton from "./BaseButton";

const LinkButton = (props: any) => {
    return (
        <BaseButton Component={ButtonLink} {...props} />
    );
};

export default LinkButton;