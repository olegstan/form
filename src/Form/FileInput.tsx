import React, {useEffect, useRef} from 'react';
import useBaseInput from './hooks/useBaseInput';
import {StyledInput} from './newstyles';

const FileInput = ({
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
        name,
        onClick,
        onChange,
    });

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
                    name: name,
                    value: {
                        size: file.size,
                        name: file.name,
                        content: base64String,
                    },
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClearFile = (e) => {
        onChange(e, {
            name: name,
            value: null,
        });
    };

    return <StyledInput
            ref={inputRef}
            id={id}
            style={style}
            disabled={disabled}
            className={className + (error?.[0] ? ' error' : '')}
            type="file"
            name={getName(name)}
            onChange={handleFileChange}
        />;
};

export default FileInput;
