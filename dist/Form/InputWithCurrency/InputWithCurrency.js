import React from 'react';
import { connect } from "react-redux";
import BaseInput from '../BaseInput';
import { Container, Input as StyledInput, InputContainer, InputWrapper, Item, Select as StyledSelect, Selected } from './newcurrencystyles';
import Money from "../../Helpers/Money";
class InputWithCurrency extends BaseInput {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      focused: false,
      hasError: false,
      select: false
    };
    if (!props.selected) {
      if (props.currencies.length > 0) {
        props.handle(props.currencies[0]);
      }
    }
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.setInputRef = this.setInputRef.bind(this);
  }
  setInputRef(node) {
    if (node) {
      // node.focus();
    }
    this.inputRef = node;
  }
  componentDidUpdate(prevProps, prevState) {
    const {
      value
    } = this.props;
    const {
      selectionStart,
      selectionEnd
    } = this.state;
    if (prevProps.value !== value && this.state.focused === true) {
      this.inputRef.selectionStart = selectionStart;
      this.inputRef.selectionEnd = selectionEnd;
    }
  }
  handleClickOutside(e) {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.handleShowSelect(false);
    }
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   *
   */
  static defaultProps = {
    onKeyPress: () => {},
    onChange: () => {},
    disabled: false,
    value: '',
    placeholder: '',
    icon: '',
    className: '',
    wrapperClassName: '',
    error: '',
    style: {}
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      name,
      handle,
      currencyField
    } = this.props;
    if (nextProps.errors && typeof nextProps.errors[name] !== 'undefined' && nextProps.errors[name].length > 0 || nextProps.errors && typeof nextProps.errors[currencyField] !== 'undefined' && nextProps.errors[currencyField].length > 0) {
      this.setState({
        hasError: true
      });
    } else {
      this.setState({
        hasError: false
      });
    }
  }
  getError() {
    const {
      name,
      currencyField
    } = this.props;
    if (this.props.errors && typeof this.props.errors[name] !== 'undefined' && this.props.errors[name].length > 0) {
      return this.props.errors[name][0];
    }
    if (this.props.errors && typeof this.props.errors[currencyField] !== 'undefined' && this.props.errors[currencyField].length > 0) {
      return this.props.errors[currencyField][0];
    }
  }
  handleShowSelect(select) {
    this.setState({
      select: select
    });
  }
  handleChange(e) {
    let pattern = /^[0-9\.\,\ \-]+$/;
    if (e.target.value === '' || pattern.test(e.target.value)) {
      let value = e.target.value.replace(/,/g, '.').replace(/ /g, '');
      let position = e.target.selectionStart;
      if (value.length > 0) {
        let prefix = '';
        if (value[0] === '-') {
          prefix = '-';
          value = value.replace('-', '');
        }
        let parts = value.split('.');
        if (typeof parts[1] !== 'undefined') {
          if (parts[1] !== '') {
            value = Money.formatForInput(value, parts[1].length);
          } else {
            value = Money.formatForInput(value, 0) + '.';
          }
        } else {
          value = Money.formatForInput(value, 0);
        }
        let prevParts = this.props.value.toString().split('.');
        let newParts = value.split('.');
        let prevLength = prevParts[0].length;
        let newLength = newParts[0].length;
        if (newLength > prevLength) {
          if ((newLength - 1) % 4 === 0) {
            position += 1;
          }
        }
        this.props.onChange(e, {
          name: this.props.name,
          value: prefix + value
        });
        this.setState({
          hasError: false,
          selectionStart: position,
          selectionEnd: position
        });
      } else {
        this.props.onChange(e, {
          name: this.props.name,
          value: ''
        });
        this.setState({
          hasError: false,
          selectionStart: position,
          selectionEnd: position
        });
      }
    }
  }
  renderSelected() {
    const {
      currencies,
      selected
    } = this.props;
    let code = '';
    if (!selected) {
      return;
    }
    currencies.map(item => {
      if (selected.id === item.id) {
        code = item.code;
      }
      return;
    });
    return code;
  }
  render() {
    const {
      handle,
      name
    } = this.props;
    let style = {};
    if (this.props.style) {
      style = {
        ...this.props.style
      };
    }
    let error = this.getError();
    let focus = this.state.focused ? '1px solid #1874DE' : '';
    if (this.state.hasError === true) {
      focus = '1px solid #EF5E70';
    }
    style.border = focus;
    return /*#__PURE__*/React.createElement(Container, {
      style: style
    }, /*#__PURE__*/React.createElement(InputContainer, {
      className: this.getWrapperClasses() + (this.props.disabled ? ' disabled' : '')
    }, /*#__PURE__*/React.createElement(StyledInput, {
      ref: this.setInputRef,
      id: this.props.id,
      autoComplete: 'off',
      disabled: this.props.disabled,
      style: this.props.style,
      className: this.props.className,
      type: this.props.type,
      name: this.getName(name),
      value: this.props.value,
      placeholder: this.props.placeholder,
      onKeyPress: e => {
        if (typeof this.props.onKeyPress === 'function') {
          this.props.onKeyPress(e);
        }
      },
      onPaste: e => {
        console.error(e);
      },
      onChange: e => {
        this.handleChange(e);
      },
      onFocus: () => {
        this.setState({
          focused: true,
          hasError: false
        });
      },
      onBlur: () => {
        this.setState({
          focused: false,
          hasError: false
        }, () => {
          this.onBlur();
        });
      }
    }), this.props.placeholder ? /*#__PURE__*/React.createElement("label", {
      htmlFor: this.props.id,
      className: "placeholder"
    }, this.props.placeholder) : '', error ? /*#__PURE__*/React.createElement("label", {
      htmlFor: this.props.id,
      className: "error"
    }, error) : ''), /*#__PURE__*/React.createElement(InputWrapper, {
      className: this.getWrapperClasses(),
      ref: this.setWrapperRef,
      onClick: () => {
        this.handleShowSelect(!this.state.select);
      }
    }, /*#__PURE__*/React.createElement(Selected, {
      id: 'selected-currency',
      className: this.getWrapperClasses(),
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, /*#__PURE__*/React.createElement("span", null, this.renderSelected())), /*#__PURE__*/React.createElement(StyledSelect, {
      id: 'select-currency',
      className: this.props.className + ' select',
      select: this.state.select
    }, this.props.currencies.map((item, key) => /*#__PURE__*/React.createElement(Item, {
      key: item.id,
      onClick: () => {
        handle(item);
        this.handleShowSelect(false);
      }
    }, /*#__PURE__*/React.createElement("span", {
      id: 'currency-' + item.id
    }, item.code, " - ", item.name))))));
  }
}
const enhance = connect(state => ({
  currencies: state.interfaceComponents.currencies
}), {});
export default enhance(InputWithCurrency);