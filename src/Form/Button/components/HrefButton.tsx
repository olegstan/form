import React from 'react';
import { Link } from './../styles';
import BaseButton from "./BaseButton";
import {BaseButtonCommonProps, LinkElementProps} from "../../types/button.types";

export type HrefButtonProps = BaseButtonCommonProps & Omit<LinkElementProps, 'children'> & {
    href: string; // Обязательный для ссылок
};

const HrefButton: React.FC<HrefButtonProps> = (props) => {
    return <BaseButton Component={Link} {...props} />;
};

export default HrefButton;