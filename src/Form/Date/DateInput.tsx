import React, {useEffect, useRef, useState} from 'react';

import useBaseInput from '../hooks/useBaseInput';

import {MaskedStyledInput} from '../styles';
import mountFlatpickr from "./utils/mountFlatpickr";
import moment from "moment";
import DateInputProps from "../types/DateInputProps";

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
        focused,
        setFocused,
        handleFocus,
        getName,
    } = useBaseInput({
        name,
        onClick,
        onChange,
        setFocused
    })

    const [componentsLoaded, setComponentsLoaded] = useState(false);
    const [InputComponent, setInputComponent] = useState(null);
    const [dateString, setDateString] = useState(formatDate(value));
    const [date, setDate] = useState(value);

    const flatpickrInstance = useRef(null);

    useEffect(() => {
        return mountFlatpickr(setComponentsLoaded, setInputComponent)
    }, []);

    useEffect(() => {
        return () => {
            if (flatpickrInstance.current) {
                flatpickrInstance.current.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (value !== date) {
            setDate(value);
        }
    }, [value, date]);

    const handleBlur = () => {
        setFocused(false);

        // Дополнительная логика при потере фокуса
        if (flatpickrInstance.current) {
            console.log(dateString)

            if (
                typeof dateString === 'string' &&
                dateString !== '__.__.____' &&
                !dateString.includes('_')
            ) {
                let date = moment(dateString, 'DD.MM.YYYY');

                if(date.isValid())
                {
                    onChange({}, {date: date.toDate(), value: dateString});
                }else{
                    onChange({}, {date: null, value: ''});
                    setDateString('');
                }
            }else{
                onChange({}, {date: null, value: ''});
                setDateString('');
            }
        }
    };

    const handleDateChange = (selectedDates) =>
    {
        const dateObj = selectedDates?.[0];

        if (typeof onChange === 'function') {
            let dateString = dateObj ? formatDate(dateObj) : '';
            onChange({}, {
                date: dateObj ?? null,
                value: dateString
            });
            setDateString(dateString);
        }
    };

    const handleInputChange = (e) => {
        const val = e.target.value;
        setDateString(val);

        if (
            typeof val === 'string' &&
            val !== '__.__.____' &&
            !val.includes('_')
        ) {
            let date = moment(val, 'DD.MM.YYYY');

            if(date.isValid())
            {
                onChange({}, {date: date.toDate(), value: val});
            }
        }
    };

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

    if (!componentsLoaded || !InputComponent) return null;

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

    const inputClassName = `input ${className}${focused ? ' focused' : ''}${error?.[0] ? ' error' : ''}`;

    return (
        <InputComponent
            id={id}
            style={style}
            disabled={disabled}
            value={date instanceof Date ? date : null}
            valueString={dateString}
            placeholder={placeholder}
            autoComplete={autoComplete || 'off'}
            options={getOptions()}
            className={inputClassName}
            onReady={(_, __, fp) => {
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
                    {(inputProps) => <input ref={refEl} {...inputProps} />}
                </MaskedStyledInput>
            }}
        />
    );
}

export default DateInput;
