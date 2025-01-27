import React from 'react';
import BaseInput from "./BaseInput";

export default class BaseSearch extends BaseInput
{
  getInputStyle()
  {
    let inputStyle = {...this.props.inputStyle}

    if(this.props.className === 'style2')
    {
      inputStyle.color = '#fff';
    }

    return inputStyle;
  }

  getContainerStyle()
  {
    let containerStyle = {...this.props.containerStyle};

    // containerStyle.border = '1px solid #D2D1D1';

    if(this.state.focused)
    {
      containerStyle.border = '1px solid #1874DE';
    }

    if(this.state.hasError === true)
    {
      containerStyle.border = '1px solid #EF5E70';
    }

    return containerStyle;
  }

  getWrapperStyle()
  {
    let wrapperStyle = {...this.props.wrapperStyle};

    return wrapperStyle;
  }

  getInputContainerStyle()
  {
    let inputContainerStyle = {...this.props.inputContainerStyle};

    return inputContainerStyle;
  }

  handleClickOutside(e)
  {
    if (this.wrapperRef.current && !this.wrapperRef.current.contains(e.target))
    {
      if(this.state.focused === true)
      {
        this.setState({
          select: false,
          hasError: false,
          focused: false
        })
      }
    }
  }

  componentDidUpdate(prevProps)
  {
    const { name } = this.props;

    const newState = { ...this.state };
    let shouldUpdate = false;

    // Обработка ошибок
    const hasError = this.props.errors && typeof this.props.errors[name] !== 'undefined' && this.props.errors[name].length > 0;
    const error = hasError ? this.props.errors[name][0] : null;

    if (hasError !== this.state.hasError || error !== this.state.error) {
      newState.error = error;
      newState.hasError = hasError;
      shouldUpdate = true;
    }

    // Обработка изменения поиска
    if (this.props.search !== prevProps.search) {
      newState.search = this.props.search;
      shouldUpdate = true;
    }

    // Обновление состояния, если есть изменения
    if (shouldUpdate) {
      this.setState(newState);
    }
  }

  handleClickOutside(e)
  {
    if (this.wrapperRef.current && !this.wrapperRef.current.contains(e.target))
    {
      if(this.state.focused === true)
      {
        this.setState({
          select: false,
          hasError: false,
          focused: false
        })
      }
    }
  }

  setSearch(nextProps)
  {
    for (const index in nextProps)
    {
      if (nextProps[index] !== this.props[index])
      {
        if (index === 'search')
        {
          this.setState({
            search: nextProps[index]
          });
        }
      }
    }
  }

  getWrapperClasses(items)
  {
    return 'wrapper ' + (this.state.select && items.length ? 'select' : '') + (this.props.disabled ? ' disabled' : '')
  }
}