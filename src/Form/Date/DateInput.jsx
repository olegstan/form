import React, {useCallback, useEffect, useRef, useState} from 'react';

import useBaseInput from '../hooks/useBaseInput';

import {MaskedStyledInput} from './../newstyles';
import mountFlatpickr from "./utils/mountFlatpickr";
import moment from "moment";

function DateInput({
                       onKeyPress = () => {},
                       onChange = () => {},
                       onClick = () => {},
                       disabled = false,
                       placeholder = '',
                       iconClose = true,
                       className = '',
                       type = 'text',
                       style = {},
                       id,
                       name,
                       value,
                       autoComplete = 'off',
                       error,

                       defaultDate = null,
                       mask = '',
                       inputMask = '__.__.____',
                   }) {
    const {
        focused,
        handleFocus,
        handleBlur,
        getName,
    } = useBaseInput({
        name,
        onClick,
        onChange,
    });

    const formatDate = (d) => {
        if (!(d instanceof Date)) return '';
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        return `${day}.${month}.${year}`;
    };

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

    const handleDateChange = (selectedDates) =>
    {
        const dateObj = selectedDates?.[0];

        if (typeof onChange === 'function') {
            onChange({}, {
                date: dateObj,
                value: dateObj ? formatDate(dateObj) : ''
            });
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
                value={date instanceof Date ? date : null}
                disabled
                onChange={() => {}}
            >
                {(inputProps) => <input {...inputProps} />}
            </MaskedStyledInput>
        );
    }

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
            className={className + (focused ? ' focused' : '') + (error?.[0] ? ' error' : '')}
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
