import React from 'react';
import useBaseInput from './hooks/useBaseInput'; // <-- наш кастомный хук
import { InputContainer, MaskedStyledInput } from './newstyles';
import { Container } from './styles/containerStyle';
import Close from './../assets/ic_close_only.svg';
function MaskedInput({
  onKeyPress = () => {},
  onChange = () => {},
  disabled = false,
  icon = '',
  wrapperClassName = '',
  ...props
}) {
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
  const isEmpty = !(typeof props.value === 'number' && props.value.toString().length > 0 || typeof props.value === 'string' && props.value.length > 0);

  // 3. Функция рендера плейсхолдера (аналог this.renderPlaceholder())
  const renderPlaceholder = () => {
    if (!props.placeholder) return null;
    return /*#__PURE__*/React.createElement("label", {
      htmlFor: props.id,
      style: props.placeholderStyle,
      className: getPlaceholderClassName()
    }, props.placeholder);
  };

  // 4. Функция рендера ошибки (аналог this.renderTooltipError())
  //    Если ранее была логика через InputPopup с иконкой, добавьте при необходимости
  const renderTooltipError = () => {
    if (!hasError || !error) return null;
    return /*#__PURE__*/React.createElement("label", {
      htmlFor: props.id,
      className: props.className + ' error'
    }, error);
  };

  // 5. Сама разметка
  return /*#__PURE__*/React.createElement(Container, {
    style: getContainerStyle(),
    disabled: props.disabled,
    className: props.className + (props.disabled ? ' disabled' : ''),
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(InputContainer, {
    ref: wrapperRef
  }, /*#__PURE__*/React.createElement(MaskedStyledInput, {
    browser: browser && browser.name,
    id: props.id,
    mask: props.mask,
    autoComplete: "off",
    disabled: props.disabled,
    style: getInputStyle(),
    className: props.className,
    type: props.type,
    name: getName(props.name || ''),
    value: props.value,
    onKeyPress: e => {
      if (typeof onKeyPress === 'function') {
        onKeyPress(e);
      }
    },
    onChange: e => {
      onChange(e, {
        name: props.name,
        value: e.target.value
      });
      setHasError(false);
    },
    onFocus: () => {
      setFocused(true);
      setHasError(false);
    },
    onBlur: () => {
      setFocused(false);
      setHasError(false);
    }
  }), renderPlaceholder(), !isEmpty && typeof props.size === 'undefined' && !props.disabled && /*#__PURE__*/React.createElement("img", {
    className: "close",
    src: Close,
    alt: "",
    onClick: e => {
      onChange(e, {
        name: props.name,
        value: ''
      });
      setHasError(false);
    }
  }), renderTooltipError()));
}
export default MaskedInput;