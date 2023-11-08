import React, { Fragment } from 'react';
import BaseInput from '../BaseInput';
import { CalendarContainer, Container, Day, DaysContainer, DaysTitle, InputWrapper, Item, Select as StyledSelect, Selected } from './styles';
class SelectWithDays extends BaseInput {
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
  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      name,
      daysField
    } = this.props;
    if (nextProps.errors && typeof nextProps.errors[name] !== 'undefined' && nextProps.errors[name].length > 0) {
      this.setState({
        error: nextProps.errors[name][0],
        hasError: true
      });
    } else if (nextProps.errors && typeof nextProps.errors[daysField] !== 'undefined' && nextProps.errors[daysField].length > 0) {
      this.setState({
        error: nextProps.errors[daysField][0],
        hasError: true
      });
    } else {
      this.setState({
        error: null,
        hasError: false
      });
    }
  }
  getError() {
    const {
      name,
      daysField
    } = this.props;
    if (this.props.errors && typeof this.props.errors[name] !== 'undefined' && this.props.errors[name].length > 0) {
      return this.state.error;
    }
    if (this.props.errors && typeof this.props.errors[daysField] !== 'undefined' && this.props.errors[daysField].length > 0) {
      return this.state.error;
    }
  }
  renderSelected() {
    const {
      items,
      selected
    } = this.props;
    let name = null;
    if (!selected) {
      return this.props;
    }
    items.map(item => {
      if (selected.id === item.id) {
        name = item.name;
      }
      return;
    });
    if (!name) {
      return this.props;
    }
    return name;
  }
  handleShowSelect(select) {
    this.setState({
      select: select,
      hasError: false
    });
  }
  renderDaysSelect() {
    if (this.props.selected) {
      switch (this.props.selected.id) {}
    }
  }
  isActiveDay(number) {
    if (this.props.daysSelected.indexOf(number) === -1) {
      return false;
    } else {
      return true;
    }
  }
  renderDaysWeek() {
    return /*#__PURE__*/React.createElement(CalendarContainer, null, /*#__PURE__*/React.createElement(DaysTitle, null, "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0434\u043D\u0438 \u043D\u0435\u0434\u0435\u043B\u0438"), /*#__PURE__*/React.createElement(DaysContainer, null, /*#__PURE__*/React.createElement(Day, {
      key: 0,
      onClick: () => {
        this.props.handleDaysField('1');
      },
      className: this.isActiveDay('1') ? 'active' : ''
    }, "\u041F\u043D"), /*#__PURE__*/React.createElement(Day, {
      key: 1,
      onClick: () => {
        this.props.handleDaysField('2');
      },
      className: this.isActiveDay('2') ? 'active' : ''
    }, "\u0412\u0442"), /*#__PURE__*/React.createElement(Day, {
      key: 2,
      onClick: () => {
        this.props.handleDaysField('3');
      },
      className: this.isActiveDay('3') ? 'active' : ''
    }, "\u0421\u0440"), /*#__PURE__*/React.createElement(Day, {
      key: 3,
      onClick: () => {
        this.props.handleDaysField('4');
      },
      className: this.isActiveDay('4') ? 'active' : ''
    }, "\u0427\u0442"), /*#__PURE__*/React.createElement(Day, {
      key: 4,
      onClick: () => {
        this.props.handleDaysField('5');
      },
      className: this.isActiveDay('5') ? 'active' : ''
    }, "\u041F\u0442"), /*#__PURE__*/React.createElement(Day, {
      key: 5,
      onClick: () => {
        this.props.handleDaysField('6');
      },
      className: this.isActiveDay('6') ? 'active' : ''
    }, "\u0421\u0431"), /*#__PURE__*/React.createElement(Day, {
      key: 6,
      onClick: () => {
        this.props.handleDaysField('7');
      },
      className: this.isActiveDay('7') ? 'active' : ''
    }, "\u0412\u0441")));
  }
  renderDaysMonth() {
    let max = 31;
    let arrays = [];
    let key = 0;
    for (let i = 1; i <= max; i++) {
      if (typeof arrays[key] === 'undefined') {
        arrays[key] = [];
      }
      arrays[key].push(i.toString());
      if (i % 7 === 0) {
        key++;
      }
    }
    return /*#__PURE__*/React.createElement(CalendarContainer, null, /*#__PURE__*/React.createElement(DaysTitle, null, "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0434\u043D\u0438 \u043C\u0435\u0441\u044F\u0446\u0430"), arrays.map((items, arrayKey) => {
      return /*#__PURE__*/React.createElement(DaysContainer, {
        key: arrayKey
      }, items.map((item, key) => {
        return /*#__PURE__*/React.createElement(Day, {
          key: item.id,
          onClick: () => {
            this.props.handleDaysField(item);
          },
          className: this.isActiveDay(item) ? 'active' : ''
        }, item);
      }));
    }));
  }
  render() {
    const {
      items,
      handle,
      selected
    } = this.props;
    let error = this.getError();
    let focus = this.state.hasError ? {
      'border': '1px solid #FF0000'
    } : {};
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Container, {
      style: focus
    }, /*#__PURE__*/React.createElement(InputWrapper, {
      ref: this.setWrapperRef
    }, /*#__PURE__*/React.createElement(Selected, {
      id: this.props.id,
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, /*#__PURE__*/React.createElement("span", null, this.renderSelected())), /*#__PURE__*/React.createElement(StyledSelect, {
      id: this.props.id + '-select',
      className: this.props.className + ' select',
      select: this.state.select
    }, /*#__PURE__*/React.createElement(Item, {
      key: 'default',
      onClick: () => {
        handle(null);
        this.handleShowSelect(false);
      }
    }, /*#__PURE__*/React.createElement("span", null, this.props.default)), items.map((item, key) => /*#__PURE__*/React.createElement(Item, {
      key: item.id,
      id: this.props.id + '-' + item.id,
      className: this.props.className,
      onClick: () => {
        handle(item);
        this.handleShowSelect(false);
      }
    }, /*#__PURE__*/React.createElement("span", null, item.name)))), selected && this.props.placeholder ? /*#__PURE__*/React.createElement("label", {
      htmlFor: this.props.id,
      className: "placeholder"
    }, this.props.placeholder ? this.props.placeholder + ':' : '') : '', /*#__PURE__*/React.createElement("img", {
      className: "arrow",
      src: require('../../assets/arrow.svg').default,
      alt: ""
    }), error && /*#__PURE__*/React.createElement("label", {
      htmlFor: this.props.id,
      className: "error",
      onClick: () => {
        this.handleShowSelect(true);
      }
    }, error))), this.renderDaysSelect());
  }
}
export default SelectWithDays;