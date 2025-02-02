import React, {useEffect, useRef, useState} from 'react';

import useBaseInput from '../hooks/useBaseInput';
import {MaskedStyledInput} from './../newstyles';
import mountFlatpickr from "./utils/mountFlatpickr";
import moment from "moment";
import DateTimeInputProps from "../types/DateTimeInputProps";

const DateTimeInput: React.FC<DateTimeInputProps> = ({
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
  // 1. Забираем из useBaseInput общую логику (аналог BaseInput)
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

  // 7. Форматирование даты/времени
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

  // 2. Локальные состояния
  const [componentsLoaded, setComponentsLoaded] = useState(false);
  const [InputComponent, setInputComponent] = useState(null);
  const [dateString, setDateString] = useState(formatDateTime(value));
  const [date, setDate] = useState(value);

  // ref для хранения инстанса flatpickr (чтобы уничтожить при размонтировании)
  const flatpickrInstance = useRef(null);

  // 3. Динамически импортируем flatpickr, react-flatpickr, стили
  useEffect(() => {
    return mountFlatpickr(setComponentsLoaded, setInputComponent)
  }, []);

  // 4. Уничтожаем flatpickr-инстанс при размонтировании
  useEffect(() => {
    return () => {
      if (flatpickrInstance.current) {
        flatpickrInstance.current.destroy();
      }
    };
  }, []);

  // 5. При изменении props.value обновляем локальный dateValue
  useEffect(() => {
    if (value !== date) {
      setDate(value);
    }
  }, [value, date]);

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

  // 9. При выборе даты/времени в календаре
  const handleDateChange = (selectedDates) => {
    const dateObj = selectedDates?.[0];

    if (typeof onChange === 'function') {
      onChange({}, {
        date: dateObj ?? null,
        value: dateObj ? formatDateTime(dateObj) : ''
      });
    }
  };

  // 10. Изменение внутри инпута вручную (с учётом маски)
  const handleInputChange = (e) => {
    const val = e.target.value;
    setDateString(val);

    if (
      typeof val === 'string' &&
      val !== '__.__.____ __:__:__' &&
      !val.includes('_')
    ) {
      let date = moment(val, 'DD.MM.YYYY HH:mm:ss');

      if(date.isValid())
      {
        onChange({}, {date: date.toDate(), value: val});
      }
    }
  };


  if (!componentsLoaded || !InputComponent) return null;

  if (disabled) {
    return (
        <MaskedStyledInput
            mask="99.99.9999 99:99:99"
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