import React, {useCallback, useEffect, useRef, useState} from 'react';

import useBaseInput from '../hooks/useBaseInput';
// Хук, в котором хранится вся "базовая" логика: focused, errors, handleClickOutside, стили, etc.
import {InputContainer, MaskedStyledInput} from './../newstyles';
import {Container} from './../styles/containerStyle';
import calendarSvg from './../../assets/calendar.svg';
import mountFlatpickr from "./utils/mountFlatpickr";

function DateTimeInput({
                         onKeyPress = () => {},
                         onChange = () => {},
                         disabled = false,
                         value = '',
                         placeholder = '',
                         mask = '',
                         icon = '',
                         className = '',
                         wrapperClassName = '',
                         error = '',
                         inputMask = '__.__.____ __:__:__',
                         ...props
                       }) {
  // 1. Забираем из useBaseInput общую логику (аналог BaseInput)
  const {
    wrapperRef,
    focused,
    setFocused,
    getContainerStyle,
    getPlaceholderClassName
  } = useBaseInput(props);

  // 2. Локальные состояния
  const [componentsLoaded, setComponentsLoaded] = useState(false);
  const [InputComponent, setInputComponent] = useState(null);
  const [dateValue, setDateValue] = useState(value);

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
    if (value !== dateValue) {
      setDateValue(value);
    }
  }, [value, dateValue]);

  // 6. Локальная обработка клика вне — учитываем окно календаря
  const handleClickOutside = useCallback(
    (e) => {
      const isInsideFlatpickr = e.target.closest('.flatpickr-calendar');
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target) &&
        !isInsideFlatpickr
      ) {
        if (focused) {
          setFocused(false);
          if (typeof props.onOutsideClick === 'function') {
            props.onOutsideClick(value);
          }
        }
      }
    },
    [focused, props.onOutsideClick, value, wrapperRef, setFocused]
  );

  // Вешаем/снимаем обработчик mousedown
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

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

  // 8. Опции для Flatpickr (включаем время и секунды)
  const getOptions = () => {
    return {
      dateFormat: 'd.m.Y H:i:S',
      allowInput: true,
      enableTime: true,
      enableSeconds: true,
      disableMobile: 'true',
      ...props // если хотите пробросить дополнительные опции
    };
  };

  // 9. При выборе даты/времени в календаре
  const handleDateChange = (selectedDates) => {
    const dateObj = selectedDates?.[0];
    if (typeof onChange === 'function') {
      onChange({}, {
        date: dateObj ? formatDateTime(dateObj) : null,
        value: dateObj ? formatDateTime(dateObj) : ''
      });
    }
  };

  // 10. Изменение внутри инпута вручную (с учётом маски)
  const handleInputChange = (e) => {
    const val = e.target.value;
    setDateValue(val);

    // Проверяем, заполнил ли пользователь всю маску
    // (например, "__.__.____ __:__:__" => неполная, есть '_')
    if (
      typeof val === 'string' &&
      val !== '__.__.____ __:__:__' &&
      !val.includes('_')
    ) {
      onChange({}, { date: val, value: val });
    } else {
      onChange({}, { date: null, value: val });
    }
  };

  // 11. Отдельный рендер Flatpickr/MaskedInput (учитываем disabled)
  const renderDateTimeInput = () => {
    if (!InputComponent) return null;

    // Если disabled = true, отрендерим обычный инпут c маской (без flatpickr)
    if (disabled) {
      return (
        <MaskedStyledInput
          mask="99.99.9999 99:99:99"
          value={dateValue}
          disabled={true}
          onChange={() => {}}
        >
          {(inputProps) => <input {...inputProps} />}
        </MaskedStyledInput>
      );
    }

    // Иначе рендерим Flatpickr с нашей маской
    const FpComponent = InputComponent;
    return (
      <FpComponent
        id={props.id}
        style={props.style}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete={props.autoComplete || 'off'}
        options={getOptions()}
        value={dateValue}
        className={className}
        onReady={(_, __, fp) => {
          flatpickrInstance.current = fp;
          fp.calendarContainer.id = `${props.id}-container`;
        }}
        onChange={handleDateChange}
        onOpen={() => {
          setFocused(true);
        }}
        onClose={() => {
          setFocused(false);
          if (typeof props.onOutsideClick === 'function') {
            props.onOutsideClick();
          }
        }}
        render={({ id, ...restProps }, refEl) => (
          <MaskedStyledInput
            autoComplete="off"
            mask="99.99.9999 99:99:99"
            id={id}
            value={restProps.value}
            onChange={handleInputChange}
            style={restProps.style}
            className={restProps.className}
            onFocus={() => {
              setFocused(true);
            }}
          >
            {(inputProps) => <input ref={refEl} {...inputProps} />}
          </MaskedStyledInput>
        )}
      />
    );
  };

  // 12. Если модули не подгрузились, можно рендерить null или «заглушку»
  if (!componentsLoaded) {
    return null;
  }

  // 13. Финальный рендер
  return (
    <Container
      style={getContainerStyle()}
      className={`${className} ${disabled ? 'disabled' : ''}`}
      disabled={disabled}
    >
      <InputContainer ref={wrapperRef} needMargin={true} focus={focused}>
        {/* Основной инпут (с Flatpickr или без) */}
        {renderDateTimeInput()}

        {/* Плейсхолдер (если есть) */}
        {placeholder && (
          <label
            htmlFor={props.id}
            style={props.placeholderStyle}
            className={getPlaceholderClassName()}
          >
            {placeholder}
          </label>
        )}

        {/* Иконка календаря */}
        {icon !== false && (
          <img className="calendar" src={calendarSvg} alt="" />
        )}

        {/* Отображение ошибки (tooltip или метка) */}
        {hasError && error && (
          <label
            htmlFor={props.id}
            className={`${className} error`}
            style={{ color: '#EF5E70' }}
          >
            {error}
          </label>
        )}
      </InputContainer>
    </Container>
  );
}

export default DateTimeInput;