import React from 'react';

// @ts-ignore
import useBaseInput from '../hooks/useBaseInput';
// @ts-ignore
import {MaskedStyledInput} from '../styles';
import DateInputProps from "../types/DateInputProps";
import {useDateInput} from "./hooks/useDateInput";
import {useFlatpickrMount} from "./hooks/useFlatpickrMount";
import {formatDate} from "./utils/format";
import useInputClassNames from "../hooks/useInputClassNames";


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
        onBlur,
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
            // @ts-ignore
            opts.defaultDate = defaultDate;
        }
        return opts;
    };

    if (!componentsLoaded || !DateInputComponent) return null;

    if (disabled) {
        return (
            // @ts-ignore
            <MaskedStyledInput
                mask="99.99.9999"
                value={dateString}
                disabled
                onChange={() => {}}
            >
                {(inputProps: any) => <input {...inputProps} />}
            </MaskedStyledInput>
        );
    }

    const inputClassName = useInputClassNames(className, focused, error, disabled, innerError);

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
