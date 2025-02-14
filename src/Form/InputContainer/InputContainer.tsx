// Input.js
import React, {useMemo} from 'react';
import {Container, InputContainerStyled} from '../styles';
import PlaceholderLabel from "./components/PlaceholderLabel";
import ErrorTooltip from "./components/ErrorTooltip";
import CloseIcon from "./components/CloseIcon";
import InputIcon from "./components/InputIcon";

export function isNotEmpty(value: any) {
    if (value === null || value === undefined) return false;
    if (typeof value === 'number') return value.toString().length > 0;
    return value.length > 0; // для строки (или массивов, если что-то такое)
}


function InputContainer({
                            children,
                            className = '',
                            style = {},
                            error = null
                        }: {
    children: React.ReactNode;
    className?: string;
    getContainerStyle?: React.CSSProperties;
    error?: string|null;
}) {
    // Убедимся, что children — это единственный React.Element
    const child = React.Children.only(children);

    const {
        placeholder,
        id,
        disabled = false,
        value,
        name,
        onChange,
        iconClose = true,
        loading,
        search
    } = child.props || {};

    const typeName: string | undefined = child.type?.name;

    /**
     * Определяем, нужно ли отображать placeholder сверху (активное состояние).
     */
    const isPlaceholderActive = useMemo(() => {
        if (!placeholder || !typeName) return false;

        switch (typeName) {
            case 'DateInput':
            case 'DateTimeInput':
                // "value instanceof Date"
                return value instanceof Date;
            case 'MaskedInput':
            case 'FileInput':
                // у этих типов placeholder всегда сверху
                return true;
            case 'Search':
                // для поля поиска смотрим свойство search
                return isNotEmpty(search);
            default:
                return isNotEmpty(value);
        }
    }, [placeholder, typeName, value, search]);

    const containerClassName = `${className}${disabled ? ' disabled' : ''}`;

    return (
        <Container
            style={style}
            className={containerClassName}
            disabled={disabled}
            onClick={(e) => e.stopPropagation()}
        >
            <InputContainerStyled>
                {children}
                <PlaceholderLabel
                    placeholder={placeholder}
                    id={id}
                    active={isPlaceholderActive}
                />
                <ErrorTooltip
                    error={error}
                    id={id}
                />
                <CloseIcon
                    typeName={typeName}
                    iconClose={iconClose}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
                <InputIcon
                    typeName={typeName}
                    iconClose={iconClose}
                    loading={loading}
                />
            </InputContainerStyled>
        </Container>
    );
}

export default InputContainer;
