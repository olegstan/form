// useBaseInput.js
import { useState, useRef, useEffect, useCallback } from 'react';
import { detect } from 'detect-browser';

function useBaseInput(props) {
  // Локальный стейт, аналогичен this.state
  const [focused, setFocused] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  // Если вам действительно нужна логика для search,
  // которую вы проверяли в getPlaceholderClassName,
  // можно добавить ещё один стейт:
  // const [search, setSearch] = useState('');

  // Ref для «клика вне» контейнера
  const wrapperRef = useRef(null);

  // Определяем браузер (как и в вашем коде)
  const browser = detect();

  /**
   * Аналог componentDidMount / componentWillUnmount
   * Вешаем и убираем слушатель клика мышкой
   */
  const handleClickOutside = useCallback((e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      if (focused) {
        setFocused(false);
        setHasError(false);
        if (typeof props.onOutsideClick === 'function') {
          props.onOutsideClick(props.value);
        }
      }
    }
  }, [focused, props.onOutsideClick, props.value]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  /**
   * Аналог componentDidUpdate
   * Следим за изменениями props.errors и props.name
   * и при необходимости выставляем (hasError, error) в стейт
   */
  useEffect(() => {
    const { name, errors } = props;
    const isError = errors && errors[name] && errors[name].length > 0;
    const newError = isError ? errors[name][0] : null;

    // Если что-то изменилось — обновляем локальный стейт
    if (isError !== hasError || newError !== error) {
      setHasError(isError);
      setError(newError);
    }
  }, [props.errors, props.name, hasError, error]);

  // «Заглушка» из BaseInput — пока метод пустой
  const handleShowSelect = (select) => {
    // ваш код для select (если понадобится)
  };

  // Проверка на placeholder-класс
  // (если нужно использовать search, раскомментируйте логику)
  const getPlaceholderClassName = () => {
    let bool = false;

    if (focused) {
      bool = true;
    } else if (props.selected) {
      bool = true;
    } else if (
      (props.value === 0 || props.value) &&
      props.value !== '' &&
      !props.inputMask
    ) {
      bool = true;
    } else if (
      props.value &&
      typeof props.value === 'string' &&
      props.value.replace(props.inputMask, '') !== ''
    ) {
      bool = true;
    }else if (typeof search === 'string' && search.length > 0) {
      bool = true;
    }

    return 'placeholder ' + (bool ? 'active' : '');
  };

  // Стили контейнера
  const getContainerStyle = () => {
    let containerStyle = { ...props.containerStyle };
    if (focused) {
      containerStyle.border = '1px solid #1874DE';
    }
    if (hasError) {
      containerStyle.border = '1px solid #EF5E70';
    }
    return containerStyle;
  };

  // Стили обёртки (если отличается от контейнера)
  const getWrapperStyle = () => {
    let containerStyle = { ...props.containerStyle };
    if (focused) {
      containerStyle.border = '1px solid #1874DE';
    }
    if (hasError) {
      containerStyle.border = '1px solid #EF5E70';
    }
    return containerStyle;
  };

  // Стили самого инпута
  const getInputStyle = () => {
    let inputStyle = { ...props.style };
    if (props.className === 'style2') {
      inputStyle.color = '#fff';
    }
    return inputStyle;
  };

  // Прямой аналог hasError() из класса
  const hasErrorFunc = () => {
    const { name, errors } = props;
    return errors && errors[name] && errors[name].length > 0;
  };

  // Прямой аналог getError() из класса
  const getError = () => {
    const { name, errors } = props;
    if (errors && errors[name] && errors[name].length > 0) {
      return error;
    }
    return null;
  };

  // Для обхода автокомплита в Safari
  const getName = (name) => {
    return name.replace('country', 'couuntry').replace('state', 'staate');
  };

  // Просто вызываем props.onBlur, если он есть
  const onBlurFunc = () => {
    if (typeof props.onBlur === 'function') {
      props.onBlur();
    }
  };

  return {
    wrapperRef,
    focused,
    hasError,
    error,
    // search, setSearch, // если нужно работать с поиском
    setFocused,
    setHasError,
    setError,
    browser,
    handleShowSelect,
    getPlaceholderClassName,
    getContainerStyle,
    getWrapperStyle,
    getInputStyle,
    hasErrorFunc,
    getError,
    getName,
    onBlurFunc
  };
}

export default useBaseInput;
