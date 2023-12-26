import React, {Component} from 'react';
import Input from "./Input";
import InputWithCurrency from "./InputWithCurrency/InputWithCurrency";
import SearchMultiple from "./SearchMultiple/SearchMultiple";
import SearchWithButton from "./SearchWithButton/SearchWithButton";
import SelectWithDays from "./SelectWithDays/SelectWithDays";
import GroupMultipleSelect from "./GroupMultipleSelect/GroupMultipleSelect";
import MultipleSelect from "./MultipleSelect/MultipleSelect";
import GroupSelect from "./GroupSelect/GroupSelect";
import RelationGroupSelect from "./RelationGroupSelect/RelationGroupSelect";
import {EmptyContainer} from "./newstyles";
import {Multi} from "finhelper";
import formAccountGroupSelect from "./functions/formAccountGroupSelect";
import formInput from "./functions/formInput";
import formDate from "./functions/formDate";
import getLink from "./functions/getLink";
import formSelect from "./functions/formSelect";
import formSearch from "./functions/formSearch";
import formCheckbox from "./functions/formCheckbox";
import formFile from "./functions/formFile";
import setField from "./functions/setField";

export default class Form extends Multi.extend(Component, formInput, formSelect, formSearch, formDate, getLink, formAccountGroupSelect, formCheckbox, formFile, setField)
{
  renderSelectWithDays(field, daysField, items, text, defaultText, disabled = false, callback) {
    return <SelectWithDays
      default={defaultText}
      placeholder={text}
      id={this.getPrefix() + field}
      name={field + '_id'}
      disabled={this.getDisabled(disabled)}
      selected={this.state.form[field]}
      handle={(item) => {
        this.setState((prv) => {
          prv.form[field] = item;
          prv.form[field + '_id'] = item ? item.id : '';
          
          this.clearFormError(prv, field + '_id');

          return prv;
        }, () => {
          if(typeof callback === 'function')
          {
            callback(item);
          }
        });
      }}
      items={items}
      daysField={daysField}
      daysSelected={this.state.form[daysField]}
      handleDaysField={(number) => {
        this.setState((prv) => {
          let i = prv.form[daysField].indexOf(number);
          if (i !== -1)
          {
            prv.form[daysField].splice(i, 1);
          } else {
            prv.form[daysField].push(number);
          }
          return prv;
        });
      }}
      errors={this.state.formErrors}
    />
  }

  renderGroupMultipleSelect(field, items, text, defaultText, disabled = false, callback) {
    return <GroupMultipleSelect
      default={defaultText}
      placeholder={text}
      id={this.getPrefix() + field}
      name={field + '_ids'}
      disabled={this.getDisabled(disabled)}
      selected={this.state.form[field + '_ids']}
      handleAll={(bool) => {
        if(bool)
        {
          this.setState((prv) => {
            prv.form[field + '_ids'] = [];
            items.map((item) => {
              item.items.map((subItem) => {
                prv.form[field + '_ids'].push(subItem.id);

                return;
              });

              return;
            });

            return prv;
          }, () => {
            if(typeof callback === 'function')
            {
              callback();
            }
          });
        }else{
          this.setState((prv) => {
            prv.form[field + '_ids'] = [];

            return prv;
          }, () => {
            if(typeof callback === 'function')
            {
              callback();
            }
          });
        }
      }}
      handle={(item) => {
        this.setState((prv) => {
          let i = prv.form[field + '_ids'].indexOf(item.id);
          if (i !== -1) {
            prv.form[field + '_ids'].splice(i, 1);
          } else {
            prv.form[field + '_ids'].push(item.id);
          }

          return prv;
        }, () => {
          if(typeof callback === 'function')
          {
            callback();
          }
        });
      }}
      items={items}
      errors={this.state.formErrors}
    />
  }

  renderMultipleSelect({field, items, text, defaultText, disabled = false, callback} = {}) {
    return <MultipleSelect
      default={defaultText}
      placeholder={text}
      id={this.getPrefix() + field}
      name={field + '_ids'}
      disabled={this.getDisabled(disabled)}
      selected={this.state.form[field + '_ids']}
      handleAll={(bool) => {
        if(bool)
        {
          this.setState((prv) => {
            prv.form[field + 's'] = [];
            prv.form[field + '_ids'] = [];
            items.map((item) => {
              prv.form[field + 's'].push(item);
              prv.form[field + '_ids'].push(item.id);

              return;
            });

            return prv;
          }, () => {
            // if(typeof callback === 'function')
            // {
            //   callback();
            // }
          });
        }else{
          this.setState((prv) => {
            prv.form[field + 's'] = [];
            prv.form[field + '_ids'] = [];

            return prv;
          }, () => {
            // if(typeof callback === 'function')
            // {
            //   callback();
            // }
          });
        }
      }}
      handle={(item) => {
        this.setState((prv) => {
          let i = prv.form[field + '_ids'].indexOf(item.id);
          if (i !== -1) {
            prv.form[field + 's'].splice(i, 1);
            prv.form[field + '_ids'].splice(i, 1);
          } else {
            prv.form[field + 's'].push(item);
            prv.form[field + '_ids'].push(item.id);
          }

          return prv;
        }, () => {
          if(typeof callback === 'function')
          {
            callback(item);
          }
        });
      }}
      items={items}
      errors={this.state.formErrors}
    />
  }

  renderMultipleSelectStyle1({field, items, text, defaultText, disabled = false, callback} = {}) {
    return this.renderMultipleSelect({...arguments[0], ...{className: 'style1'}})
  }

  renderGroupSelect({field, items, text, defaultText, disabled = false, callback, size, style} = {}) {
    return <GroupSelect
      default={defaultText}
      placeholder={text}
      size={size}
      style={style}
      id={this.getPrefix() + field}
      name={field + '_id'}
      disabled={this.getDisabled(disabled)}
      selected={this.getLink(field)}
      handle={(item) => {
        this.setState((prv) => {
          prv.form[field] = item;
          prv.form[field + '_id'] = item ? item.id : '';

          this.clearFormError(prv, field + '_id');

          return prv;
        }, () => {
          if(typeof callback === 'function')
          {
            callback(item);
          }
        });
      }}
      items={items}
      errors={this.state.formErrors}
    />
  }

  renderGroupSelectStyle1({field, items, text, defaultText, disabled = false, callback, size, style} = {}) {
    return this.renderSelect({...arguments[0], ...{className: 'style1'}})
  }

  renderRelationGroupSelect(field, items, text, defaultText, disabled = false, callback) {
    return <RelationGroupSelect
      default={defaultText}
      placeholder={text}
      id={this.getPrefix() + field}
      name={field + '_id'}
      disabled={this.getDisabled(disabled)}
      selected={this.getLink(field)}
      handle={(item) => {
        this.setState((prv) => {
          prv.form[field] = item;
          prv.form[field + '_id'] = item ? item.id : '';

          this.clearFormError(prv, field + '_id');

          return prv;
        }, () => {
          if(typeof callback === 'function')
          {
            callback(item);
          }
        });
      }}
      onBlur={() => {
        this.setState((prv) => {
          this.clearFormError(prv, field);

          return prv;
        });
      }}
      items={items}
      errors={this.state.formErrors}
    />
  }



  renderSearchMultiple({field, items, text, defaultText, disabled = false, size = '', allowAdd = false, onCreate = (value) => {}, onAddElement, onRemoveElement, onOutsideClick = () => {}, id, style = {}, containerStyle = {}, controlStyle = {}, valueContainerStyle = {}, nativeContainerStyle = {}} = {}) {
    return <SearchMultiple
      size={size}
      allowAdd={allowAdd}
      default={defaultText}
      placeholder={text}
      id={id ? id : this.getPrefix() + field}
      name={field + '_id'}
      disabled={this.getDisabled(disabled)}
      selected={this.getLink(field)}
      search={''}
      onCreate={(value) => {
        onCreate(value);
      }}
      onAddElement={(newValue) => {
        onAddElement(newValue)
      }}
      onRemoveElement={(newValue) => {
        onRemoveElement(newValue)
      }}
      onOutsideClick={() => {
        onOutsideClick();
      }}
      style={style}
      containerStyle={containerStyle}
      controlStyle={controlStyle}
      nativeContainerStyle={nativeContainerStyle}
      items={items}
      errors={this.state.formErrors}
    />
  }

  renderSearchWithButton(field, items, text, defaultText, disabled = false, onSearch = () => {}, callback, buttonClick = () => {}, id, style) {
    return <SearchWithButton
      default={defaultText}
      placeholder={text}
      id={id ? id : this.getPrefix() + field}
      name={field + '_id'}
      style={style}
      disabled={this.getDisabled(disabled)}
      selected={this.getLink(field)}
      search={this.state.form[field + '_search']}
      onSearch={onSearch}
      handle={(item, search) => {
        this.setState((prv) => {
          prv.form[field] = item;
          prv.form[field + '_id'] = item ? item.id : '';
          prv.form[field + '_search'] = search;

          return prv;
        }, () => {
          if(typeof callback === 'function')
          {
            callback(item);
          }
        });
      }}
      onBlur={() => {
        this.setState((prv) => {
          this.clearFormError(prv, field + '_id');

          return prv;
        });
      }}
      items={items}
      errors={this.state.formErrors}
      buttonClick={buttonClick}
    />
  }

  renderSearchWithButtonStyle1(field, items, text, defaultText, disabled = false, onSearch = () => {}, callback, buttonClick = () => {}, id, style) {
    return <SearchWithButton
      className={'style1'}
      default={defaultText}
      placeholder={text}
      id={id ? id : this.getPrefix() + field}
      name={field + '_id'}
      style={style}
      disabled={this.getDisabled(disabled)}
      selected={this.getLink(field)}
      search={this.state.form[field + '_search']}
      onSearch={onSearch}
      handle={(item, search) => {
        this.setState((prv) => {
          prv.form[field] = item;
          prv.form[field + '_id'] = item ? item.id : '';
          prv.form[field + '_search'] = search;

          return prv;
        }, () => {
          if(typeof callback === 'function')
          {
            callback(item);
          }
        });
      }}
      onBlur={() => {
        this.setState((prv) => {
          this.clearFormError(prv, field + '_id');

          return prv;
        });
      }}
      items={items}
      errors={this.state.formErrors}
      buttonClick={buttonClick}
    />
  }

  renderLogs()
  {
    return this.state.logs && this.state.logs.map((log, key) => {
      return <Input
        key={log.id}
        id={'response-log-' + log.id}
        containerStyle={{
          display: 'none'
        }}
        type="text"
        name={'response-log'}
        disabled={true}
        value={log.id}
        onChange={(e, {name, value}) => {

        }}
        placeholder={''}
        errors={this.state.formErrors}
      />
    })
  }

  renderEmpty(size)
  {
    return <EmptyContainer
      size={size}
    />
  }

  renderInputWithCurrency(field, text, currencyField, disabled = false, callback)
  {
    let link = this.getLink(field);
    let value = link === null ? '' : link;

    return <InputWithCurrency
      id={this.getPrefix() + field}
      type="text"
      name={field}
      autoComplete={'off'}
      disabled={this.getDisabled(disabled)}
      value={value}
      currencyField={currencyField + '_id'}
      selected={this.state.form[currencyField]}
      onChange={(e, {name, value}) => {
        this.setState((prv) => {
          this.setValueInput(prv, field, value);

          return prv;
        }, () => {
          if(typeof callback === 'function')
          {
            callback();
          }
        });
      }}
      onBlur={() => {
        this.setState((prv) => {
          this.clearFormError(prv, field);
          this.clearFormError(prv, currencyField + '_id');

          return prv;
        });
      }}
      handle={(item) => {
        this.setState((prv) => {
          prv.form[currencyField] = item;
          prv.form[currencyField + '_id'] = item ? item.id : '';

          this.clearFormError(prv, currencyField + '_id');

          return prv;
        }, () => {
          if(typeof callback === 'function')
          {
            callback();
          }
        });
      }}
      placeholder={text}
      errors={this.state.formErrors}
    />
  }
}