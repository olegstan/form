function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import useBaseInput from './useBaseInput';
import { InputContainer, MaskedStyledInput, sharedInputStyle } from './newstyles';
import { Container } from './styles/containerStyle';
import { Url } from 'finhelper';
import calendarSvg from './../assets/calendar.svg';

// Функциональный компонент вместо class Date extends BaseInput
function DateInput(props) {
  // 1. Забираем из useBaseInput базовую логику:
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

  // 2. Локальные стейты, необходимые именно для Date
  // (dynamic import, локальная дата, flatpickrInstance, и т.д.)
  const [componentsLoaded, setComponentsLoaded] = useState(false);
  const [InputComponent, setInputComponent] = useState(null); // аналог Input (DateStyledInput)
  const [date, setDate] = useState(props.value || '');

  // ref на инстанс flatpickr
  const flatpickrInstance = useRef(null);

  // 3. Динамическая подгрузка Flatpickr и настройка локализации
  useEffect(() => {
    let isMounted = true;
    Promise.all([import('flatpickr'), import('react-flatpickr'), import('flatpickr/dist/l10n/ru.js'), import('flatpickr/dist/flatpickr.css')]).then(([flatpickr, Flatpickr, {
      Russian
    }]) => {
      if (!isMounted) return;
      const url = Url.getCurrentUrl();
      const lang = localStorage.getItem('language_id');
      if (url.includes('/ru/') || parseInt(lang) === 1 || lang === null) {
        try {
          flatpickr.default.localize(Russian);
        } catch (e) {
          console.error(e);
        }
      }
      const DateStyledInput = styled(Flatpickr.default)`
          ${sharedInputStyle}
        `;
      setInputComponent(() => DateStyledInput);
      setComponentsLoaded(true);
    }).catch(error => {
      console.error('Error loading flatpickr modules:', error);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // 4. Своя логика «клика вне», чтобы ещё учитывать, что курсор может быть в календаре Flatpickr
  const handleClickOutside = useCallback(e => {
    // Проверяем, не внутри ли клик в .flatpickr-calendar
    const isInsideFlatpickr = e.target.closest('.flatpickr-calendar');
    if (wrapperRef.current && !wrapperRef.current.contains(e.target) && !isInsideFlatpickr) {
      if (focused) {
        setFocused(false);
        setHasError(false);
        // Если нужно вызвать onOutsideClick
        if (typeof props.onOutsideClick === 'function') {
          props.onOutsideClick(props.value);
        }
      }
    }
  }, [focused, props.onOutsideClick, props.value, setFocused, setHasError, wrapperRef]);

  // 5. Вешаем/снимаем слушатель кликов
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  // 6. При размонтировании гасим Flatpickr
  useEffect(() => {
    return () => {
      if (flatpickrInstance.current) {
        flatpickrInstance.current.destroy();
      }
    };
  }, []);

  // 7. Аналог componentDidUpdate по `props.value`
  useEffect(() => {
    if (props.value !== date) {
      setDate(props.value);
    }
    // Аналогично для ошибки уже обрабатывается внутри useBaseInput
  }, [props.value, date]);

  // 8. Формат даты (ваш метод)
  const formatDate = d => {
    if (!(d instanceof Date)) return '';
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
  };

  // 9. Обработчик изменения даты в виджете
  const handleDateChange = selectedDates => {
    if (typeof props.onChangeDateInner === 'function') {
      props.onChangeDateInner({}, {
        value: formatDate(selectedDates[0]),
        date: selectedDates[0]
      });
    }
  };

  // 10. Обработчик изменения значения в самом input (при вводе руками)
  const handleInputChange = e => {
    const val = e.target.value;
    setDate(val);
    if (typeof val === 'string' && val !== '__.__.____' && !val.includes('_')) {
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

  // 11. Опции Flatpickr
  const getOptions = () => {
    let opts = {
      dateFormat: 'd.m.Y',
      allowInput: true,
      disableMobile: 'true',
      ...props // вы подмешиваете дополнительные?
    };
    if (props.defaultDate) {
      opts.defaultDate = props.defaultDate;
    }
    return opts;
  };

  // 12. Пока не загрузились динамические модули, возвращаем null или «заглушку»
  if (!componentsLoaded || !InputComponent) return null;

  // Если проп `disabled = true`, отрендерим «простой» input (как у вас в классе Date)
  // Иначе - Flatpickr
  const renderInputOrFlatpickr = () => {
    if (props.disabled) {
      // Можно отрендерить простой <input> без Flatpickr
      return /*#__PURE__*/React.createElement(MaskedStyledInput, {
        mask: "99.99.9999",
        value: date,
        disabled: true,
        onChange: () => {}
      }, inputProps => /*#__PURE__*/React.createElement("input", inputProps));
    }

    // Иначе рендерим нашу обёртку для Flatpickr
    return /*#__PURE__*/React.createElement(InputComponent, {
      id: props.id,
      style: props.style,
      disabled: props.disabled,
      value: date,
      placeholder: props.placeholder,
      autoComplete: props.autoComplete || 'off',
      options: getOptions(),
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
      }
      // render — кастомный рендер для замаскированного input
      ,
      render: ({
        id,
        ...restProps
      }, refEl) => /*#__PURE__*/React.createElement(MaskedStyledInput, {
        autoComplete: "off",
        mask: "99.99.9999",
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

  // 13. Рендерим сам компонент
  return /*#__PURE__*/React.createElement(Container, {
    style: getContainerStyle(),
    className: `${props.className} ${props.disabled ? 'disabled' : ''}`,
    disabled: props.disabled
  }, /*#__PURE__*/React.createElement(InputContainer, {
    ref: wrapperRef,
    needMargin: true,
    focus: focused
  }, renderInputOrFlatpickr(), props.placeholder && /*#__PURE__*/React.createElement("label", {
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

// Значения по умолчанию (как static defaultProps)
DateInput.defaultProps = {
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
  inputMask: '__.__.____'
};
export default DateInput;