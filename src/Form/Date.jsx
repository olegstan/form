import React from 'react';
import BaseInput from './BaseInput';
import {InputContainer, MaskedStyledInput, sharedInputStyle} from './newstyles'
import {Container} from './styles/containerStyle'
import {Url} from "finhelper";
import styled from "styled-components";
import calendarSvg from "./../assets/calendar.svg";

export default class DateTime extends BaseInput {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            focused: false,
            hasError: false,
            Input: null,
            componentsLoaded: false,
            date: props.value ? props.value : null
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
        onChangeDateInner: () => {
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

    handleClickOutside(e)
    {
        // //фикс для дат, поскольку контейнер с датой находится вни контейнера и это не должно отрабатывать как клик вне инпута
        // const isInsideFlatpickr = event.target.closest('.flatpickr-calendar');
        //
        // if (this.wrapperRef && !this.wrapperRef.contains(e.target) && !isInsideFlatpickr)
        // {
        //     if(this.state.focused === true)
        //     {
        //         this.setState({
        //             focused: false,
        //             hasError: false
        //         }, () => {
        //             if(typeof this.props.onOutsideClick === 'function')
        //             {
        //                 this.props.onOutsideClick(this.props.value);
        //             }
        //         })
        //     }
        // }
    }

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

    componentDidUpdate(prevProps, nextProps)
    {
        if (nextProps.value !== prevProps.value) {
            this.setState({ date: this.props.value });
        }
    }

    formatDate(date) {
        var month = '' + (date.getMonth() + 1),
          day = '' + date.getDate(),
          year = date.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [day, month, year].join('.');
    }

    handleDateChange = (date) => {
        if (typeof this.props.onChangeDateInner === 'function') {
            this.props.onChangeDateInner({}, {
                value: this.formatDate(date[0]),
                date: date[0]
            });
        }
    };

    handleInputChange = (e) => {
        const value = e.target.value;

        this.setState({ date: value });

        if (typeof value === 'string' && value !== '__.__.____' && !value.includes('_')) {
            this.props.onChangeDateInner({}, {
                date: value,
                value: value,
            });
        } else {
            this.props.onChangeDateInner({}, {
                date: null,
                value: value,
            });
        }
    };

    getOptions()
    {
        let options = {
            ...{
                dateFormat: 'd.m.Y',
                allowInput: true,
                // position: "auto",
                disableMobile: "true",
                // static: true
            }, ...this.props
        }

        if(this.props.defaultDate)
        {
            options.defaultDate = this.props.defaultDate;
        }

        return options;
    }

    render() {
        const {Input, componentsLoaded} = this.state;

        return componentsLoaded ? <Container
            style={this.getContainerStyle()}
            className={this.props.className + (this.props.disabled ? ' disabled' : '')}
            disabled={this.props.disabled}
            onClick={(e) => {
            }}>
            <InputContainer
                needMargin={true}
                focus={this.state.focused}
                ref={this.setWrapperRef}
            >
                {this.props.disabled ? this.renderInput() : <Input
                    id={this.props.id}
                    style={this.props.style}
                    disabled={this.props.disabled}
                    value={this.state.date}
                    placeholder={this.props.placeholder}
                    autoComplete={this.props.autoComplete ? this.props.autoComplete : 'off'}
                    options={this.getOptions()}
                    className={this.props.className}
                    onReady={(_, __, fp) => {
                        fp.calendarContainer.id = this.props.id + '-container';
                    }}
                    onChange={(value, dateStr, instance) => {
                        console.log(value)
                        console.log(dateStr)
                        console.log(instance)

                        this.handleDateChange(value);
                    }}
                    onOpen={() => {
                        this.setState({
                            focused: true,
                            hasError: false
                        });
                    }}
                    onClose={(selectedValue, dateStr, instance) => {
                        this.setState({ focused: false, hasError: false }, () => {
                            if (typeof this.props.onOutsideClick === 'function') {
                                this.props.onOutsideClick();
                            }
                        });
                    }}
                    render={({ id, ...props }, ref) => {
                        return (
                          <MaskedStyledInput
                            autoComplete={'off'}
                            mask="99.99.9999"
                            id={id}
                            value={props.value}
                            onChange={this.handleInputChange}
                            style={props.style}
                            className={props.className}
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
                />}
                {this.renderPlaceholder()}
                {this.props.icon !== false && <img className='calendar' src={calendarSvg} alt=''/>}
                {this.renderTooltipError()}
            </InputContainer>
        </Container> : '';
    }
}
