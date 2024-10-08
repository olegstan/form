import React, { createRef } from 'react';
import BaseInput from '../BaseInput';
import { Container, Input as StyledInput, InputWrapper, Item, Select as StyledSelect } from './styles';
class SearchWithButton extends BaseInput {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      select: false,
      focused: false,
      hasError: false,
      search: props.search ? props.search : ''
    };
    this.wrapperRef = /*#__PURE__*/createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidUpdate(prevProps) {
    // const {name} = this.props;
    // if (nextProps.errors && typeof nextProps.errors[name] !== 'undefined' && nextProps.errors[name].length > 0)
    // {
    //   this.setState({
    //     error: nextProps.errors[name][0],
    //     hasError: true
    //   })
    // } else
    // {
    //   this.setState({
    //     error: null,
    //     hasError: false
    //   })
    // }
    //
    // for (const index in nextProps)
    // {
    //   if (nextProps[index] !== this.props[index])
    //   {
    //     if (index === 'search')
    //     {
    //       this.setState({
    //         search: nextProps[index]
    //       });
    //     }
    //   }
    // }
  }
  handleClickOutside(e) {
    if (this.wrapperRef.current && !this.wrapperRef.current.contains(e.target)) {
      this.handleShowSelect(false);
    }
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  handleShowSelect(bool) {
    this.setState({
      select: bool,
      focused: bool
    });
  }
  onSearch(search) {
    if (typeof this.props.onSearch === 'function') {
      this.props.onSearch(search);
    }
  }
  render() {
    const {
      items,
      handle,
      name
    } = this.props;
    let search = this.state.search ? this.state.search.toLowerCase() : '';
    let resItems = items ? items.filter(item => {
      if (item?.name?.toLowerCase().indexOf(search) === -1) {
        return false;
      } else {
        return true;
      }
    }).map((item, key) => /*#__PURE__*/React.createElement(Item, {
      key: item.id,
      className: this.props.className + ' item',
      id: this.props.id + '-' + item.id,
      onClick: () => {
        handle(item, item.name);
        this.handleShowSelect(false);
        this.setState({
          search: item.name
        });
      }
    }, /*#__PURE__*/React.createElement("span", null, item.name))) : [];
    let style = {};
    if (this.props.style) {
      style = {
        ...this.props.style
      };
    }
    let error = this.getError();
    let focus = this.state.focused ? '1px solid #1874DE' : '';
    if (this.state.hasError === true) {
      focus = '1px solid #FF0000';
    }
    style.border = focus;
    return /*#__PURE__*/React.createElement(Container, {
      className: this.props.className
    }, /*#__PURE__*/React.createElement(InputWrapper, {
      className: 'wrapper ' + (this.state.select && resItems.length ? 'select' : ''),
      style: style,
      ref: this.wrapperRef
    }, /*#__PURE__*/React.createElement(StyledInput, {
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
        // this.handleShowSelect(true);
      },
      onKeyPress: e => {
        if (typeof this.props.onKeyPress === 'function') {
          this.props.onKeyPress(e);
        }
      },
      onChange: e => {
        let value = e.target.value;
        if (value.length > 0) {
          this.setState({
            search: value,
            hasError: false
          }, () => {
            this.onSearch(this.state.search);
          });
        } else {
          this.setState({
            search: value,
            hasError: false
          }, () => {
            this.onSearch(this.state.search);
          });
          handle(null);
        }
      },
      onFocus: () => {
        this.setState({
          focused: true,
          hasError: false
        });
      }
    }), this.renderPlaceholder(), /*#__PURE__*/React.createElement(StyledSelect, {
      id: this.props.id + '-select',
      className: this.props.className + ' select',
      select: this.state.select || this.state.focused
    }, resItems), error ? /*#__PURE__*/React.createElement("label", {
      htmlFor: this.props.id,
      className: this.props.className + " error"
    }, error) : ''), /*#__PURE__*/React.createElement("div", {
      className: 'plus'
    }, /*#__PURE__*/React.createElement("div", {
      onClick: () => {
        this.props.buttonClick();
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: require('./../../assets/plus.svg'),
      alt: ""
    }))));
  }
}
export default SearchWithButton;