import React, { createRef } from 'react';
import BaseInput from '../BaseInput';
import Checkbox from '../Checkbox';
import { InputWrapper, Select as StyledSelect, Selected } from './styles';
import { Container } from '../styles/selectContainerStyle';
class MultipleSelect extends BaseInput {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      select: false,
      hasError: false
    };
    this.wrapperRef = /*#__PURE__*/createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  handleClickOutside(e) {
    if (this.wrapperRef.current && !this.wrapperRef.current.contains(e.target)) {
      this.handleShowSelect(false);
      if (typeof this.props.onOutsideClick === 'function' && this.state.focused === true) {
        this.props.onOutsideClick(this.state.search);
      }
    }
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  renderSelected() {
    const {
      items,
      selected
    } = this.props;
    let def = this.props.default;
    if (selected.length) {
      let selectedItms = [];
      items.map(item => {
        if (this.props.selected.indexOf(item.id) !== -1) {
          selectedItms.push(item.name);
        }
        return;
      });
      def = selectedItms.join(', ');
      if (def.length > 50) {
        def = def.slice(0, 49) + '...';
      }
    }
    return def;
  }
  getArrow() {
    if (this.props.className === 'style1') {}
    return require('../../assets/arrow.svg').default;
  }
  handleShowSelect(select) {
    this.setState({
      select: select,
      hasError: false
    });
  }
  renderSelectAll() {
    const {
      handleAll
    } = this.props;
    if (this.props.selected.length) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        id: '',
        text: 'Снять все',
        checked: true,
        toggleCallback: e => {
          handleAll(false);
        }
      });
    } else {
      return /*#__PURE__*/React.createElement(Checkbox, {
        id: '',
        text: 'Выбрать все',
        checked: false,
        toggleCallback: e => {
          handleAll(true);
        }
      });
    }
  }
  render() {
    const {
      items,
      handle,
      selected
    } = this.props;
    let error = this.getError();
    return /*#__PURE__*/React.createElement(Container, {
      style: this.getContainerStyle(),
      className: this.props.className + ' ' + (this.state.select ? 'select' : '')
    }, /*#__PURE__*/React.createElement(InputWrapper, {
      ref: this.wrapperRef,
      className: 'wrapper ' + (this.state.select ? 'select' : '')
    }, /*#__PURE__*/React.createElement(Selected, {
      id: this.props.id,
      className: this.props.className + ' selected',
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, /*#__PURE__*/React.createElement("span", null, this.renderSelected())), /*#__PURE__*/React.createElement(StyledSelect, {
      id: this.props.id + '-multi-select',
      className: this.props.className + ' select',
      select: this.state.select
    }, this.renderSelectAll(), items.map((item, key) => /*#__PURE__*/React.createElement(Checkbox, {
      key: key,
      id: 'item-' + item.id,
      text: item.name,
      checked: this.props.selected.indexOf(item.id) !== -1,
      toggleCallback: e => {
        handle(item);
      }
    }))), this.renderPlaceholder(), /*#__PURE__*/React.createElement("img", {
      className: "arrow",
      src: this.getArrow(),
      alt: ""
    }), error && /*#__PURE__*/React.createElement("label", {
      htmlFor: this.props.id,
      className: this.props.className + " error",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, error)));
  }
}
export default MultipleSelect;