import React, {useEffect, useRef} from 'react';
import useBaseInput from './hooks/useBaseInput';
import {InputContainer, StyledInput} from './newstyles';
import {Container} from './styles/containerStyle';
import Close from './../assets/ic_close_only.svg';

const FileInput = ({
                       field= '',
                       name= '',
                       size= '',
                       id = '',
                       onKeyPress = () => {},
                       onChange = () => {},
                       disabled = false,
                       value = null,
                       placeholder = '',
                       icon = '',
                       className = '',
                       wrapperClassName = '',
                       valueText = '',
                       style = {},
                       ...props
                   }) => {
    const callerClassName = 'FileInput';
    const inputRef = useRef(null);

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
    } = useBaseInput(props, callerClassName);

    useEffect(() => {
        if (inputRef.current) {
            const file = new File([], valueText, {
                type: 'text/plain',
                lastModified: new Date(),
            });

            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            inputRef.current.files = dataTransfer.files;
        }
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;

                onChange(e, {
                    name: props.name,
                    value: {
                        size: file.size,
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
        onChange(e, {
            name: name,
            value: null,
        });
        setHasError(false);
    };

    const inputStyle = {
        ...style,
        border: focused ? '1px solid #1874DE' : hasError ? '1px solid #EF5E70' : '',
    };

    const empty = !value || typeof value.name !== 'string';

    return (
        <Container
            style={inputStyle}
            size={size}
            disabled={disabled}
            className={`${className}${disabled ? ' disabled' : ''}`}
            onClick={(e) => e.stopPropagation()}
        >
            <InputContainer ref={wrapperRef}>
                <StyledInput
                    ref={inputRef}
                    browser={browser && browser.name}
                    id={id}
                    size={size}
                    disabled={disabled}
                    className={className}
                    type="file"
                    name={getName(name)}
                    placeholder={placeholder}
                    onChange={handleFileChange}
                />
                {renderPlaceholder()}
                {!empty &&
                typeof size === 'undefined' &&
                !disabled && (
                    <img
                        className="close"
                        src={Close}
                        onClick={handleClearFile}
                        alt=""
                    />
                )}
                {renderTooltipError()}
            </InputContainer>
        </Container>
    );
};

export default FileInput;
