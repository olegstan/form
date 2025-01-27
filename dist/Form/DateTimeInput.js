function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import useBaseInput from './useBaseInput';
// Хук, в котором хранится вся "базовая" логика: focused, errors, handleClickOutside, стили, etc.

import { InputContainer, MaskedStyledInput, sharedInputStyle } from './newstyles';
import { Container } from './styles/containerStyle';
import calendarSvg from './../assets/calendar.svg';
import { Url } from 'finhelper';
function DateTimeInput(props) {
  // 1. Забираем из useBaseInput общую логику (аналог BaseInput)
  const {
    wrapperRef,
    focused,
    setFocused,
    hasError,
    setHasError,
    error,
    setError,
    getContainerStyle,
    getPlaceholderClassName
  } = useBaseInput(props);

  // 2. Локальные состояния
  const [componentsLoaded, setComponentsLoaded] = useState(false);
  const [FlatpickrComponent, setFlatpickrComponent] = useState(null);
  const [dateValue, setDateValue] = useState(props.value || '');

  // ref для хранения инстанса flatpickr (чтобы уничтожить при размонтировании)
  const flatpickrInstance = useRef(null);

  // 3. Динамически импортируем flatpickr, react-flatpickr, стили
  useEffect(() => {
    let isMounted = true;
    Promise.all([import('flatpickr'), import('react-flatpickr'), import('flatpickr/dist/l10n/ru.js'), import('flatpickr/dist/flatpickr.css')]).then(([flatpickr, ReactFlatpickr, {
      Russian
    }]) => {
      if (!isMounted) return;

      // Локализация
      const url = Url.getCurrentUrl();
      const lang = localStorage.getItem('language_id');
      if (url.includes('/ru/') || parseInt(lang) === 1 || lang === null) {
        try {
          flatpickr.default.localize(Russian);
        } catch (e) {
          console.error(e);
        }
      }

      // Создаём стилизованный компонент
      const DateTimeStyled = styled(ReactFlatpickr.default)`
          ${sharedInputStyle}
        `;
      setFlatpickrComponent(() => DateTimeStyled);
      setComponentsLoaded(true);
    }).catch(err => {
      console.error('Failed to load flatpickr modules', err);
    });
    return () => {
      isMounted = false;
    };
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
    if (props.value !== dateValue) {
      setDateValue(props.value || '');
    }
  }, [props.value, dateValue]);

  // 6. Локальная обработка клика вне — учитываем окно календаря
  const handleClickOutside = useCallback(e => {
    const isInsideFlatpickr = e.target.closest('.flatpickr-calendar');
    if (wrapperRef.current && !wrapperRef.current.contains(e.target) && !isInsideFlatpickr) {
      if (focused) {
        setFocused(false);
        setHasError(false);
        if (typeof props.onOutsideClick === 'function') {
          props.onOutsideClick(props.value);
        }
      }
    }
  }, [focused, props.onOutsideClick, props.value, wrapperRef, setFocused, setHasError]);

  // Вешаем/снимаем обработчик mousedown
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  // 7. Форматирование даты/времени
  const formatDateTime = dateObj => {
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
  const handleDateChange = selectedDates => {
    const dateObj = selectedDates?.[0];
    if (typeof props.onChangeDateInner === 'function') {
      props.onChangeDateInner({}, {
        date: dateObj ? formatDateTime(dateObj) : null,
        value: dateObj ? formatDateTime(dateObj) : ''
      });
    }
  };

  // 10. Изменение внутри инпута вручную (с учётом маски)
  const handleInputChange = e => {
    const val = e.target.value;
    setDateValue(val);

    // Проверяем, заполнил ли пользователь всю маску
    // (например, "__.__.____ __:__:__" => неполная, есть '_')
    if (typeof val === 'string' && val !== '__.__.____ __:__:__' && !val.includes('_')) {
      props.onChangeDateInner({}, {
        date: val,
        value: val
      });
    } else {
      props.onChangeDateInner({}, {
        date: null,
        value: val
      });
    }
  };

  // 11. Отдельный рендер Flatpickr/MaskedInput (учитываем disabled)
  const renderDateTimeInput = () => {
    if (!FlatpickrComponent) return null;

    // Если disabled = true, отрендерим обычный инпут c маской (без flatpickr)
    if (props.disabled) {
      return /*#__PURE__*/React.createElement(MaskedStyledInput, {
        mask: "99.99.9999 99:99:99",
        value: dateValue,
        disabled: true,
        onChange: () => {}
      }, inputProps => /*#__PURE__*/React.createElement("input", inputProps));
    }

    // Иначе рендерим Flatpickr с нашей маской
    const FpComponent = FlatpickrComponent;
    return /*#__PURE__*/React.createElement(FpComponent, {
      id: props.id,
      style: props.style,
      disabled: props.disabled,
      placeholder: props.placeholder,
      autoComplete: props.autoComplete || 'off',
      options: getOptions(),
      value: dateValue,
      className: props.className,
      onReady: (_, __, fp) => {
        flatpickrInstance.current = fp;
        fp.calendarContainer.id = `${props.id}-container`;
      },
      onChange: handleDateChange,
      onOpen: () => {
        setFocused(true);
        setHasError(false);
      },
      onClose: () => {
        setFocused(false);
        setHasError(false);
        if (typeof props.onOutsideClick === 'function') {
          props.onOutsideClick();
        }
      },
      render: ({
        id,
        ...restProps
      }, refEl) => /*#__PURE__*/React.createElement(MaskedStyledInput, {
        autoComplete: "off",
        mask: "99.99.9999 99:99:99",
        id: id,
        value: restProps.value,
        onChange: handleInputChange,
        style: restProps.style,
        className: restProps.className,
        onFocus: () => {
          setFocused(true);
          setHasError(false);
        }
      }, inputProps => /*#__PURE__*/React.createElement("input", _extends({
        ref: refEl
      }, inputProps)))
    });
  };

  // 12. Если модули не подгрузились, можно рендерить null или «заглушку»
  if (!componentsLoaded) {
    return null;
  }

  // 13. Финальный рендер
  return /*#__PURE__*/React.createElement(Container, {
    style: getContainerStyle(),
    className: `${props.className} ${props.disabled ? 'disabled' : ''}`,
    disabled: props.disabled
  }, /*#__PURE__*/React.createElement(InputContainer, {
    ref: wrapperRef,
    needMargin: true,
    focus: focused
  }, renderDateTimeInput(), props.placeholder && /*#__PURE__*/React.createElement("label", {
    htmlFor: props.id,
    style: props.placeholderStyle,
    className: getPlaceholderClassName()
  }, props.placeholder), props.icon !== false && /*#__PURE__*/React.createElement("img", {
    className: "calendar",
    src: calendarSvg,
    alt: ""
  }), hasError && error && /*#__PURE__*/React.createElement("label", {
    htmlFor: props.id,
    className: `${props.className} error`,
    style: {
      color: '#EF5E70'
    }
  }, error)));
}

// Аналог static defaultProps
DateTimeInput.defaultProps = {
  onKeyPress: () => {},
  onChangeDateInner: () => {},
  disabled: false,
  value: '',
  placeholder: '',
  mask: '',
  icon: '',
  className: '',
  wrapperClassName: '',
  error: '',
  inputMask: '__.__.____ __:__:__'
};
export default DateTimeInput;