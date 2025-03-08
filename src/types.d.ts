import React from 'react';
import {
    DateInputProps,
    DateTimeInputProps,
    MaskedInputProps,
    NumberInputProps,
    InputProps,
    CheckboxProps,
    FileInputProps,
    SelectProps,
    MultiSelectProps,
    GroupSelectProps,
    SearchProps,
    GroupSearchProps,
    TextAreaProps,
    ButtonProps,
    LinkButtonProps,
    InlineLinkButtonProps,
    HrefButtonProps,
} from './types';

declare module 'finform' {
    // Определение типов для компонентов
    export const DateInput: React.FC<DateInputProps>;
    export const DateTimeInput: React.FC<DateTimeInputProps>;
    export const MaskedInput: React.FC<MaskedInputProps>;
    export const NumberInput: React.FC<NumberInputProps>;
    export const Input: React.FC<InputProps>;
    export const Checkbox: React.FC<CheckboxProps>;
    export const FileInput: React.FC<FileInputProps>;
    export const Select: React.FC<SelectProps>;
    export const MultiSelect: React.FC<MultiSelectProps>;
    export const GroupSelect: React.FC<GroupSelectProps>;
    export const Search: React.FC<SearchProps>;
    export const GroupSearch: React.FC<GroupSearchProps>;
    export const TextArea: React.FC<TextAreaProps>;
    export const InputContainer: React.FC<any>;
    export const Button: React.FC<any>;
    export const LinkButton: React.FC<any>;
    export const InlineLinkButton: React.FC<any>;
    export const HrefButton: React.FC<any>;

}