import {useEffect, useState} from 'react';
import moment from 'moment';

export const useDateInput = ({
                                 value,
                                 onChange,
                                 flatpickrInstance,
                                 setFocused,
                                 dateFormat,
                                 dateMask,
                                 formatDate,
                                 setInnerError
                            }) => {
    const [date, setDate] = useState(value);
    const [dateString, setDateString] = useState(formatDate(value, dateFormat));

    useEffect(() => {
        if (value !== date) {
            setDate(value);
            setDateString(formatDate(value, dateFormat));
        }
    }, [value, date, dateFormat]);

    const handleDateChange = (selectedDates) => {
        const dateObj = selectedDates?.[0];
        const newDateString = dateObj ? formatDate(dateObj, dateFormat) : '';
        setDate(dateObj);
        setDateString(newDateString);
        if (typeof onChange === 'function') {
            onChange({}, { date: dateObj ?? null, value: newDateString });
        }
    };

    const handleInputChange = (e) => {
        const val = e.target.value;
        setDateString(val);
        if (val && !val.includes('_')) {
            const parsedDate = moment(val, dateFormat);
            if (parsedDate.isValid()) {
                setDate(parsedDate.toDate());
                if (typeof onChange === 'function') {
                    onChange({}, { date: parsedDate.toDate(), value: val });
                }
            }else{
                setInnerError(['Ошибка, неверный формат даты']);
            }
        }
    };

    const handleBlur = () => {
        setFocused(false);

        if (flatpickrInstance.current) {
            if (
                typeof dateString === 'string' &&
                dateString !== dateMask &&
                !dateString.includes('_')
            ) {
                const parsedDate = moment(dateString, dateFormat);
                if (parsedDate.isValid()) {
                    onChange({}, { date: parsedDate.toDate(), value: dateString });
                    setInnerError(null);
                } else {
                    onChange({}, { date: null, value: '' });
                    setDateString('');
                }
            } else {
                onChange({}, { date: null, value: '' });
                setDateString('');
            }
        }
    };

    return { date, dateString, handleDateChange, handleInputChange, handleBlur, setDateString };
};