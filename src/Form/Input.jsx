// Input.js
import React from 'react';
import useBaseInput from './useBaseInput';
import InputPopup from './../Form/InputPopup/InputPopup';
import errorSvg from './../assets/error.svg';
import { StyledInput, InputContainer } from './newstyles';
import { Container } from './styles/containerStyle';

function Input(props) {
  // Деструктурируем всё нужное из хука
  const {
    wrapperRef,
    focused,
    hasError,
    error,
    setFocused,
    setHasError,
    browser,
    handleShowSelect,
    getPlaceholderClassName,
    getContainerStyle,
    getInputStyle,
    getName,
    getError,
    onBlurFunc
    // если нужен search, тоже можно взять:
    // search, setSearch,
  } = useBaseInput(props);

  const {
    id,
    size,
    autoComplete,
    disabled,
    className,
    type,
    name,
    value,
    placeholder,
    onKeyPress,
    onChange
  } = props;

  // Аналог проверки «пустой ли инпут»
  const empty = !(
    (typeof value === 'number' && value.toString().length > 0) ||
    (typeof value === 'string' && value.length > 0)
  );

  // Рендер плейсхолдера (аналог renderPlaceholder)
  const renderPlaceholder = () => {
    const { placeholder, id, placeholderStyle } = props;
    if (!placeholder) return null;

    return (
      <label
        htmlFor={id}
        style={placeholderStyle}
        className={getPlaceholderClassName()}
        onClick={() => handleShowSelect(true)}
      >
        {placeholder}
      </label>
    );
  };

  // Рендер подсказки-ошибки (аналог renderTooltipError)
  const renderTooltipError = () => {
    return hasError ? (
      <InputPopup
        trigger={
          <img
            id={'tooltip-' + id}
            className=""
            src={errorSvg}
            alt=""
          />
        }
      >
        <label htmlFor={id} className={className + ' error'}>
          {getError()}
        </label>
      </InputPopup>
    ) : null;
  };

  // Собираем сам <input> (аналог renderInput)
  const renderInput = () => {
    const handleClick = (e) => {
      e.stopPropagation();
      if (typeof props.onClick === 'function') {
        props.onClick(e);
      }
    };

    const handleChange = (e) => {
      onChange(e, {
        name: props.name,
        value: e.target.value
      });
      setHasError(false); // сбрасываем ошибку при вводе
    };

    const handleFocus = () => {
      setFocused(true);
      setHasError(false);
    };

    return (
      <StyledInput
        browser={browser && browser.name}
        id={id}
        style={getInputStyle()}
        size={size}
        autoComplete={autoComplete || 'off'}
        disabled={disabled}
        className={className}
        type={type}
        name={getName(name)}
        value={value}
        placeholder={placeholder}
        onClick={handleClick}
        onKeyPress={onKeyPress}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={() => {
          // Логика onBlur — вызов того, что было раньше:
          onBlurFunc();
          // Если нужно вернуть фокус в false по блюру:
          // setFocused(false);
        }}
      />
    );
  };

  return (
    <Container
      style={getContainerStyle()}
      size={size}
      disabled={disabled}
      className={className + (disabled ? ' disabled' : '')}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <InputContainer ref={wrapperRef}>
        {renderInput()}
        {renderPlaceholder()}

        {/* Кнопка очистки, если значение не пустое, нет size, icon !== false и не disabled */}
        {!empty &&
        typeof size === 'undefined' &&
        props.icon !== false &&
        !disabled && (
          <img
            className="close"
            src={require('./../assets/ic_close_only.svg').default}
            onClick={(e) => {
              onChange(e, {
                name: props.name,
                value: ''
              });
              setHasError(false);
            }}
            alt=""
          />
        )
        }

        {renderTooltipError()}
      </InputContainer>
    </Container>
  );
}

Input.defaultProps = {
  onKeyPress: () => {},
  onChange: () => {},
  disabled: false,
  value: '',
  placeholder: '',
  icon: '',
  className: '',
  wrapperClassName: '',
  error: '',
  type: 'text',
  style: {}
};

export default Input;
