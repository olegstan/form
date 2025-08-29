import React from 'react';
// @ts-ignore
import { StyledCheckbox } from './styles';
import BaseCheckbox from './BaseCheckbox';
import CheckboxProps from '../types/CheckboxProps';

const Checkbox: React.FC<CheckboxProps> = (props) => {
    return <BaseCheckbox {...props} StyledComponent={StyledCheckbox} />;
};

export default Checkbox;