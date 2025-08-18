import React from 'react';
import BaseDateInput from './BaseDateInput';
import DateInputProps from "../types/DateInputProps";
import {formatDate} from "./utils/format";

const DateInput: React.FC<DateInputProps> = (props) => {
    const flatpickrOptions = {
        dateFormat: 'd.m.Y',
        allowInput: true,
        disableMobile: 'true'
    };

    return (
        //@ts-ignore
        <BaseDateInput
            {...props}
            dateMask="__.__.____"
            inputMask="99.99.9999"
            dateFormat="DD.MM.YYYY"
            formatDateFn={formatDate}
            flatpickrOptions={flatpickrOptions}
        />
    );
};

DateInput.displayName = 'DateInput';
export default DateInput;