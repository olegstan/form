import {useCallback, useEffect, useRef, useState} from 'react';
import InputPopup from "../InputPopup/InputPopup";
import errorSvg from "../../assets/error.svg";
import {detect} from 'detect-browser';

/**
 * Универсальный хук, повторяющий логику BaseInput:
 * - cDM/cWU для клика вне (handleClickOutside)
 * - cDU для обновления ошибок из props.errors
 * - focused, hasError, error в стейте
 * - getPlaceholderClassName, style, getWrapperStyle, getInputStyle
 * - getName (обход бага с autocomplete Safari)
 * - handleShowSelect
 * - renderPlaceholder, renderTooltipError (если нужно внутри потом вызывать)
 */

export default function useBaseDateInput(props, callerClassName) {
  // ------------------------------
  // Состояния из BaseInput (this.state)
  // ------------------------------
  const [focused, setFocused] = useState(false);  // аналог this.state.focused

  // Если вам нужна логика поиска (this.state.search), можете добавить:
  // const [search, setSearch] = useState('');

  // ------------------------------
  // Refs
  // ------------------------------
  const wrapperRef = useRef(null); // аналог this.wrapperRef

  // ------------------------------
  // Определение браузера (detect-browser)
  // ------------------------------
  const browser = detect();

  // ------------------------------
  // Обработка «клика вне компонента» (componentDidMount / willUnmount)
  // ------------------------------
  const handleClickOutside = useCallback((e) => {
    // Если кликнули вне wrapperRef...
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      // ...и при этом инпут в фокусе...
      if (focused) {
        setFocused(false);
        // Если есть коллбэк onOutsideClick
        if (typeof props.onOutsideClick === 'function') {
          props.onOutsideClick(props.value);
        }
      }
    }
  }, [focused, props]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  // ------------------------------
  // Аналог componentDidUpdate: следим за props.errors и меняем hasError/error
  // ------------------------------
  useEffect(() => {
    const { name, errors } = props;
    const isError = errors && name && errors[name] && errors[name].length > 0;
    const newError = isError ? errors[name][0] : null;

    if (isError !== hasError || newError !== error) {
    }
  }, [props.errors, props.name, hasError, error]);

  // ------------------------------
  // Прочие методы из BaseInput
  // ------------------------------

  // Полиморфный метод, если где-то вызывается (пока был пустой)
  const handleShowSelect = useCallback((select) => {
    // ...
  }, []);

  // getName — чтобы Safari не автозаполнял поля с "state"/"country"
  const getName = useCallback((name) => {
    return name?.replace('country', 'couuntry')?.replace('state', 'staate');
  }, []);

  // style
  const style = useCallback(() => {
    let containerStyle = { ...props.containerStyle };
    if (focused) {
      containerStyle.border = '1px solid #1874DE';
    }
    if (hasError) {
      containerStyle.border = '1px solid #EF5E70';
    }
    return containerStyle;
  }, [props.containerStyle, focused, hasError]);


  // getPlaceholderClassName
  const getPlaceholderClassName = useCallback(() => {
    let isActive = false;
    // Логика, которая была в BaseInput:
    if (focused) {
      isActive = true;
    } else if (props.selected) {
      // если есть props.selected
      isActive = true;
    } else if (
      (props.value === 0 || props.value) &&
      props.value !== '' &&
      !props.inputMask
    ) {
      isActive = true;
    } else if (
      props.value &&
      typeof props.value === 'string' &&
      props.value.replace(props.inputMask, '') !== ''
    ) {
      isActive = true;
    }else if (props.search && props.search.length > 0) {
      isActive = true;
    }else if (callerClassName === 'FileInput') {
      isActive = true;
    }
    return 'placeholder ' + (isActive ? 'active' : '');
  }, [focused, props.value, props.selected, props.inputMask]);

  // getWrapperClasses (если где-то используется для className)
  const getWrapperClasses = useCallback(() => {
    let className = props.wrapperClassName || '';
    if (props.disabled) {
      className += ' disabled';
    }
    return className;
  }, [props.wrapperClassName, props.disabled]);

  // onBlur — если нужно внутри компонента просто вызвать props.onBlur()
  const onBlurFunc = useCallback(() => {
    if (typeof props.onBlur === 'function') {
      props.onBlur();
    }
  }, [props.onBlur]);

  // ------------------------------
  // Общие рендер-методы (если в детях вы вызывали напрямую)
  // ------------------------------

  // renderPlaceholder — возвращает готовый <label> (если хотите прям "по-старому")
  const renderPlaceholder = useCallback(() => {
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
  }, [props.placeholder, props.id, props.placeholderStyle, handleShowSelect, getPlaceholderClassName]);

  // renderTooltipError — возвращает ваш InputPopup с иконкой errorSvg
  const renderTooltipError = useCallback(() => {
    if (!hasError || !error) return null;
    return (
      <InputPopup
        trigger={
          <img
            id={'tooltip-' + props.id}
            src={errorSvg}
            alt=""
          />
        }
      >
        <label htmlFor={props.id} className={props.className + ' error'}>
          {error}
        </label>
      </InputPopup>
    );
  }, [hasError, error, props.id, props.className]);

  // renderInput — часто в классах вы переопределяли,
  // но если хотите чтобы hook возвращал «базовый» input, можно оставить:
  const renderInput = useCallback(() => {
    // пример:
    // return <StyledInput .../>
    // Но чаще вы это делаете уже в дочернем компоненте.
    return null;
  }, []);

  // ------------------------------
  // Возвращаем всё, что может понадобиться дочерним компонентам
  // ------------------------------
  return {
    // state и их сеттеры
    focused, setFocused,
    // ref
    wrapperRef,

    // browser detect
    browser,

    // методы
    handleShowSelect,
    handleClickOutside,
    getName,
    style,
    getPlaceholderClassName,
    getWrapperClasses,

    // "рендерные" методы, если вы хотите пользоваться ими напрямую
    renderPlaceholder,
    renderTooltipError,
    renderInput
  };
}
