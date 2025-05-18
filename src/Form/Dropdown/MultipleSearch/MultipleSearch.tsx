import React, {useCallback, useRef, useState} from 'react';

import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import MultiValue from './components/MultiValue';

import useBaseInput from '../../hooks/useBaseInput';

import MultiSearchProps from '../../types/MultiSearchProps';
import {StyledSelect} from "./styles";

const MultipleSearch: React.FC<MultiSearchProps> = ({
                                                        focused = false,
                                                        setFocused = () => {},
                                                        onBlur = () => {},
                                                        onKeyDown = () => {},
                                                        onChange = (newValue: any, action: any) => {},
                                                        onClick = () => {},
                                                        disabled = false,
                                                        className = '',
                                                        style = {},
                                                        id,
                                                        name,
                                                        values = [],
                                                        error,
                                                        options = [],
                                                        search = '',
                                                        onSearch = () => {},
                                                        allowAdd = false,
                                                        handleCreate = (newValue: any) => {}
                                                    }) => {
    const [selectOpen, setSelectOpen] = useState(false);
    const selectRef = useRef<any>(null);

    const {
        handleFocus,
        handleBlur,
        getName,
    } = useBaseInput({
        disabled,
        name,
        onClick,
        onChange,
        setFocused,
        onBlur
    });

    const handleChange = useCallback((newValue: any, action: any) => {
        onChange(newValue, action);
        handleClose();
    }, [onChange]);

    const handleOpen = useCallback(() => {
        setSelectOpen(true);
        setFocused(true);
    }, [setFocused]);

    const handleClose = useCallback(() => {
        setSelectOpen(false);
        setFocused(false);
    }, [setFocused]);
    //
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        // onKeyDown(e);
    }, [onKeyDown]);

    const handleInputChange = useCallback((inputValue: string) => {
        onSearch(inputValue);
    }, [onSearch]);

    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            minHeight: '48px',
            border: 'none',
            boxShadow: 'none',
            background: 'transparent'
        }),
        menu: (provided: any) => ({
            ...provided,
            zIndex: 9999
        })
    };

    const Component = allowAdd ? CreatableSelect : Select;

    const selectOptions = Array.isArray(options)
        ? options.map(option => ({
            value: option.id ?? '',
            label: option.name ?? ''
        }))
        : [];

    const inputClassName = `input ${className}${focused ? ' focused' : ''}${error?.[0] ? ' error' : ''}`;

    return (
        <StyledSelect>
            <Component
                placeholder=""
                id={id}
                components={{
                    MultiValue,
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                    IndicatorsContainer: () => null
                }}
                className={inputClassName}
                isMulti
                noOptionsMessage={() => 'Нет вариантов'}
                value={values}
                options={selectOptions}
                openMenuOnClick={true}
                onMenuOpen={handleOpen}
                onMenuClose={handleClose}
                onChange={handleChange}
                onInputChange={handleInputChange}
                inputValue={search}
                styles={customStyles}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                onCreateOption={handleCreate}
                formatCreateLabel={(inputValue) => `Создать новый тег: "${inputValue}"`}
                allowCreateWhileLoading={false}
                isDisabled={disabled}
            />
        </StyledSelect>
    );
};

MultipleSearch.displayName = 'MultipleSearch';

export default MultipleSearch;