// finform/NewForm.d.ts

import React from 'react';
import CheckboxProps from '../Form/types/CheckboxProps';
import DateInputProps from '../Form/types/DateInputProps';
import DateTimeInputProps from '../Form/types/DateTimeInputProps';
import FileInputProps from '../Form/types/FileInputProps';
import InputProps from '../Form/types/InputProps';
import MaskedInputProps from '../Form/types/MaskedInputProps';
import NumberInputProps from '../Form/types/NumberInputProps';
import SearchProps from '../Form/types/SearchProps';
import SelectProps from '../Form/types/SelectProps';
import TextAreaProps from '../Form/types/TextAreaProps';

declare module 'finform/NewForm' {
    // Экспорт компонента Checkbox с типами из types/CheckboxProps.ts
    export const Checkbox: React.FC<CheckboxProps>;

    // Экспорт компонента DateInput с типами из types/DateInputProps.ts
    export const DateInput: React.FC<DateInputProps>;

    // Экспорт компонента DateTimeInput с типами из types/DateTimeInputProps.ts
    export const DateTimeInput: React.FC<DateTimeInputProps>;

    // Экспорт компонента FileInput с типами из types/FileInputProps.ts
    export const FileInput: React.FC<FileInputProps>;

    // Экспорт компонента Input с типами из types/InputProps.ts
    export const Input: React.FC<InputProps>;

    // Экспорт компонента MaskedInput с типами из types/MaskedInputProps.ts
    export const MaskedInput: React.FC<MaskedInputProps>;

    // Экспорт компонента NumberInput с типами из types/NumberInputProps.ts
    export const NumberInput: React.FC<NumberInputProps>;

    // Экспорт компонента Search с типами из types/SearchProps.ts
    export const Search: React.FC<SearchProps>;

    // Экспорт компонента Select с типами из types/SelectProps.ts
    export const Select: React.FC<SelectProps>;

    // Экспорт компонента TextArea с типами из types/TextAreaProps.ts
    export const TextArea: React.FC<TextAreaProps>;
}