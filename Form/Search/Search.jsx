import React from 'react';
import BaseInput from '../BaseInput';
import {Container, Input as StyledInput, InputContainer, InputWrapper, Item, Select as StyledSelect} from './newstyles'
import InputPopup from "../InputPopup/InputPopup";

class Search extends BaseInput
{
  constructor(props)
  {
    super(props);

    this.state = {
      error: null,
      select: false,
      focused: false,
      hovered: false,
      hasError: false,
      handleArrow: false,
      search: props.search ? props.search : '',
      selected: null
    };

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  static defaultProps = {
    selectStyle: {}
  };

  componentWillReceiveProps(nextProps)
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
        this.props.onOutsideClick(this.state.search, this.state.selected);
      }

      this.handleShowSelect(false);
      this.stopHandleArrows();
    }
  }

  onSearch(search)
  {
    if(typeof this.props.onSearch === 'function')
    {
        this.props.onSearch(this.state.search, this.state.selected);
    }
  }

  handleArrows()
  {
    if(this.state.handleArrow === false)
    {
      Search.func = (event) =>
      {
        const { items, selected, search, handle } = this.props;

        let resItems = items ? items
          .filter((item) => {

            if(search && search.length)
            {
              let parts = search.split(' ');
              let partsLength = parts.length;
              let partsFound = 0;

              for(let i = 0; i < partsLength; i++)
              {
                if(item?.name.toLowerCase().indexOf(parts[i]) === -1)
                {

                }else{
                  partsFound++;
                }
              }

              if(partsFound > 0)
              {
                return true;
              }else{
                return false;
              }

            }else{
              return true;
            }
          })
          .filter((item) => {
            if(selected)
            {
              if(selected.id === item.id)
              {
                return  false;
              }
            }
            return  true;
          }) : [];

        // if (eventPrevented)
        // {
        //   return; // Do nothing if the event was already processed
        // }

        switch (event.key)
        {
          case "Down": // IE/Edge specific value
          case "ArrowDown":
            if(this.state.hovered === false)
            {
              this.setState({
                hovered: 0
              });
            }else{
              let length = resItems.length;
              let next = this.state.hovered + 1;

              if(next <= (length - 1))
              {
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

            if(prev >= 0)
            {
              this.setState({
                hovered: prev
              });
            }
            break;
          case "Enter":
            if(this.state.hovered !== false)
            {
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
            return; // Quit when this doesn't handle the key event.
        }
      }

      window.addEventListener("keydown", Search.func, true);

      this.setState({
        handleArrow: true
      });
    }
  }


  stopHandleArrows()
  {
    window.removeEventListener('keydown', Search.func, true);

    this.setState({
      handleArrow: false
    });
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    window.removeEventListener('keydown', Search.func, true);
  }

  handleShowSelect(bool)
  {
    this.setState({
      select: bool,
      focused: bool
    }, () => {
        if(this.state.select)
        {
          this.handleArrows();
        }else{
          this.stopHandleArrows();
        }
    });
  }

  render()
  {
    const { items, handle, selected, name, size, selectStyle } = this.props;
    const { focused } = this.state;

    let search = this.state.search ? this.state.search.toLowerCase() : '';

    let resItems = items ? items
      .filter((item) => {
        if(search && search.length)
        {
          let parts = search.split(' ');
          let partsLength = parts.length;
          let partsFound = 0;

          for(let i = 0; i < partsLength; i++)
          {
            if(item?.name.toLowerCase().indexOf(parts[i]) === -1)
            {

            }else{
            partsFound++;
          }
          }

          if(partsFound > 0)
          {
            return true;
          }else{
            return false;
          }

        }else{
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
        return <Item key={item.id + (item.type_id ? item.type_id : '')} className={'item ' + (this.state.hovered === key ? 'hovered' : '')} id={this.props.id + '-' + item.id} onClick={(e) => {
          e.stopPropagation();

          handle(item);
          this.handleShowSelect(false);
          this.stopHandleArrows();
          this.setState({
            search: item.name,
            selected: item
          });
        }}>
          <span>{item.name}</span>
        </Item>
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
    // if(this.state.hasError === true)
    // {
    //   focus = '1px solid #FF0000';
    // }

    style.border = focus;

    let empty = true;

    if((typeof this.state.search === 'number' && this.state.search.toString().length > 0) || (typeof this.state.search === 'string' && this.state.search.length > 0))
    {
      empty = false;
    }



    //исправления бага автозаполнения
    //если name содержит слова такие как country, street
    //то будет предлагаться подсказка, которая не нужна
    //решение: делаем намеренно ошибку с слове чтобы убрать подсказку
    return <Container className={this.props.className} size={size}>
      <InputWrapper
        className={'wrapper ' + (this.state.select && resItems.length ? 'select' : '') + (this.props.disabled ? ' disabled' : '')}
        size={size} style={style}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <InputContainer ref={this.setWrapperRef} size={size}>
          <StyledInput
            id={this.props.id}
            size={size}
            autoComplete={'off'}
            disabled={this.props.disabled}
            style={this.props.style}
            className={this.props.className}
            type={this.props.type}
            name={this.getName(name)}
            value={this.state.search}
            placeholder={this.props.placeholder}
            onClick={(e) => {
              e.stopPropagation();

              if(typeof this.props.onClick === 'function')
              {
                  this.props.onClick(this);
              }
              // this.handleShowSelect(true);
            }}
            onKeyPress={(e) => {
              if (typeof this.props.onKeyPress === 'function')
              {
                this.props.onKeyPress(e);
              }
            }}
            onChange={(e) => {
              let value = e.target.value;
              if(value.length > 0)
              {
                this.setState({
                  search: value,
                  hasError: false
                }, () => {
                  this.onSearch();
                });
              }else{
                this.setState({
                  search: value,
                  hasError: false
                }, () => {
                    this.onSearch();
                });
                handle(null);
              }
            }}
            onFocus={() => {
              this.setState({
                focused: true,
                hasError: false
              })
            }}
            onBlur={(e) => {
              // if (typeof this.props.onBlur === 'function')
              // {
              //   this.props.onBlur(e);
              // }
            }}
          />
          {this.props.placeholder ? <label htmlFor={this.props.id} className="placeholder" onClick={() => {this.handleShowSelect(true);}}>{this.props.placeholder}</label> : ''}
          <StyledSelect id={this.props.id + '-select'} className='select' select={this.state.select || this.state.focused} size={size} style={selectStyle} onClick={(e) => {
            e.stopPropagation();
          }}>
            {resItems.length ? resItems : (selected ? '' : <Item><span>Ничего не найдено</span></Item>)}
          </StyledSelect>
          {!empty && typeof this.props.size === 'undefined' && !this.props.disabled && <img className='close' src={require('./../../assets/ic_close_only.svg')} onClick={(e) => {
            this.setState({
              search: '',
              hasError: false
            }, () => {
              this.onSearch();
            });
            handle(null);
          }} alt=''/>}
          {this.state.hasError ? <InputPopup
            trigger={<img id={'tooltip-' + this.props.id} className='' src={require('./../../assets/error.svg')} alt='' onClick={() => {
            }}/>}>
            <label htmlFor={this.props.id} className="error">{error}</label>
          </InputPopup> : ''}
        </InputContainer>
      </InputWrapper>
    </Container>
  }
}


export default Search
