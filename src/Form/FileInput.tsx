import React, {useEffect, useRef} from 'react';
import useBaseInput from './hooks/useBaseInput';
import {StyledInput} from './styles';
import FileInputProps from "./types/FileInputProps";

const FileInput: React.FC<FileInputProps> = ({
                       focused = false,
                       setFocused = () => {},
                       onBlur = () => {},
                       onChange = () => {},
                       onClick = () => {},
                       disabled = false,
                       className = '',
                       style = {},
                       id,
                       name,
                       valueText = '',
                       error
                   }) => {

    const inputRef = useRef(null);

    const {
        getName,
    } = useBaseInput({
        disabled,
        name,
        onClick,
        onChange,
        setFocused,
        onBlur
    });

    useEffect(() => {
        if (inputRef.current) {
            const file = new File([], valueText, {
                type: 'text/plain',
                // @ts-ignore
                lastModified: new Date(),
            });

            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            // @ts-ignore
            inputRef.current.files = dataTransfer.files;
        }
    }, []);

    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;

                onChange({
                    size: file.size,
                    name: file.name,
                    content: base64String,
                });
            };
            reader.readAsDataURL(file);
        }
    };

    // @ts-ignore
    const inputClassName = `${className}${error?.[0] ? ' error' : ''}`;


    return <StyledInput
            ref={inputRef}
            id={id}
            style={style}
            disabled={disabled}
            className={inputClassName}
            type="file"
            name={getName(name)}
            onChange={handleFileChange}
        />;
};

export default FileInput;
