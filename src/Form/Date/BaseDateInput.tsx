import React from 'react';
// @ts-ignore
import useBaseInput from '../hooks/useBaseInput';
// @ts-ignore
import {MaskedStyledInput} from '../styles';
import {useDateInput} from "./hooks/useDateInput";
import {useFlatpickrMount} from "./hooks/useFlatpickrMount";
import useInputClassNames from "../hooks/useInputClassNames";

interface BaseDateInputProps {
    focused?: boolean;
    setFocused?: (focused: boolean) => void;
    onBlur?: () => void;
    innerError?: any[];
    setInnerError?: (error: any[]) => void;
    onChange?: (value: any) => void;
    onClick?: () => void;
    disabled?: boolean;
    placeholder?: string;
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    name?: string;
    value?: any;
    autoComplete?: string;
    error?: any;
    defaultDate?: Date | null;
    // Специфичные для типа инпута
    dateMask: string;
    inputMask: string;
    dateFormat: string;
    formatDateFn: (date: Date | null) => string;
    flatpickrOptions: any;
}

const BaseDateInput: React.FC<BaseDateInputProps> = ({
                                                         focused = false,
                                                         setFocused = () => {},
                                                         onBlur = () => {},
                                                         innerError = [],
                                                         setInnerError = () => {},
                                                         onChange = () => {},
                                                         onClick = () => {},
                                                         disabled = false,
                                                         placeholder = '',
                                                         className = '',
                                                         style = {},
                                                         id,
                                                         name,
                                                         value,
                                                         autoComplete = 'off',
                                                         error,
                                                         defaultDate = null,
                                                         // Специфичные пропсы
                                                         dateMask,
                                                         inputMask,
                                                         dateFormat,
                                                         formatDateFn,
                                                         flatpickrOptions
                                                     }) => {
    const {
        handleFocus,
        getName,
    } = useBaseInput({
        disabled,
        name,
        onClick,
        onChange,
        setFocused,
        onBlur
    });

    const {componentsLoaded, DateInputComponent, flatpickrInstance} = useFlatpickrMount();

    const {
        date,
        dateString,
        handleDateChange,
        handleInputChange,
        handleBlur
    } = useDateInput({
        value,
        onChange,
        onBlur,
        flatpickrInstance,
        setFocused,
        dateMask,
        dateFormat,
        formatDate: formatDateFn,
        setInnerError
    });

    const getOptions = () => {
        const opts = {...flatpickrOptions};
        if (defaultDate) {
            opts.defaultDate = defaultDate;
        }
        return opts;
    };

    const inputClassName = useInputClassNames(className, focused, error, disabled, innerError);

    if (!componentsLoaded || !DateInputComponent) return null;

    // Для disabled состояния - рендерим readonly инпут без возможности фокуса
    if (disabled) {
        return (
            // @ts-ignore
            <MaskedStyledInput
                id={id}
                mask={inputMask}
                value={dateString}
                style={{
                    ...style,
                    cursor: 'default',      // Обычный курсор для disabled элемента
                    pointerEvents: 'none'   // Полностью отключаем взаимодействие с элементом
                }}
                className={inputClassName}
                disabled
                readOnly
                tabIndex={-1} // Предотвращаем фокус через Tab
                onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                    // Предотвращаем фокус на disabled элементе
                    e.target.blur();
                }}
            >
                {(inputProps: any) => (
                    <input
                        {...inputProps}
                        style={{
                            ...inputProps.style,
                            cursor: 'default' // Также применяем к самому input
                        }}
                    />
                )}
            </MaskedStyledInput>
        );
    }

    return (
        // @ts-ignore
        <DateInputComponent
            id={id}
            style={style}
            disabled={disabled}
            value={date instanceof Date ? date : null}
            valueString={dateString}
            placeholder={placeholder}
            autoComplete={autoComplete || 'off'}
            options={getOptions()}
            className={inputClassName}
            onReady={(selectedDates: any, dateStr: string, fp: any) => {
                flatpickrInstance.current = fp;
                fp.calendarContainer.id = `${id}-container`;
            }}
            onChange={handleDateChange}
            onOpen={handleFocus}
            onClose={handleBlur}
            // @ts-ignore
            render={({id, ...restProps}, refEl: any) => {
                // @ts-ignore
                return <MaskedStyledInput
                    autoComplete="off"
                    mask={inputMask}
                    name={getName(name)}
                    id={id}
                    value={restProps.valueString}
                    onChange={handleInputChange}
                    style={restProps.style}
                    className={restProps.className}
                    onFocus={handleFocus}
                >
                    {(inputProps: any) => <input ref={refEl} {...inputProps} />}
                </MaskedStyledInput>
            }}
        />
    );
};

export default BaseDateInput;