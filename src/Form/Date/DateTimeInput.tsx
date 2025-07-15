import React from 'react';

// @ts-ignore
import useBaseInput from '../hooks/useBaseInput';
// @ts-ignore
import {MaskedStyledInput} from '../styles';
import DateTimeInputProps from "../types/DateTimeInputProps";
import {useDateInput} from "./hooks/useDateInput";
import {useFlatpickrMount} from "./hooks/useFlatpickrMount";
import {formatDateTime} from "./utils/format";
import useInputClassNames from "../hooks/useInputClassNames";

const DateTimeInput: React.FC<DateTimeInputProps> = ({
                                                         focused = false,
                                                         setFocused = () => {
                                                         },
                                                         onBlur = () => {
                                                         },
                                                         innerError = [],//метод чтобьы показывать ошибку, если ввели неверный формат даты
                                                         setInnerError = () => {
                                                         },//метод чтобьы показывать ошибку, если ввели неверный формат даты
                                                         onChange = () => {
                                                         },
                                                         onClick = () => {
                                                         },
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
        dateMask: '__.__.____ __:__:__',
        dateFormat: 'DD.MM.YYYY HH:mm:ss',
        formatDate: formatDateTime,
        setInnerError
    });

    // 8. Опции для Flatpickr (включаем время и секунды)
    const getOptions = () => {
        let opts = {
            dateFormat: 'd.m.Y H:i:S',
            allowInput: true,
            enableTime: true,
            enableSeconds: true,
            disableMobile: 'true',
        };

        if (defaultDate) {
            // @ts-ignore
            opts.defaultDate = defaultDate;
        }

        return opts;
    };

    const inputClassName = useInputClassNames(className, focused, error, disabled, innerError);


    if (!componentsLoaded || !DateInputComponent) return null;


    if (disabled) {
        return (
            // @ts-ignore
            <MaskedStyledInput
                mask="99.99.9999 99:99:99"
                value={dateString}
                disabled
                onChange={() => {
                }}
            >
                {(inputProps: any) => <input {...inputProps} />}
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
            //@ts-ignore
            onReady={(selectedDates, dateStr, fp) => {
                flatpickrInstance.current = fp;
                fp.calendarContainer.id = `${id}-container`;
            }}
            onChange={handleDateChange}
            onOpen={handleFocus}
            onClose={handleBlur}
            //@ts-ignore
            render={({id, ...restProps}, refEl: any) => {

                // @ts-ignore
                return <MaskedStyledInput
                    autoComplete="off"
                    mask="99.99.9999 99:99:99"
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

DateTimeInput.displayName = 'DateTimeInput';

export default DateTimeInput;