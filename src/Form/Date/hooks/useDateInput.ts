import {useEffect, useRef, useState} from 'react';
import moment from 'moment';

type UseDateInputParams = {
    value: Date | null;
    onChange: (v: Date | null) => void;
    onBlur?: () => void;
    flatpickrInstance?: React.MutableRefObject<any>;
    setFocused?: (f: boolean) => void;
    dateFormat: string;      // формат moment (например, 'DD.MM.YYYY')
    dateMask: string;
    formatDate: (date: Date | null, fmt: string) => string;
    setInnerError?: (error: any) => void;
};

// Utility function to safely check if a value is a valid Date
const isValidDate = (date: any): date is Date => {
    return date instanceof Date && !isNaN(date.getTime());
};

// Utility function to normalize input to Date | null
const normalizeDate = (value: any): Date | null => {
    if (value === null || value === undefined) {
        return null;
    }

    if (isValidDate(value)) {
        return value;
    }

    // If it's a string, try to parse it
    if (typeof value === 'string') {
        const parsed = new Date(value);
        return isValidDate(parsed) ? parsed : null;
    }

    // For any other type, return null
    return null;
};

const isSameDateTime = (a: Date | null, b: Date | null) => {
    // Normalize both inputs
    const dateA = normalizeDate(a);
    const dateB = normalizeDate(b);

    if (!dateA && !dateB) return true;
    if (!dateA || !dateB) return false;

    return dateA.getTime() === dateB.getTime();
};

export const useDateInput = ({
                                 value,
                                 onChange,
                                 onBlur = () => {},
                                 flatpickrInstance,
                                 setFocused = () => {},
                                 dateFormat,
                                 dateMask,
                                 formatDate,
                                 setInnerError = () => {},
                             }: UseDateInputParams) => {
    // Normalize the initial value
    const normalizedValue = normalizeDate(value);

    const [date, setDate] = useState<Date | null>(normalizedValue);
    const [dateString, setDateString] = useState<string>(formatDate(normalizedValue, dateFormat));

    // последнее отданное наружу значение, чтобы не дублировать onChange
    const lastEmittedRef = useRef<Date | null>(normalizedValue);

    // синхронизация при внешнем изменении value
    useEffect(() => {
        const normalizedValue = normalizeDate(value);

        if (!isSameDateTime(normalizedValue, date)) {
            setDate(normalizedValue);
            setDateString(formatDate(normalizedValue, dateFormat));
        }
        if (!isSameDateTime(normalizedValue, lastEmittedRef.current)) {
            lastEmittedRef.current = normalizedValue;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, dateFormat]);

    const emitIfChanged = (next: Date | null) => {
        const normalizedNext = normalizeDate(next);
        if (!isSameDateTime(normalizedNext, lastEmittedRef.current)) {
            lastEmittedRef.current = normalizedNext;
            onChange(normalizedNext);
        }
    };

    // Клик по календарю / изменение от flatpickr
    const handleDateChange = (selectedDates: Date[]) => {
        const next = selectedDates && selectedDates.length ? normalizeDate(selectedDates[0]) : null;

        setDate(next);
        setDateString(formatDate(next, dateFormat));
        setInnerError(false);

        emitIfChanged(next);

        // Для режима с временем снимаем фокус сразу
        // это можно передать как параметр или определить по формату
        if (dateFormat.includes('HH:mm')) {
            setFocused(false);
        }
    };

    // Ручной ввод
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value || '';
        setDateString(raw);

        if (raw.trim() === '') {
            setDate(null);
            setInnerError(false);
            emitIfChanged(null);
            return;
        }

        const parsed = moment(raw, dateFormat, true);
        if (parsed.isValid()) {
            const next = parsed.toDate();
            const normalizedNext = normalizeDate(next);
            setDate(normalizedNext);
            setInnerError(null);
            emitIfChanged(normalizedNext);
        } else {
            console.log(`Неверный формат даты: ${raw}`);
        }
    };

    const handleBlur = () => {
        if (dateString && !moment(dateString, dateFormat, true).isValid()) {
            setDate(null);
            setDateString('');
            setInnerError(false);
            emitIfChanged(null);
        }
        onBlur?.();
        setFocused(false);
    };

    return { date, dateString, handleDateChange, handleInputChange, handleBlur, setDateString };
};