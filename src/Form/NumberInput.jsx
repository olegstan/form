// NumberInput.js
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Money} from 'finhelper';

import useBaseInput from './hooks/useBaseInput'; // ВАЖНО: ваш кастомный хук
import {InputContainer, StyledInput} from './newstyles';
import {Container} from './styles/containerStyle';
import Close from './../assets/ic_close_only.svg';

function NumberInput({
                       onKeyPress = () => {},
                       onChange = () => {},
                       disabled = false,
                       value = '',
                       placeholder = '',
                       icon = '',
                       className = '',
                       wrapperClassName = '',
                       style = {},
                       max = false,
                       min = false,
                       decimals = false,
                       ...props
                     }) {
  // Достаём общую логику из useBaseInput (аналог "BaseInput")
  const {
    wrapperRef,
    focused,
    setFocused,
    hasError,
    setHasError,
    error,
    setError,
    browser,
    getContainerStyle,
    getInputStyle,
    getName,
    getPlaceholderClassName
  } = useBaseInput(props);

  // Локальный стейт для положения курсора
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  const inputRef = useRef(null);

  // Аналог componentDidUpdate(prevProps) для значения
  // Если props.value меняется и у нас есть фокус, возвращаем курсор
  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.selectionStart = selectionStart;
      inputRef.current.selectionEnd = selectionEnd;
    }
  }, [props.value, focused, selectionStart, selectionEnd]);

  // handleChange — портируем вашу логику
  const handleChange = useCallback(
    (e) => {
      const pattern = /^[0-9.\-\,\ ]+$/; // разрешаем цифры, точку, запятую, пробел, минус

      if (e.target.value === '' || pattern.test(e.target.value)) {
        let val = e.target.value.replace(/,/g, '.').replace(/ /g, '');

        // Проверки на min/max
        if (props.max !== false && +val > props.max) {
          return;
        }
        if (props.min === 0 && isNaN(val)) {
          return;
        }
        if (props.min !== false && +val < props.min) {
          return;
        }

        // Позиция курсора
        let position = e.target.selectionStart;

        if (val.length > 0) {
          let prefix = '';
          if (val[0] === '-') {
            prefix = '-';
            val = val.replace('-', '');
          }

          const parts = val.split('.');
          if (parts[1] !== undefined) {
            // Если есть дробная часть
            if (parts[1] !== '') {
              if (props.decimals !== false) {
                // Не даём вводить дробную часть длиннее decimals
                if (parts[1].length > props.decimals) {
                  return;
                }
              }
              val = Money.formatForInput(val, parts[1].length);
            } else {
              // Если точка есть, но дробная часть пустая
              val = Money.formatForInput(val, 0) + '.';
            }
          } else {
            // Нет дробной части
            val = Money.formatForInput(val, 0);
          }

          // Логика с изменением длины целой части => сдвиг курсора
          const prevParts = props.value?.toString().split('.') || [''];
          const newParts = val.split('.');
          const prevLength = prevParts[0].length;
          const newLength = newParts[0].length;

          if (newLength > prevLength) {
            // Каждые 3 цифры + пробел? => возможно надо сдвинуть курсор
            if ((newLength - 1) % 4 === 0) {
              position += 1;
            }
          }

          // Вызываем onChange, пробрасывая prefix
          props.onChange(e, {
            name: props.name,
            value: prefix + val
          });

          setHasError(false);
          setSelectionStart(position);
          setSelectionEnd(position);
        } else {
          // Если val пустое
          props.onChange(e, {
            name: props.name,
            value: ''
          });
          setHasError(false);
          setSelectionStart(position);
          setSelectionEnd(position);
        }
      }
    },
    [props, setHasError]
  );

  // Функция для рендера placeholder (вместо this.renderPlaceholder())
  const renderPlaceholder = () => {
    if (!props.placeholder) return null;
    return (
      <label
        htmlFor={props.id}
        style={props.placeholderStyle}
        className={getPlaceholderClassName()}
      >
        {props.placeholder}
      </label>
    );
  };

  // Функция для рендера ошибки (вместо this.renderTooltipError())
  const renderTooltipError = () => {
    if (!hasError || !error) return null;
    // Если у вас была логика через InputPopup иконку (errorSvg) — добавьте, как нужно
    return (
      <label htmlFor={props.id} className={props.className + ' error'}>
        {error}
      </label>
    );
  };

  // Проверка "пустой" ли инпут
  const isEmpty = !(
    (typeof props.value === 'number' && props.value.toString().length > 0) ||
    (typeof props.value === 'string' && props.value.length > 0)
  );

  return (
      <InputContainer ref={wrapperRef}>
        {/* Сам <input> */}
        <StyledInput
          ref={inputRef}
          browser={browser && browser.name}
          id={props.id}
          size={props.size}
          autoComplete="off"
          disabled={props.disabled}
          style={getInputStyle()}
          className={props.className}
          type={props.type || 'text'}
          name={getName(props.name || '')}
          value={props.value}
          placeholder={props.placeholder}
          onKeyPress={(e) => {
            if (typeof onKeyPress === 'function') {
              onKeyPress(e);
            }
          }}
          onChange={handleChange}
          onFocus={() => {
            setFocused(true);
            setHasError(false);
          }}
          onBlur={() => {
            // Если нужно что-то по blur, добавьте здесь
          }}
        />

        {/* Плейсхолдер */}
        {renderPlaceholder()}

        {/* Кнопка очистки (close) */}
        {!isEmpty &&
        typeof props.size === 'undefined' &&
        !props.disabled &&
        props.icon !== false && (
          <img
            className="close"
            src={Close}
            onClick={(e) => {
              props.onChange(e, {
                name: props.name,
                value: ''
              });
              setHasError(false);
            }}
            alt=""
          />
        )}
        {renderTooltipError()}
      </InputContainer>
  );
}

export default NumberInput;
