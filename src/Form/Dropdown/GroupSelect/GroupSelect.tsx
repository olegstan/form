import React, {useEffect, useMemo, useRef, useState} from 'react';
import {StyledSelect} from "./styles";
import {StyledFakeInput} from "../../styles";
import useBaseInput from "../../hooks/useBaseInput";
import SelectProps from "../../types/SelectProps";
import GroupResults from "../components/GroupResults";
import MultiSelect from "../MultiSelect/MultiSelect";

const GroupSelect: React.FC<SelectProps> = ({
                                         focused = false,
                                         setFocused = () => {},
                                         onBlur = () => {},
                                         onKeyPress = () => {},
                                         onChange = () => {},
                                         onClick = () => {},
                                         disabled = false,
                                         className = '',
                                         style = {},
                                         id,
                                         name,
                                         value,
                                         error,
                                         options = [],
                                       }) => {

  const {
    handleFocus,
    handleBlur,
    getName,
  } = useBaseInput({
    disabled,
    name,
    onClick,
    onChange,
    setFocused,
    onBlur
  });


  // Локальный стейт: открыто ли меню
  const [selectOpen, setSelectOpen] = useState(false);
  const selectRef = useRef(null);

  const fakeOnChange = () => {

  }

  const handleChange = (e, item) => {
    e.stopPropagation();

    onChange(item);
    handleClose()
  }

  const handleOpen = (e) => {
    setSelectOpen(true)
    setFocused(true)
  }

  const handleClose = () => {
    setSelectOpen(false)
    setFocused(false)
  }

  // // Обработка клика вне компонента
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        handleClose()
      }
    };

    // Добавляем обработчик события при монтировании компонента
    document.addEventListener('mousedown', handleClickOutside);

    // Убираем обработчик события при размонтировании компонента
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setSelectOpen]);

  // // Подготавливаем список элементов (без выбранного)
  const filteredOptions = useMemo(
      () => options.filter((option) => option.id !== value),
      [options, value]
  );
  const selectedOption = useMemo(
      () => options.find((option) => option.id === value),
      [options, value]
  );
  const valueText = selectedOption ? selectedOption.name : '';
  const inputClassName = `input ${className}${focused ? ' focused' : ''}${error?.[0] ? ' error' : ''}`;

  return (<StyledSelect
      onClick={handleOpen}
      ref={selectRef}
  >
    <StyledFakeInput
        id={id}
        style={style}
        className={inputClassName}
        name={getName(name)}
    >
      {valueText}
    </StyledFakeInput>
    <GroupResults
        active={selectOpen && !disabled}
        id={id}
        options={filteredOptions}
        handleClick={handleChange}
        idPrefix={getName(name)}
    />
  </StyledSelect>)
}

GroupSelect.displayName = 'GroupSelect';

export default GroupSelect;