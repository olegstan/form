import React from 'react';
import BaseSearch from '../BaseSearch';
import { Container, Input as StyledInput, InputContainer, InputWrapper, Item, Select as StyledSelect } from './newstyles';
import { Loader } from '../newstyles';
import InputPopup from "../InputPopup/InputPopup";
import Search from "./Search";
import { ReactComponent as LoadImage } from '../../assets/loader.svg';
class RemoteSearch extends BaseSearch {
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
  handleArrows() {
    if (this.state.handleArrow === false) {
      Search.func = event => {
        const {
          items,
          selected,
          search,
          handle
        } = this.props;
        let resItems = items ? items.filter(item => {
          if (search && search.length) {
            let parts = search.split(' ');
            let partsLength = parts.length;
            let partsFound = 0;
            for (let i = 0; i < partsLength; i++) {
              if (parts[i].replace('ё', 'е').replace('й', 'и').length > 0 && item?.name?.toLowerCase().replace('ё', 'е').replace('й', 'и').indexOf(parts[i].replace('ё', 'е').replace('й', 'и')) !== -1) {
                partsFound++;
              }
            }
            if (partsFound > 0) {
              return true;
            } else {
              return false;
            }
          } else {
            return true;
          }
        }).filter(item => {
          if (selected) {
            if (selected.id === item.id) {
              return false;
            }
          }
          return true;
        }) : [];

        // if (eventPrevented)
        // {
        //   return; // Do nothing if the event was already processed
        // }

        switch (event.key) {
          case "Down": // IE/Edge specific value
          case "ArrowDown":
            if (this.state.hovered === false) {
              this.setState({
                hovered: 0
              });
            } else {
              let length = resItems.length;
              let next = this.state.hovered + 1;
              if (next <= length - 1) {
                this.setState({
                  hovered: next
                });
              }
            }

            // Do something for "down arrow" key press.
            break;
          case "Up": // IE/Edge specific value
          case "ArrowUp":
            let prev = this.state.hovered + -1;
            if (prev >= 0) {
              this.setState({
                hovered: prev
              });
            }
            break;
          case "Enter":
            if (this.state.hovered !== false) {
              let item = resItems[this.state.hovered];
              handle(item);
              this.handleShowSelect(false);
              this.stopHandleArrows();
              this.setState({
                search: item.name,
                selected: item
              });
            }
            event.preventDefault();
            break;
          default:
            return;
          // Quit when this doesn't handle the key event.
        }
      };
      window.addEventListener("keydown", Search.func, true);
      this.setState({
        handleArrow: true
      });
    }
  }
  handleShowSelect(bool) {
    this.setState({
      select: bool,
      focused: bool
    }, () => {
      if (this.state.select) {
        this.handleArrows();
      } else {
        this.stopHandleArrows();
      }
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
  stopHandleArrows() {
    window.removeEventListener('keydown', Search.func, true);
    this.setState({
      handleArrow: false
    });
  }
  render() {
    const {
      items,
      handle,
      name,
      loading,
      selected
    } = this.props;
    let search = this.state.search ? this.state.search.toLowerCase() : '';
    let resItems = items ? items.filter(item => {
      if (search && search.length) {
        let parts = search.split(' ');
        let partsLength = parts.length;
        let partsFound = 0;
        for (let i = 0; i < partsLength; i++) {
          if (parts[i].replace('ё', 'е').replace('й', 'и').length > 0 && item?.name?.toLowerCase().replace('ё', 'е').replace('й', 'и').indexOf(parts[i].replace('ё', 'е').replace('й', 'и')) !== -1) {
            partsFound++;
          }
        }
        if (partsFound > 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    })
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
      return /*#__PURE__*/React.createElement(Item, {
        key: item.id + (item.type_id ? item.type_id : ''),
        className: this.props.className + ' item ' + (this.state.hovered === key ? 'hovered' : ''),
        id: this.props.id + '-' + item.id,
        onClick: e => {
          e.stopPropagation();
          handle(item);
          this.handleShowSelect(false);
          this.stopHandleArrows();
          this.setState({
            search: item.name,
            selected: item
          });
        }
      }, /*#__PURE__*/React.createElement("span", null, item.name));
    }) : [];
    let error = this.getError();
    return /*#__PURE__*/React.createElement(Container, {
      dataid: "remote-search",
      style: this.getContainerStyle(),
      className: this.props.className + (this.props.disabled ? ' disabled' : '')
    }, /*#__PURE__*/React.createElement(InputWrapper, {
      className: this.getWrapperClasses(resItems),
      ref: this.setWrapperRef
    }, /*#__PURE__*/React.createElement(InputContainer, null, /*#__PURE__*/React.createElement(StyledInput, {
      selected: selected ? JSON.stringify(selected) : '',
      id: this.props.id,
      autoComplete: 'off',
      disabled: this.props.disabled,
      style: this.props.style,
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
      className: this.props.className + " placeholder",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, this.props.placeholder) : '', /*#__PURE__*/React.createElement(StyledSelect, {
      id: this.props.id + '-select',
      className: this.props.className + ' select',
      select: this.state.select || this.state.focused
    }, resItems.length ? resItems : loading || selected ? '' : /*#__PURE__*/React.createElement(Item, {
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
      className: this.props.className + " error"
    }, error)) : '', loading && /*#__PURE__*/React.createElement(Loader, null, /*#__PURE__*/React.createElement("div", {
      onClick: () => {}
    }, /*#__PURE__*/React.createElement(LoadImage, null))))));
  }
}
export default RemoteSearch;