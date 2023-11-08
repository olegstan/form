import React from 'react';
import BaseSearch from '../BaseSearch';
import { Container, Input as StyledInput, InputContainer, InputWrapper, Item, Select as StyledSelect, SubItem } from './newstyles';
import { Loader } from '../newstyles';
import InputPopup from "../InputPopup/InputPopup";
import { ReactComponent as LoadImage } from '../../assets/loader.svg';
class GroupRemoteSearch extends BaseSearch {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      select: false,
      focused: false,
      hasError: false,
      search: props.search ? props.search : ''
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  handleShowSelect(bool) {
    this.setState({
      select: bool,
      hasError: false,
      focused: bool
    });
  }
  onSearch(search) {
    if (typeof this.props.onSearch === 'function') {
      this.props.onSearch(search);
    }
  }
  onKeyPress(e) {
    if (typeof this.props.onKeyPress === 'function') {
      this.props.onKeyPress(e);
    }
  }
  getContainerStyle() {
    let containerStyle = {
      ...this.props.containerStyle
    };
    containerStyle.border = '1px solid #D2D1D1';
    if (this.state.focused) {
      containerStyle.border = '1px solid #1874DE';
    }
    if (this.state.hasError === true) {
      containerStyle.border = '1px solid #EF5E70';
    }
    return containerStyle;
  }
  render() {
    const {
      items,
      handle,
      name,
      loading,
      size,
      selected
    } = this.props;
    const {
      focused
    } = this.state;
    let search = this.state.search ? this.state.search.toLowerCase() : '';
    let notEmptyItems = false;
    let resItems = items
    // .filter((item) => {
    //   if(showAll === true)
    //   {
    //     return true;
    //   }
    //
    //   if(item.name.toLowerCase().indexOf(search) === -1)
    //   {
    //     return false;
    //   }else{
    //     return true;
    //   }
    // })
    // .filter((item) => {
    //   if(selected)
    //   {
    //     if(selected.id === item.id)
    //     {
    //       return  false;
    //     }
    //   }
    //   return  true;
    // })
    .map((item, key) => {
      if (item.items && item.items.length > 0) {
        notEmptyItems = true;
      }
      return /*#__PURE__*/React.createElement(Item, {
        key: item.name,
        className: "item",
        id: this.props.id + '-' + item.id,
        onClick: () => {
          handle(item);
          this.handleShowSelect(false);
          this.setState({
            search: item.name
          });
        }
      }, /*#__PURE__*/React.createElement("span", null, item.name));
    });
    let error = this.getError();
    return /*#__PURE__*/React.createElement(Container, {
      style: this.getContainerStyle(),
      className: this.props.className + (this.props.disabled ? ' disabled' : ''),
      size: size
    }, /*#__PURE__*/React.createElement(InputWrapper, {
      className: this.getWrapperClasses(resItems),
      ref: this.setWrapperRef
    }, /*#__PURE__*/React.createElement(InputContainer, null, /*#__PURE__*/React.createElement(StyledInput, {
      selected: selected ? JSON.stringify(selected) : '',
      id: this.props.id,
      autoComplete: 'off',
      disabled: this.props.disabled,
      className: this.props.className,
      type: this.props.type,
      name: this.getName(name),
      value: this.state.search,
      placeholder: this.props.placeholder,
      onClick: () => {
        this.handleShowSelect(true);
      },
      onKeyPress: e => {
        this.onKeyPress(e);
      },
      onChange: e => {
        this.setState({
          search: e.target.value,
          hasError: false
        }, () => {
          this.onSearch(this.state.search);
        });
      },
      onFocus: () => {
        this.setState({
          focused: true,
          hasError: false
        });
      }
    }), this.props.placeholder ? /*#__PURE__*/React.createElement("label", {
      htmlFor: this.props.id,
      className: "placeholder",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, this.props.placeholder) : '', /*#__PURE__*/React.createElement(StyledSelect, {
      id: this.props.id + '-select',
      className: this.props.className + ' select',
      select: this.state.select || this.state.focused
    }, items.length && notEmptyItems ? items.map(item => {
      let name = item.name;
      let shortName = name;
      if (name.length > 38) {
        shortName = name.slice(0, 39) + '...';
      }
      return item.items.length > 0 && /*#__PURE__*/React.createElement(Item, {
        key: item.name,
        className: "item"
      }, /*#__PURE__*/React.createElement("span", null, shortName), item.items.map(subItem => {
        return /*#__PURE__*/React.createElement(SubItem, {
          key: subItem.name,
          className: "subitem",
          id: this.props.id + '-' + subItem.id,
          onClick: () => {
            handle(subItem);
            this.handleShowSelect(false);
            this.setState({
              search: subItem.name
            });
          }
        }, subItem.name ? subItem.name.capitalize() : '');
      }));
    }) : loading || selected ? '' : /*#__PURE__*/React.createElement(Item, {
      className: this.props.className
    }, /*#__PURE__*/React.createElement("span", null, typeof this.state.search === 'string' && this.state.search.length > 0 ? 'Ничего не найдено' : 'Ввидете запрос'))), this.state.hasError ? /*#__PURE__*/React.createElement(InputPopup, {
      trigger: /*#__PURE__*/React.createElement("img", {
        id: 'tooltip-' + this.props.id,
        className: "",
        src: require('../../assets/error.svg').default,
        alt: "",
        onClick: () => {}
      })
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: this.props.id,
      className: "error"
    }, error)) : '', loading && /*#__PURE__*/React.createElement(Loader, null, /*#__PURE__*/React.createElement("div", {
      onClick: () => {}
    }, /*#__PURE__*/React.createElement("img", {
      src: LoadImage,
      alt: ""
    }))))));
  }
}
export default GroupRemoteSearch;