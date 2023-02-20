import React from 'react';
import BaseInput from '../BaseInput';
import {Container, InputWrapper, TagText} from './newstyles'
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

const MultiValue = (props) => {
  const {data} = props;

  return <TagText>
    {data.label}
    <div onClick={() => {
      props.removeProps.onClick();
    }}/>
  </TagText>
}

class SearchMultiple extends BaseInput
{
  constructor(props)
  {
    super(props);

    this.state = {
      options: [
      ],
      selectedOption: null,
      error: null,
      select: false,
      focused: false,
      hovered: false,
      hasError: false,
      search: props.search ? props.search : ''
    };

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps)
  {
    const {name} = this.props;
    if (nextProps.errors && typeof nextProps.errors[name] !== 'undefined' && nextProps.errors[name].length > 0)
    {
      this.setState({
        error: nextProps.errors[name][0],
        hasError: true
      })
    } else
    {
      this.setState({
        error: null,
        hasError: false
      })
    }

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

  setWrapperRef(node)
  {
    this.wrapperRef = node;
  }

  handleClickOutside(e)
  {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target))
    {
      if(typeof this.props.onOutsideClick === 'function' && this.state.focused === true)
      {
        this.props.onOutsideClick(this.state.search);
      }

      this.handleShowSelect(false);
    }
  }

  onSearch(search)
  {
    if(typeof this.props.onSearch === 'function')
    {
        this.props.onSearch(search);
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    window.removeEventListener('keydown', SearchMultiple.func, true);
  }

  handleShowSelect(bool)
  {
    this.setState({
      select: bool,
      hasError: false,
      focused: bool
    });
  }

  handleChange(newValue, actionMeta)
  {
    switch(actionMeta.action)
    {
      case 'select-option':
        if(typeof this.props.onRemoveElement === 'function')
        {
          this.props.onAddElement(newValue);
        }
        break;
      case 'remove-value':
        if(typeof this.props.onRemoveElement === 'function')
        {
          this.props.onRemoveElement(newValue);
        }
        break;
    }
  };

  handleCreate(newOption)
  {
    if(typeof this.props.onCreate === 'function'){
      this.props.onCreate(newOption);
    }
  };

  getComponent(resItems, customStyles)
  {
    const { selected } = this.props;

    if(this.props.allowAdd)
    {
      return <CreatableSelect
        placeholder={''}
        id={this.props.id}
        components={{ MultiValue: MultiValue, DropdownIndicator:() => null, IndicatorSeparator:() => null, IndicatorsContainer:() => null }}
        onChange={this.handleChange.bind(this)}
        options={resItems}
        value={selected}
        isMulti={true}
        noOptionsMessage={() => ''}
        allowCreateWhileLoading={false}
        styles={customStyles}
        onCreateOption={this.handleCreate.bind(this)}
        formatCreateLabel={(inputValue) => {
          return 'Создать новый тег: "' + inputValue + '"';
        }}
        onFocus={() => {
          this.setState({
            focused: true,
            hasError: false
          })
        }}
      />
    }else{
      return <Select
        placeholder={''}
        id={this.props.id}
        components={{ MultiValue: MultiValue, DropdownIndicator:() => null, IndicatorSeparator:() => null, IndicatorsContainer:() => null }}
        onChange={this.handleChange.bind(this)}
        options={resItems}
        value={selected}
        isMulti={true}
        noOptionsMessage={() => ''}
        styles={customStyles}
        onFocus={() => {
          this.setState({
            focused: true,
            hasError: false
          })
        }}
      />
    }
  }

  render()
  {
    const { items, size, selected } = this.props;

    let resItems = items ? items
      .map((item, key) => {
        return {value: item.id, label: item.name}
      }) : [];

    let style = {}

    if(this.props.style)
    {
      style = {
        ...this.props.style
      };
    }

    let error = this.getError();
    let focus = (this.state.hasError ? '1px solid #FF0000' : '');

    style.border = focus;

    const customStyles = {
      // option: (provided, state) => ({
      //   ...provided,
      //   borderBottom: '1px dotted pink',
      //   // color: state.isSelected ? 'red' : 'blue',
      //   padding: '2px 2px 2px 4px',
      // }),
      valueContainer: (provided, state) => ({
        ...provided,
        marginTop: "12px",
        padding: '1px 8px',
        ...this.props.valueContainerStyle
      }),
      control: () => ({
        border: '1px solid #D2D1D1',
        borderRadius: '8px',
        ...this.props.controlStyle
      }),
      singleValue: () => ({
        padding: '0px 5px 0px 8px',
      }),
    }


    if(this.props.containerStyle)
    {
      customStyles.container = () => this.props.containerStyle;
    }

    return <Container style={this.props.nativeContainerStyle} className={this.props.className} size={size} onClick={(e) => {
      e.stopPropagation();
    }}>
      <InputWrapper
        className={'wrapper ' + (this.state.select && resItems.length ? 'select' : '') + (this.props.disabled ? ' disabled' : '')}
        style={{...style, ...{zIndex: this.state.focused ? '1000' : 'auto'}}}
        size={size}
        ref={this.setWrapperRef}
        onClick={(e) => {
          e.stopPropagation();
        }}>
        {this.getComponent(resItems, customStyles)}
        {this.props.placeholder ? <label htmlFor={this.props.id} className={"placeholder " + (1)} onClick={() => {this.handleShowSelect(true);}}>{this.props.placeholder}</label> : ''}
        {error ? <label htmlFor={this.props.id} className="error">{error}</label> : ''}
      </InputWrapper>
    </Container>
  }
}


export default SearchMultiple
