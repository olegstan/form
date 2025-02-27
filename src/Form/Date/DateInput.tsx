import React from 'react';

import useBaseInput from '../hooks/useBaseInput';

import {MaskedStyledInput} from '../styles';
import DateInputProps from "../types/DateInputProps";
import {useDateInput} from "./hooks/useDateInput";
import {useFlatpickrMount} from "./hooks/useFlatpickrMount";
import GroupSelect from "../Dropdown/GroupSelect/GroupSelect";

const formatDate = (d) => {
    if (!(d instanceof Date)) return '';
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
};

const DateInput: React.FC<DateInputProps> = ({
                       focused = false,
                       setFocused = () => {},
                       onBlur = () => {},
                       innerError = [],//метод чтобьы показывать ошибку, если ввели неверный формат даты
                       setInnerError = () => {},//метод чтобьы показывать ошибку, если ввели неверный формат даты
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
                       defaultDate = null
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
    })

    const { componentsLoaded, DateInputComponent, flatpickrInstance } = useFlatpickrMount();

    const {
        date,
        dateString,
        handleDateChange,
        handleInputChange,
        handleBlur
    } = useDateInput({
        value,
        onChange,
        flatpickrInstance,
        setFocused,
        dateMask: '__.__.____',
        dateFormat: 'DD.MM.YYYY',
        formatDate,
        setInnerError
    });


    const getOptions = () => {
        let opts = {
            dateFormat: 'd.m.Y',
            allowInput: true,
            disableMobile: 'true'
        };
        if (defaultDate) {
            opts.defaultDate = defaultDate;
        }
        return opts;
    };

    if (!componentsLoaded || !DateInputComponent) return null;

    if (disabled) {
        return (
            <MaskedStyledInput
                mask="99.99.9999"
                value={dateString}
                disabled
                onChange={() => {}}
            >
                {(inputProps) => <input {...inputProps} />}
            </MaskedStyledInput>
        );
    }

    const inputClassName = `input ${className}${focused ? ' focused' : ''}${error?.[0] || innerError?.[0] ? ' error' : ''}`;

    return (
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
            render={({id, ...restProps}, refEl) => {

                return <MaskedStyledInput
                    autoComplete="off"
                    mask="99.99.9999"
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
}

DateInput.displayName = 'DateInput';
export default DateInput;
