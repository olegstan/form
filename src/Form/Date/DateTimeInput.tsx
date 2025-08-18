import React from 'react';
import BaseDateInput from './BaseDateInput';
import DateTimeInputProps from "../types/DateTimeInputProps";
import {formatDateTime} from "./utils/format";

const DateTimeInput: React.FC<DateTimeInputProps> = (props) => {
    const flatpickrOptions = {
        dateFormat: 'd.m.Y H:i:S',
        allowInput: true,
        enableTime: true,
        enableSeconds: true,
        disableMobile: 'true',
    };

    return (
        //@ts-ignore
        <BaseDateInput
            {...props}
            dateMask="__.__.____ __:__:__"
            inputMask="99.99.9999 99:99:99"
            dateFormat="DD.MM.YYYY HH:mm:ss"
            formatDateFn={formatDateTime}
            flatpickrOptions={flatpickrOptions}
        />
    );
};

DateTimeInput.displayName = 'DateTimeInput';
export default DateTimeInput;