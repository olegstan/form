import { useEffect, useRef, useState } from 'react';
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

const isSameDateTime = (a: Date | null, b: Date | null) => {
    if (!a && !b) return true;
    if (!a || !b) return false;
    return a.getTime() === b.getTime();
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
    const [date, setDate] = useState<Date | null>(value ?? null);
    const [dateString, setDateString] = useState<string>(formatDate(value ?? null, dateFormat));

    // последнее отданное наружу значение, чтобы не дублировать onChange
    const lastEmittedRef = useRef<Date | null>(value ?? null);

    // синхронизация при внешнем изменении value
    useEffect(() => {
        if (!isSameDateTime(value ?? null, date)) {
            setDate(value ?? null);
            setDateString(formatDate(value ?? null, dateFormat));
        }
        if (!isSameDateTime(value ?? null, lastEmittedRef.current)) {
            lastEmittedRef.current = value ?? null;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, dateFormat]);

    const emitIfChanged = (next: Date | null) => {
        if (!isSameDateTime(next, lastEmittedRef.current)) {
            lastEmittedRef.current = next;
            onChange(next);
        }
    };

    // Клик по календарю / изменение от flatpickr
    const handleDateChange = (selectedDates: Date[]) => {
        const next = selectedDates && selectedDates.length ? selectedDates[0] : null;

        setDate(next);
        setDateString(formatDate(next, dateFormat));
        setInnerError(false); // было: null

        emitIfChanged(next);
    };

    // Ручной ввод
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value || '';
        setDateString(raw);

        if (raw.trim() === '') {
            setDate(null);
            setInnerError(false); // было: null
            emitIfChanged(null);
            return;
        }

        const parsed = moment(raw, dateFormat, true);
        if (parsed.isValid()) {
            const next = parsed.toDate();
            setDate(next);
            setInnerError(null); // было: null
            emitIfChanged(next);
        } else {
            console.log(`Неверный формат даты: ${raw}`);
        }
    };

    const handleBlur = () => {
        if (dateString && !moment(dateString, dateFormat, true).isValid()) {
            setDate(null);
            setDateString('');
            setInnerError(false); // было: null
            emitIfChanged(null);
        }
        onBlur?.();
        setFocused(false);
    };

    return { date, dateString, handleDateChange, handleInputChange, handleBlur, setDateString };
};
