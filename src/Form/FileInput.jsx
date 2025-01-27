import React from 'react';
import useBaseInput from './useBaseInput';
import { InputContainer, StyledInput } from './newstyles';
import { Container } from './styles/containerStyle';

const FileInput = (props) => {
  const {
    error,
    hasError,
    focused,
    setFocused,
    setHasError,
    wrapperRef,
    browser,
    getName,
    renderPlaceholder,
    renderTooltipError,
  } = useBaseInput(props);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;

        props.onChange(e, {
          name: props.name,
          value: {
            name: file.name,
            content: base64String,
          },
        });
      };
      reader.readAsDataURL(file);
    }
    setHasError(false);
  };

  const handleClearFile = (e) => {
    props.onChange(e, {
      name: props.name,
      value: null,
    });
    setHasError(false);
  };

  const style = {
    ...props.style,
    border: focused ? '1px solid #1874DE' : hasError ? '1px solid #EF5E70' : '',
  };

  const empty = !props.value || typeof props.value.name !== 'string';

  return (
    <Container
      style={style}
      size={props.size}
      disabled={props.disabled}
      className={`${props.className}${props.disabled ? ' disabled' : ''}`}
      onClick={(e) => e.stopPropagation()}
    >
      <InputContainer ref={wrapperRef}>
        <StyledInput
          browser={browser && browser.name}
          id={props.id}
          size={props.size}
          disabled={props.disabled}
          className={props.className}
          type="file"
          name={getName(props.name)}
          placeholder={props.placeholder}
          onChange={handleFileChange}
        />
        {renderPlaceholder()}
        {!empty &&
        typeof props.size === 'undefined' &&
        !props.disabled && (
          <img
            className="close"
            src={require('./../assets/ic_close_only.svg').default}
            onClick={handleClearFile}
            alt=""
          />
        )}
        {renderTooltipError()}
      </InputContainer>
    </Container>
  );
};

FileInput.defaultProps = {
  onKeyPress: () => {},
  onChange: () => {},
  disabled: false,
  value: null,
  placeholder: '',
  icon: '',
  className: '',
  wrapperClassName: '',
  error: '',
  style: {},
};

export default FileInput;
