import React from 'react';
import {ButtonLink} from './../styles';
import BaseButton from "./BaseButton";
import {BaseButtonCommonProps, LinkElementProps} from "../../types/button.types";

export type LinkButtonProps = BaseButtonCommonProps & Omit<LinkElementProps, 'children'> & {
    to?: string; // Для внутренней навигации
    href?: string; // Для внешних ссылок
};

const LinkButton: React.FC<LinkButtonProps> = (props) => {
    return <BaseButton Component={ButtonLink} {...props} />;
};