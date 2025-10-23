import React from 'react';
// @ts-ignore
import {StyledRoundCheckbox} from './styles';
import BaseCheckbox from './BaseCheckbox';
import CheckboxProps from '../types/CheckboxProps';

const RoundCheckbox: React.FC<CheckboxProps> = (props) => {
    return <BaseCheckbox {...props} StyledComponent={StyledRoundCheckbox} />;
};

export default RoundCheckbox;