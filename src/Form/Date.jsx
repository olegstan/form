import React from 'react';
import BaseInput from './BaseInput';
import {InputContainer, MaskedStyledInput, sharedInputStyle} from './newstyles'
import {Container} from './styles/containerStyle'
import InputPopup from "./InputPopup/InputPopup";
import moment from 'moment/moment';
import {Url} from "finhelper";
import styled from "styled-components";
import calendarSvg from "./../assets/calendar.svg";
import errorSvg from "./../assets/error.svg";

export default class DateTime extends BaseInput {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            focused: false,
            hasError: false,
            Input: null,
            componentsLoaded: false
        }

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    /**
     *
     */
    static defaultProps = {
        onKeyPress: () => {
        },
        onChange: () => {
        },
        disabled: false,
        value: '',
        placeholder: '',
        mask: '',
        icon: '',
        className: '',
        wrapperClassName: '',
        error: '',
        inputMask: '__.__.____'//маска для формата данных чтобы проверять пустое поле или нет
    };

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        // Динамический импорт библиотеки Flatpickr
        Promise.all([
            import('flatpickr'),
            import('react-flatpickr'),
            import('flatpickr/dist/l10n/ru.js'),
            import('flatpickr/dist/flatpickr.css'),
        ]).then(([flatpickr, Flatpickr, {Russian}]) => {

            let url = Url.getCurrentUrl();
            let lang = localStorage.getItem('language_id');

            if (url.includes('/ru/') || parseInt(lang) === 1 || lang === null) {
                try {
                    flatpickr.default.localize(Russian);
                } catch (e) {
                    console.error(e)
                }
            }

            // Определение компонента с применением стилей
            const DateStyledInput = styled(Flatpickr.default)`
              ${sharedInputStyle}
            `
            this.setState({
                componentsLoaded: true,
                Input: DateStyledInput
            });
        });
    }

    createDateFromString(dateStr)
    {
        // Check format: DD.MM.YYYY or DD.MM.YYYY HH:mm:ss
        const formatCheck = /^(\d{2})\.(\d{2})\.(\d{4})$/;
        const match = dateStr.match(formatCheck);

        if (!match) {
            return null;
        }

        // Extract parts of the date
        const day = parseInt(match[1], 10);
        const month = parseInt(match[2], 10) - 1; // Month is 0-indexed in JavaScript Date
        const year = parseInt(match[3], 10);

        // Create date object
        const date = new Date(year, month, day);

        // Validate the date (checks for overflow)
        if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
            return null
        }

        return date;
    }

    formatDate(date) {
        var month = '' + (date.getMonth() + 1),
            day = '' + date.getDate(),
            year = date.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    setDate(value, dateStr, instance, callback) {
        let date = null;
        if (value && value.length) {
            date = value[0];
        }

        if (date !== '' && date != null) {
            callback(date)
            this.props.onChange({}, {
                name: this.props.name,
                value: this.formatDate(date),
                date: date
            })
        } else {
            this.props.onChange({}, {
                name: this.props.name,
                value: null,
                date: null,
            })
        }
        this.setState({
            hasError: false
        });
    }

    setValidDate(value)
    {
        let date = this.createDateFromString(value);

        if(value && value.length === 10 && !value.includes('_'))
        {
            this.props.onChange({}, {
                name: this.props.name,
                value: value,
                date: date
            })
        }else{
            this.props.onChange({}, {
                name: this.props.name,
                value: value,
                date: null
            })
        }
    }

    render() {
        const {Input, componentsLoaded} = this.state;
        const {valueStr} = this.props;

        let error = this.getError();

        let value = null;

        if (this.props.value && typeof this.props.value.getMonth === 'function') {
            value = this.props.value;
        }

        let options = {
            ...{
                dateFormat: 'd.m.Y',
                allowInput: true,
                position: "auto",
                disableMobile: "true",
                // static: true
            }, ...this.props
        };

        if(this.props.defaultDate)
        {
          options.defaultDate = this.props.defaultDate;
        }

        return componentsLoaded ? <Container
            style={this.getContainerStyle()}
            className={this.props.className + (this.props.disabled ? ' disabled' : '')}
            disabled={this.props.disabled}
            onClick={(e) => {
            }}>
            <InputContainer
                needMargin={true}
                focus={this.state.focused}
            >
                <Input
                    id={this.props.id}
                    style={this.props.style}
                    disabled={this.props.disabled}
                    value={value}
                    placeholder={this.props.placeholder}
                    autoComplete={this.props.autoComplete ? this.props.autoComplete : 'off'}
                    options={options}
                    className={this.props.className}
                    onReady={(_, __, fp) => {
                        fp.calendarContainer.id = this.props.id + '-container';
                    }}
                    onMonthChange={(value, dateStr, instance) => {
                        if (dateStr) {
                            this.setDate(value, dateStr, instance, (date) => {
                                date.setMonth(instance.currentMonth);
                            })
                        }
                    }}
                    onYearChange={(value, dateStr, instance) => {
                        if (dateStr) {
                            this.setDate(value, dateStr, instance, (date) => {
                                date.setYear(instance.currentYear);
                            })
                        }
                    }}
                    onKeyUp={(e) => {
                        let value = e.target.value;

                        if (value.length === 10) {
                            let date = moment(value, 'DD.MM.YYYY')
                            if (date && date.isValid() && date.format('DD.MM.YYYY') === value) {
                                this.setDate([date.toDate()], value, null, (date) => {

                                })
                            }
                        }
                    }}
                    onChange={(value, dateStr, instance) => {
                        this.setDate(value, dateStr, instance, (date) => {

                        })
                    }}
                    onOpen={() => {
                        this.setState({
                            focused: true,
                            hasError: false
                        });
                    }}
                    onClose={() => {
                        this.setValidDate(valueStr);

                        this.setState({
                            focused: false,
                            hasError: false
                        }, () => {
                            if(typeof this.props.onOutsideClick === 'function')
                            {
                                this.props.onOutsideClick();
                            }
                        });
                    }}
                    render={({ id }, ref) => {
                        return (
                          <MaskedStyledInput
                            autoComplete={'off'}
                            mask="99.99.9999"
                            id={id}
                            value={valueStr}
                            onChange={e =>
                            {
                                let value = e.target.value;

                                this.setValidDate(value);
                            }}
                            style={this.props.style}
                            className={this.props.className}
                            onFocus={() => {
                                this.setState({
                                    focused: true,
                                    hasError: false
                                });
                            }}
                          >
                              {(inputProps) => <input ref={ref} {...inputProps} />}
                          </MaskedStyledInput>
                        );
                    }}
                />
                {this.renderPlaceholder()}
                {this.props.icon !== false && <img className='calendar' src={calendarSvg} alt=''/>}
                {this.state.hasError ? <InputPopup
                    trigger={<img id={'tooltip-' + this.props.id} className='' src={errorSvg} alt='' onClick={() => {}}/>}>
                    <label htmlFor={this.props.id} className={this.props.className + " error"}>{error}</label>
                </InputPopup> : ''}
            </InputContainer>
        </Container> : '';
    }
}
