import React, { useState, useRef } from 'react';
import useBaseInput from './useBaseInput'; // <-- наш кастомный хук
import { detect } from 'detect-browser';
import { InputContainer, MaskedStyledInput } from './newstyles';
import { Container } from './styles/containerStyle';

function MaskedInput(props) {
  // 1. Достаём из useBaseInput (аналог "наследования" BaseInput)
  const {
    wrapperRef,
    focused,
    setFocused,
    hasError,
    setHasError,
    error,
    browser,
    getContainerStyle,
    getInputStyle,
    getName,
    getPlaceholderClassName
  } = useBaseInput(props);

  // 2. Проверка, «пустое ли» поле (как empty из класса)
  const isEmpty = !(
    (typeof props.value === 'number' && props.value.toString().length > 0) ||
    (typeof props.value === 'string' && props.value.length > 0)
  );

  // 3. Функция рендера плейсхолдера (аналог this.renderPlaceholder())
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

  // 4. Функция рендера ошибки (аналог this.renderTooltipError())
  //    Если ранее была логика через InputPopup с иконкой, добавьте при необходимости
  const renderTooltipError = () => {
    if (!hasError || !error) return null;
    return (
      <label htmlFor={props.id} className={props.className + ' error'}>
        {error}
      </label>
    );
  };

  // 5. Сама разметка
  return (
    <Container
      style={getContainerStyle()}
      disabled={props.disabled}
      className={
        props.className + (props.disabled ? ' disabled' : '')
      }
      onClick={(e) => e.stopPropagation()}
    >
      <InputContainer ref={wrapperRef}>
        <MaskedStyledInput
          browser={browser && browser.name}
          id={props.id}
          mask={props.mask}
          autoComplete="off"
          disabled={props.disabled}
          style={getInputStyle()}
          className={props.className}
          type={props.type}
          name={getName(props.name || '')}
          value={props.value}
          onKeyPress={(e) => {
            if (typeof props.onKeyPress === 'function') {
              props.onKeyPress(e);
            }
          }}
          onChange={(e) => {
            props.onChange(e, {
              name: props.name,
              value: e.target.value
            });
            setHasError(false);
          }}
          onFocus={() => {
            setFocused(true);
            setHasError(false);
          }}
          onBlur={() => {
            setFocused(false);
            setHasError(false);
          }}
        />

        {/* Плейсхолдер */}
        {renderPlaceholder()}

        {/* Кнопка очистки (close), если поле не пустое, нет size, не disabled */}
        {!isEmpty &&
        typeof props.size === 'undefined' &&
        !props.disabled && (
          <img
            className="close"
            src={require('./../assets/ic_close_only.svg').default}
            alt=""
            onClick={(e) => {
              props.onChange(e, {
                name: props.name,
                value: ''
              });
              setHasError(false);
            }}
          />
        )}

        {/* Ошибка */}
        {renderTooltipError()}
      </InputContainer>
    </Container>
  );
}

// Аналог static defaultProps
MaskedInput.defaultProps = {
  onKeyPress: () => {},
  onChange: () => {},
  disabled: false,
  value: '',
  placeholder: '',
  mask: '',
  icon: '',
  className: '',
  wrapperClassName: '',
  error: ''
};

export default MaskedInput;
