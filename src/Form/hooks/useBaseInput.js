import React, {useCallback, useEffect, useRef, useState} from 'react';
// import InputPopup from "../InputPopup/InputPopup";
// import errorSvg from "../../assets/error.svg";
import {detect} from 'detect-browser';

/**
 * Универсальный хук, повторяющий логику BaseInput:
 * - cDM/cWU для клика вне (handleClickOutside)
 * - focused
 * - getName (обход бага с autocomplete Safari)
 * - handleShowSelect
 * - renderPlaceholder, renderTooltipError (если нужно внутри потом вызывать)
 */

export default function useBaseInput(props, callerClassName) {
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

  // getName — чтобы Safari не автозаполнял поля с "state"/"country"
  const getName = useCallback((name) => {
    return name?.replace('country', 'couuntry')?.replace('state', 'staate');
  }, []);

  // getContainerStyle
  const getContainerStyle = useCallback(() => {
    let containerStyle = { ...props.containerStyle };
    if (focused) {
      containerStyle.border = '1px solid #1874DE';
    }
    return containerStyle;
  }, [props.containerStyle, focused]);

  // getWrapperStyle (если отличался от контейнера — бывает не у всех)
  const getWrapperStyle = useCallback(() => {
    let style = { ...props.containerStyle };
    if (focused) {
      style.border = '1px solid #1874DE';
    }
    return style;
  }, [props.containerStyle, focused]);


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

  // ------------------------------
  // Возвращаем всё, что может понадобиться дочерним компонентам
  // ------------------------------
  return {
    focused, setFocused,
    handleClickOutside,
    wrapperRef,
    browser,

    getName,
  };
}
