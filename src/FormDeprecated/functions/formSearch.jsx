import React from 'react';
import Search from "../Search/Search";
import GroupRemoteSearch from "../GroupSearch/GroupRemoteSearch";
import RemoteSearch from "../Search/RemoteSearch";
import ContactSearch from "../ContactSearch/ContactSearch";

export default function formSearch(Base)
{
  class FormSearch extends Base
  {
    renderContactSearch({
                          field,
                          items,
                          text,
                          defaultText,
                          disabled = false,
                          onSearch = () => {},
                          callback, id,
                          onClick,
                          selectStyle = {},
                          inputStyle = {},
                          wrapperStyle = {},
                          containerStyle = {},
                          inputContainerStyle = {},
                          clearImageStyle = {},
                          showClearIcon = false,
                          className,
                          contactAddAvailable = true,
                          handleAddContact = () => {},
    } = {})
    {
      return <ContactSearch
        default={defaultText}
        placeholder={text}
        className={className}
        id={id ? id : this.getPrefix() + field}
        name={field + '_id'}
        disabled={this.getDisabled(disabled)}
        selected={this.getLink(field)}
        search={this.state.form[field + '_search']}
        onSearch={onSearch}
        inputStyle={inputStyle}
        selectStyle={selectStyle}
        containerStyle={containerStyle}
        inputContainerStyle={inputContainerStyle}
        clearImageStyle={clearImageStyle}
        wrapperStyle={wrapperStyle}
        showClearIcon={showClearIcon}
        onClick={onClick}
        contactAddAvailable={contactAddAvailable}
        handleAddContact={handleAddContact}
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

    renderSearch({field, items, text, defaultText, disabled = false, onSearch = () => {}, callback, id, onClick, selectStyle = {}, inputStyle = {}, wrapperStyle = {}, containerStyle = {}, inputContainerStyle = {}, clearImageStyle = {}, showClearIcon = false, className} = {})
    {
      return <Search
        default={defaultText}
        placeholder={text}
        className={className}
        id={id ? id : this.getPrefix() + field}
        name={field + '_id'}
        disabled={this.getDisabled(disabled)}
        selected={this.getLink(field)}
        search={this.state.form[field + '_search']}
        onSearch={onSearch}
        inputStyle={inputStyle}
        selectStyle={selectStyle}
        containerStyle={containerStyle}
        inputContainerStyle={inputContainerStyle}
        clearImageStyle={clearImageStyle}
        wrapperStyle={wrapperStyle}
        showClearIcon={showClearIcon}
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

    renderSearchStyle1({field, items, text, defaultText, disabled = false, onSearch = () => {}, callback, id, onClick, selectStyle = {}, inputStyle = {}, wrapperStyle = {}, containerStyle = {}, inputContainerStyle = {}, clearImageStyle = {}, showClearIcon = false, className} = {})
    {
      return this.renderSearch({...arguments[0], ...{className: 'style1'}})
    }

    renderRemoteSearch({field, items, text, defaultText, onSearch = () => {}, callback, disabled = false, loading, inputStyle = {}, inputContainerStyle = {}, wrapperStyle = {}, containerStyle = {}, className} = {}) {
      return <RemoteSearch
        default={defaultText}
        placeholder={text}
        className={className}
        loading={loading}
        id={this.getPrefix() + field}
        name={field + '_id'}
        disabled={this.getDisabled(disabled)}
        inputStyle={inputStyle}
        containerStyle={containerStyle}
        inputContainerStyle={inputContainerStyle}
        wrapperStyle={wrapperStyle}
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


    renderGroupRemoteSearch({field, items, text, defaultText, onSearch = () => {}, callback = () => {}, loading, disabled = false, inputStyle = {}, containerStyle = {}, inputContainerStyle = {}, wrapperStyle = {}, size = '', className} = {}) {
      return <GroupRemoteSearch
        default={defaultText}
        size={size}
        className={className}
        placeholder={text}
        loading={loading}
        id={this.getPrefix() + field}
        name={field + '_id'}
        disabled={this.getDisabled(disabled)}
        inputStyle={inputStyle}
        containerStyle={containerStyle}
        inputContainerStyle={inputContainerStyle}
        inputContainerStylewrapperStyle={wrapperStyle}
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

    renderGroupRemoteSearchStyle1({field, items, text, defaultText, onSearch = () => {}, callback = () => {}, loading, disabled = false, inputStyle = {}, containerStyle = {}, inputContainerStyle = {}, wrapperStyle = {}, size = '', className} = {}) {
      return this.renderGroupRemoteSearch({...arguments[0], ...{className: 'style1'}})
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

    setValuesBySearch(prv, search, field, customId, items)
    {
      prv.form[field + '_search'] = search;

      let searchItem = null;

      items.map((item) => {
        if(item.name === search)
        {
          searchItem = item;
        }
      });

      if(searchItem)
      {
        prv.form[field] = searchItem;
        prv.form[field + '_id'] = searchItem.id;

        if(searchItem.id === customId)
        {
          prv.form['custom_' + field + '_id'] = searchItem.type_id;
        }
      }else{
        prv.form[field] = null;
        prv.form[field + '_id'] = '';
        prv.form['custom_' + field + '_id'] = null;
      }

      return searchItem;
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
