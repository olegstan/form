import React, {useMemo, useState} from 'react';
import {Container, InputContainerStyled} from '../styles';
import PlaceholderLabel from "./components/PlaceholderLabel";
import ErrorTooltip from "./components/ErrorTooltip";
import CloseIcon from "./components/CloseIcon";
import InputIcon from "./components/InputIcon";
import {useTheme} from 'styled-components';

export function isNotEmpty(value: any) {
    if (value === null || value === undefined) return false;
    if (typeof value === 'number') return value.toString().length > 0;
    return value.length > 0; // для строки (или массивов, если что-то такое)
}

function InputContainer({
                            children,
                            className = '',
                            style = {},
                            error = null,
                        }: {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    error?: string|null;
}) {
    const [focused, setFocused] = useState(false);  // аналог this.state.focused
    const [innerError, setInnerError] = useState(false);  // аналог this.state.focused

    const theme = useTheme();

    // Убедимся, что children — это единственный React.Element
    const child = React.Children.only(children);

    // Клонируем элемент и добавляем обработчики событий
    //@ts-ignore
    const clonedChild = React.cloneElement(child, {
        focused,
        setFocused,
        innerError,
        setInnerError,
        error,
    });

    const {
        placeholder,
        id,
        disabled = false,
        value,
        values,//для MultiSelect
        name,
        onChange,
        icon = true,
        loading,
        search,
        onSearch
        // @ts-ignore
    } = child.props || {};

    // @ts-ignore
    const typeName: string | undefined = child.type?.displayName || child.type?.name;

    /**
     * Определяем, нужно ли отображать placeholder сверху (активное состояние).
     */
    const isPlaceholderActive = useMemo(() => {
        if (!placeholder || !typeName) return false;
        switch (typeName) {
            case 'DateInput':
            case 'DateTimeInput':
                return value instanceof Date;
            case 'FileInput':
                return true;
            case 'MultiSelect':
                return !!values?.length;
            case 'Search':
            case 'GroupSearch':
                return isNotEmpty(search);
            default:
                return isNotEmpty(value);
        }
    }, [placeholder, typeName, value, search, values, isNotEmpty]);

    const containerClassName = `${className}${disabled ? ' disabled' : ''}`;

    const containerStyle = useMemo(() => {

        switch (typeName) {
            case 'Select':
            case 'MultiSelect':
            case 'GroupSelect':
                return {...style, ...{backgroundColor: theme.selectBackgroundColor}}
            default:
                return style
        }
    }, [typeName, style, theme]);

    return (
        <Container
            style={containerStyle}
            className={containerClassName}
            disabled={disabled}
            onClick={(e: any) => e.stopPropagation()}
        >
            <InputContainerStyled className={`styled-input__main-wrapper`}>
                {clonedChild}
                <PlaceholderLabel
                    focused={focused}
                    placeholder={placeholder}
                    id={id}
                    active={isPlaceholderActive}
                />
                <ErrorTooltip
                    error={error || innerError}
                    id={id}
                />
                <CloseIcon
                    typeName={typeName}
                    icon={icon}
                    value={value}
                    search={search}
                    loading={loading}
                    disabled={disabled}
                    onSearch={onSearch}
                    name={name}
                    onChange={onChange}
                />
                <InputIcon
                    typeName={typeName}
                    icon={icon}
                    loading={loading}
                />
            </InputContainerStyled>
        </Container>
    );
}

export default InputContainer;
