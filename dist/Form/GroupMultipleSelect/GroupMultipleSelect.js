import React from 'react';
import BaseInput from '../BaseInput';
import Checkbox from '../Checkbox';
import { InputWrapper, Item, Select as StyledSelect, Selected } from './styles';
import { Container } from '../styles/selectContainerStyle';
class GroupMultipleSelect extends BaseInput {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      select: false,
      hasError: false
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
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
  renderSelected() {
    const {
      items,
      selected
    } = this.props;
    let def = this.props.default;
    if (selected.length) {
      let selectedItms = [];
      items.map(item => {
        item.items.map(subItem => {
          if (this.props.selected.indexOf(subItem.id) !== -1) {
            selectedItms.push(subItem.name);
          }
          return;
        });
        return;
      });
      def = selectedItms.join(', ');
      if (def.length > 35) {
        def = def.slice(0, 34) + '...';
      }
    }
    return def;
  }
  handleShowSelect(select) {
    this.setState({
      select: select
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
      showAll
    } = this.props;
    let error = this.getError();
    let focus = this.state.hasError ? {
      'border': '1px solid #FF0000'
    } : {};
    return /*#__PURE__*/React.createElement(Container, {
      className: this.props.className + ' multi-select',
      style: this.props.style
    }, /*#__PURE__*/React.createElement(InputWrapper, {
      ref: this.setWrapperRef,
      style: focus
    }, /*#__PURE__*/React.createElement(Selected, {
      id: this.props.id,
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, /*#__PURE__*/React.createElement("span", null, this.renderSelected())), /*#__PURE__*/React.createElement(StyledSelect, {
      id: this.props.id + '-multi-select',
      className: this.props.className + ' select',
      select: this.state.select
    }, showAll ? this.renderSelectAll() : '', items.map((item, key) => /*#__PURE__*/React.createElement(Item, {
      key: item.id,
      id: this.props.id + '-' + item.id,
      className: this.props.className
    }, /*#__PURE__*/React.createElement("span", null, item.name), item.items.map((subItem, subKey) => /*#__PURE__*/React.createElement(Checkbox, {
      key: subKey,
      id: this.props.id + '-subitem-' + subItem.id,
      text: subItem.name,
      checked: this.props.selected.indexOf(subItem.id) !== -1,
      toggleCallback: e => {
        handle(subItem);
      }
    }))))), this.renderPlaceholder(), /*#__PURE__*/React.createElement("img", {
      className: "arrow",
      src: require('../../assets/arrow.svg').default,
      alt: "",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }), error && /*#__PURE__*/React.createElement("label", {
      htmlFor: this.props.id,
      className: this.props.className + " error",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, error)));
  }
}
export default GroupMultipleSelect;