import React, {useCallback, useEffect, useRef, useState} from 'react';

import useBaseInput from '../hooks/useBaseInput';

import {InputContainer, MaskedStyledInput} from './../newstyles';
import {Container} from './../styles/containerStyle';
import calendarSvg from './../../assets/calendar.svg';
import mountFlatpickr from "./utils/mountFlatpickr";

function DateInput({
                       onKeyPress = () => {},
                       onChange = () => {},
                       disabled = false,
                       value = '',
                       placeholder = '',
                       mask = '',
                       icon = '',
                       className = '',
                       wrapperClassName = '',
                       inputMask = '__.__.____',
                       ...props
                   }) {
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

    const [componentsLoaded, setComponentsLoaded] = useState(false);
    const [InputComponent, setInputComponent] = useState(null);
    const [date, setDate] = useState(value);

    const flatpickrInstance = useRef(null);

    useEffect(() => {
        return mountFlatpickr(setComponentsLoaded, setInputComponent)
    }, []);

    const handleClickOutside = useCallback(
      (e) => {
          const isInsideFlatpickr = e.target.closest('.flatpickr-calendar');
          if (wrapperRef.current && !wrapperRef.current.contains(e.target) && !isInsideFlatpickr) {
              if (focused) {
                  setFocused(false);
                  setHasError(false);
                  if (typeof props.onOutsideClick === 'function') {
                      props.onOutsideClick(value);
                  }
              }
          }
      },
      [focused, props.onOutsideClick, value, setFocused, setHasError, wrapperRef]
    );

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    useEffect(() => {
        return () => {
            if (flatpickrInstance.current) {
                flatpickrInstance.current.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (value !== date) {
            setDate(value);
        }
    }, [value, date]);

    const formatDate = (d) => {
        if (!(d instanceof Date)) return '';
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        return `${day}.${month}.${year}`;
    };

    const handleDateChange = (selectedDates) => {
        if (typeof onChange === 'function') {
            onChange({}, {
                value: formatDate(selectedDates[0]),
                date: selectedDates[0]
            });
        }
    };

    const handleInputChange = (e) => {
        const val = e.target.value;
        setDate(val);

        if (
          typeof val === 'string' &&
          val !== '__.__.____' &&
          !val.includes('_')
        ) {
            onChange({}, { date: val, value: val });
        } else {
            onChange({}, { date: null, value: val });
        }
    };

    const getOptions = () => {
        let opts = {
            dateFormat: 'd.m.Y',
            allowInput: true,
            disableMobile: 'true',
            ...props
        };
        if (props.defaultDate) {
            opts.defaultDate = props.defaultDate;
        }
        return opts;
    };

    if (!componentsLoaded || !InputComponent) return null;

    const renderInputOrFlatpickr = () => {
        if (disabled) {
            return (
              <MaskedStyledInput
                mask="99.99.9999"
                value={date}
                disabled
                onChange={() => {}}
              >
                  {(inputProps) => <input {...inputProps} />}
              </MaskedStyledInput>
            );
        }

        return (
          <InputComponent
            id={props.id}
            style={props.style}
            disabled={disabled}
            value={date}
            placeholder={placeholder}
            autoComplete={props.autoComplete || 'off'}
            options={getOptions()}
            className={className}
            onReady={(_, __, fp) => {
                flatpickrInstance.current = fp;
                fp.calendarContainer.id = `${props.id}-container`;
            }}
            onChange={handleDateChange}
            onOpen={() => {
                setFocused(true);
                setHasError(false);
            }}
            onClose={() => {
                setFocused(false);
                setHasError(false);
            }}
            render={({ id, ...restProps }, refEl) => (
              <MaskedStyledInput
                autoComplete="off"
                mask="99.99.9999"
                id={id}
                value={restProps.value}
                onChange={handleInputChange}
                style={restProps.style}
                className={restProps.className}
                onFocus={() => {
                    setFocused(true);
                    setHasError(false);
                }}
              >
                  {(inputProps) => <input ref={refEl} {...inputProps} />}
              </MaskedStyledInput>
            )}
          />
        );
    };

    return (
      <Container
        style={getContainerStyle()}
        className={`${className} ${disabled ? 'disabled' : ''}`}
        disabled={disabled}
      >
          <InputContainer ref={wrapperRef} needMargin={true} focus={focused}>
              {renderInputOrFlatpickr()}

              {placeholder && (
                <label
                  htmlFor={props.id}
                  style={props.placeholderStyle}
                  className={getPlaceholderClassName()}
                >
                    {placeholder}
                </label>
              )}

              {icon !== false && (
                <img className="calendar" src={calendarSvg} alt="" />
              )}

              {hasError && error && (
                <label
                  htmlFor={props.id}
                  className={`${className} error`}
                  style={{ color: '#EF5E70' }}
                >
                    {error}
                </label>
              )}
          </InputContainer>
      </Container>
    );
}

export default DateInput;
