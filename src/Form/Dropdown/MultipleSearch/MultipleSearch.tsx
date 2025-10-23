import React, {useCallback, useRef, useState, useEffect} from 'react';

import MultiValue from './components/MultiValue';

import useBaseInput from '../../hooks/useBaseInput';

import MultiSearchProps from '../../types/MultiSearchProps';
import {StyledSelect} from "./styles";
import useInputClassNames from "../../hooks/useInputClassNames";

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
    const [SelectComponent, setSelectComponent] = useState<any>(null);
    const [CreatableComponent, setCreatableComponent] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const selectRef = useRef<any>(null);

    // Динамический импорт через useEffect
    useEffect(() => {
        const loadComponents = async () => {
            try {
                const [selectModule, creatableModule] = await Promise.all([
                    import('react-select'),
                    import('react-select/creatable')
                ]);

                setSelectComponent(() => selectModule.default);
                setCreatableComponent(() => creatableModule.default);
            } catch (error) {
                console.error('Failed to load select components:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadComponents();
    }, []);

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

    const selectOptions = Array.isArray(options)
        ? options.map(option => ({
            value: option.id ?? '',
            label: option.name ?? ''
        }))
        : [];

    const inputClassName = useInputClassNames(className, focused, error, disabled);

    // Показываем загрузку пока компоненты не загружены
    if (isLoading || !SelectComponent || !CreatableComponent) {
        return <StyledSelect><div>Loading...</div></StyledSelect>;
    }

    const Component = allowAdd ? CreatableComponent : SelectComponent;

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
                formatCreateLabel={(inputValue: any) => `Создать новый тег: "${inputValue}"`}
                allowCreateWhileLoading={false}
                isDisabled={disabled}
            />
        </StyledSelect>
    );
};

MultipleSearch.displayName = 'MultipleSearch';

export default MultipleSearch;