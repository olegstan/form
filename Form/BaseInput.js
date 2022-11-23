import React, {Component} from 'react';

export default class BaseInput extends Component
{
  hasError()
  {
    const { name } = this.props;
    if(this.props.errors && typeof this.props.errors[name] !== 'undefined' && this.props.errors[name].length > 0)
    {
      return true;
    }
  }

  getError()
  {
    const { name } = this.props;

    if(this.props.errors && typeof this.props.errors[name] !== 'undefined' && this.props.errors[name].length > 0)
    {
      return this.state.error;
    }
  }

  getName(name)
  {
    return name.replace('country', 'couuntry').replace('state', 'staate');
  }

  handleClickOutside(e)
  {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target))
    {
      if(this.state.focused === true)
      {
        this.setState({
          focused: false,
          hasError: false
        }, () => {
          if(typeof this.props.onOutsideClick === 'function')
          {
            this.props.onOutsideClick(this.props.value);
          }
        })
      }
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  componentWillReceiveProps(nextProps)
  {
    const { name } = this.props;
    if(nextProps.errors && typeof nextProps.errors[name] !== 'undefined' && nextProps.errors[name].length > 0)
    {
      this.setState({
        error: nextProps.errors[name][0],
        hasError: true
      })
    }else{
      this.setState({
        error: null,
        hasError: false
      })
    }
  }

  getWrapperClasses()
  {
    let className = this.props.wrapperClassName;

    if(this.props.disabled)
    {
      className += ' disabled';
    }

    return className;
  }

  onBlur()
  {
    if(typeof this.props.onBlur === 'function')
    {
      this.props.onBlur();
    }
  }
}