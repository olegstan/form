import React from 'react';
import { InlineLink } from './../styles';
import BaseButton from "./BaseButton";
import {BaseButtonCommonProps, LinkElementProps} from "../../types/button.types";

export type InlineLinkButtonProps = BaseButtonCommonProps & Omit<LinkElementProps, 'children'>;

const InlineLinkButton: React.FC<InlineLinkButtonProps> = (props) => {
    return <BaseButton Component={InlineLink} {...props} />;
};

export default InlineLinkButton;