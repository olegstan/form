import React from 'react';
import {Container, Input as StyledInput, InputContainer, InputWrapper, Item, Select as StyledSelect, Add} from './../Search/newstyles'
import Search from "../Search/Search";

class ContactSearch extends Search
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
      selected: null,
      date: new Date()
    };



    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount()
  {
    this.props.loadModuleCreate((module) => {
      this.setState({
        moduleAccountCreate: module.default
      }, () => {
        this.props.loadModuleEdit((module) => {
          this.setState({ moduleAccountEdit: module.default })
        })
      })
    })

    document.addEventListener('mousedown', this.handleClickOutside);
  }

  handleAddContact()
  {
    this.setState({
      showContactCreate: true
    }, () => {
      this.props.handleAddContact()
    });
  }

  renderCreateComponent()
  {
    if(this.state.showContactCreate)
    {
      const { moduleAccountCreate: ComponentCreate, moduleAccountEdit: ComponentEdit } = this.state;

      return ComponentCreate && <ComponentCreate
        show={true}
        callback={() => {
          // this.props.getUserAccounts();
        }}
        onClose={() => {
          this.setState({
            showContactCreate: false
          }, () => {
            if(typeof this.props.onCloseCreateCallback === 'function')
            {
              this.props.onCloseCreateCallback();
            }
          });
        }}
      />
    }
  }

  render()
  {
    const { items, handle, selected, name, selectStyle, clearImageStyle } = this.props;

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
            if(parts[i].replace('ё', 'е').replace('й', 'и').length > 0 && item?.name?.toLowerCase().replace('ё', 'е').replace('й', 'и').indexOf(parts[i].replace('ё', 'е').replace('й', 'и')) !== -1)
            {
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
        return <Item key={item.id + (item.type_id ? item.type_id : '')} className={this.props.className + ' item ' + (this.state.hovered === key ? 'hovered' : '')} id={this.props.id + '-' + item.id} onClick={(e) => {
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


    let empty = true;

    if((typeof this.state.search === 'number' && this.state.search.toString().length > 0) || (typeof this.state.search === 'string' && this.state.search.length > 0))
    {
      empty = false;
    }

    //исправления бага автозаполнения
    //если name содержит слова такие как country, street
    //то будет предлагаться подсказка, которая не нужна
    //решение: делаем намеренно ошибку в слове чтобы убрать подсказку
    return <Container dataid='search' style={this.getContainerStyle()} className={this.props.className}>
      <InputWrapper
        className={this.getWrapperClasses(resItems)}
        style={this.getWrapperStyle()}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <InputContainer style={this.getInputContainerStyle()} ref={this.setWrapperRef}>
          <StyledInput
            selected={selected}
            id={this.props.id}
            autoComplete={'off'}
            disabled={this.props.disabled}
            style={this.getInputStyle()}
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

            }}
          />
          {this.renderPlaceholder()}
          <StyledSelect id={this.props.id + '-select'} className={this.props.className + ' select'} select={this.state.select || this.state.focused} style={selectStyle} onClick={(e) => {
            e.stopPropagation();
          }}>
            {resItems.length ? resItems : (selected ? '' : <Item className={this.props.className}><span>{typeof this.state.search === 'string' && this.state.search.length > 0 ? 'Ничего не найдено' : 'Ввидете запрос'}</span></Item>)}
            {this.props.contactAddAvailable && <Add key={'add'} className='add' onClick={() => {this.handleAddContact()}}>
              <span>Добавить контакт</span>
            </Add>}
          </StyledSelect>
          {!empty && this.props.showClearIcon && !this.props.disabled && <img style={clearImageStyle} className='close' src={require('./../../assets/ic_close_only.svg').default} onClick={(e) => {
            this.setState({
              search: '',
              hasError: false
            }, () => {
              this.onSearch();
            });
            handle(null);
          }} alt=''/>}
          {this.renderTooltipError()}
        </InputContainer>
      </InputWrapper>
      {this.renderCreateComponent()}
    </Container>
  }
}


export default ContactSearch
