import React from 'react';

import useBaseInput from '../hooks/useBaseInput';
import {MaskedStyledInput} from '../styles';
import DateTimeInputProps from "../types/DateTimeInputProps";
import {useDateInput} from "./hooks/useDateInput";
import {useFlatpickrMount} from "./hooks/useFlatpickrMount";

const formatDateTime = (dateObj) => {
  if (!(dateObj instanceof Date)) return '';
  let day = String(dateObj.getDate()).padStart(2, '0');
  let month = String(dateObj.getMonth() + 1).padStart(2, '0');
  let year = dateObj.getFullYear().toString();
  let hour = String(dateObj.getHours()).padStart(2, '0');
  let minute = String(dateObj.getMinutes()).padStart(2, '0');
  let second = String(dateObj.getSeconds()).padStart(2, '0');
  return `${day}.${month}.${year} ${hour}:${minute}:${second}`;
};

const DateTimeInput: React.FC<DateTimeInputProps> = ({
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

                         defaultDate = null,
                       }) => {
  const {
    handleFocus,
    getName,
  } = useBaseInput({
    name,
    onClick,
    onChange,
    setFocused
  });

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
    dateFormat: 'DD.MM.YYYY HH:mm:ss',
    formatDate: formatDateTime
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
      opts.defaultDate = defaultDate;
    }

    return opts;
  };

  if (!componentsLoaded || !DateInputComponent) return null;

  if (disabled) {
    return (
        <MaskedStyledInput
            mask="99.99.9999 99:99:99"
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
                mask="99.99.9999 99:99:99"
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

export default DateTimeInput;