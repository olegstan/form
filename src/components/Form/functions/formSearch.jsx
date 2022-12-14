import React from 'react';
import Search from "../Search/Search";
import GroupRemoteSearch from "../GroupSearch/GroupRemoteSearch";
import RemoteSearch from "../Search/RemoteSearch";

export default function formSearch(Base)
{
  class FormSearch extends Base
  {
    renderSearch({field, items, text, defaultText, disabled = false, onSearch = () => {}, callback, id, style, onClick, size, selectStyle = {}, className} = {})
    {
      return <Search
        default={defaultText}
        placeholder={text}
        size={size}
        className={className}
        id={id ? id : this.getPrefix() + field}
        name={field + '_id'}
        disabled={this.getDisabled(disabled)}
        selected={this.getLink(field)}
        search={this.state.form[field + '_search']}
        onSearch={onSearch}
        style={style}
        selectStyle={selectStyle}
        onClick={onClick}
        handle={(item) => {
          this.setState((prv) => {
            this.setValueSearch(prv, field, item);
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
            this.clearFormError(prv, field + '_id');

            return prv;
          });
        }}
        items={items}
        errors={this.state.formErrors}
      />
    }

    renderSearchStyle1({field, items, text, defaultText, disabled = false, onSearch = () => {}, callback, id, style} = {}) {
      return <Search
        className={'style1'}
        default={defaultText}
        placeholder={text}
        id={id ? id : this.getPrefix() + field}
        name={field + '_id'}
        disabled={this.getDisabled(disabled)}
        selected={this.getLink(field)}
        search={this.state.form[field + '_search']}
        onSearch={onSearch}
        style={style}
        handle={(item) => {
          this.setState((prv) => {
            this.setValueSearch(prv, field, item);
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
            this.clearFormError(prv, field + '_id');

            return prv;
          });
        }}
        items={items}
        errors={this.state.formErrors}
      />
    }

    renderRemoteSearch(field, items, text, defaultText, onSearch = () => {}, callback, disabled = false, loading, style = {}, className) {
      return <RemoteSearch
        default={defaultText}
        placeholder={text}
        className={className}
        loading={loading}
        id={this.getPrefix() + field}
        name={field + '_id'}
        disabled={this.getDisabled(disabled)}
        style={style}
        selected={this.getLink(field)}
        search={this.getLink(field + '_search')}
        onSearch={onSearch}
        handle={(item, search) => {
          this.setState((prv) => {
            this.setValueSearch(prv, field, item);
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
            this.clearFormError(prv, field + '_id');

            return prv;
          });
        }}
        items={items}
        errors={this.state.formErrors}
      />
    }


    renderGroupRemoteSearch({field, items, text, defaultText, onSearch = () => {}, callback = () => {}, loading, disabled = false, style, size = '', className} = {}) {
      return <GroupRemoteSearch
        default={defaultText}
        size={size}
        className={className}
        placeholder={text}
        loading={loading}
        id={this.getPrefix() + field}
        name={field + '_id'}
        disabled={this.getDisabled(disabled)}
        style={style}
        selected={this.getLink(field)}
        search={this.getLink(field + '_search')}
        onSearch={onSearch}
        handle={(item, search) => {
          this.setState((prv) => {
            this.setValueSearch(prv, field, item);
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
            this.clearFormError(prv, field + '_id');

            return prv;
          });
        }}
        items={items}
        errors={this.state.formErrors}
      />
    }

    renderGroupRemoteSearchStyle1({field, items, text, defaultText, onSearch = () => {}, callback = () => {}, loading, disabled = false, style, size = ''} = {}) {
      return <GroupRemoteSearch
        default={defaultText}
        size={size}
        placeholder={text}
        loading={loading}
        id={this.getPrefix() + field}
        name={field + '_id'}
        disabled={this.getDisabled(disabled)}
        style={style}
        selected={this.getLink(field)}
        search={this.getLink(field + '_search')}
        onSearch={onSearch}
        handle={(item, search) => {
          this.setState((prv) => {
            prv.form[field] = item;
            prv.form[field + '_id'] = item ? item.id : '';

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
      />
    }

    setValueSearch(prv, field, item)
    {
      let parts = field.split('.');

      if(parts.length === 1)
      {
        prv.form[field] = item;
        prv.form[field + '_id'] = item ? item.id : '';
        prv.form[field + '_search'] = item ? item.name : '';
      }else{
        let linkField = prv.form;
        let linkFieldId = prv.form;
        for(let i = 0; i < parts.length; i++)
        {
          if((i + 1) === parts.length)
          {
            linkField[parts[i]] = item;
            linkFieldId[parts[i] + '_id'] = item ? item.id : '';
            linkFieldId[parts[i] + '_search'] = item ? item.name : '';
          }else{
            if(parts[i].isNumber())
            {
              parts[i] = parseInt(parts[i]);
            }

            linkField = linkField[parts[i]];
            linkFieldId = linkFieldId[parts[i]];
          }
        }
      }
    }

    clearFormError(prv, field)
    {
      if(prv.formErrors && typeof prv.formErrors[field] !== 'undefined')
      {
        prv.formErrors[field] = [];
      }
    }
  }

  return FormSearch;
}
