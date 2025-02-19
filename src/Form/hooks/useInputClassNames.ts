import { useState, useEffect } from 'react';

export default function useInputClassNames(baseClassName: string | undefined, focused: boolean, error?: string | object | undefined, disabled?: boolean | undefined): string {
    const [className, setClassName] = useState<string|undefined>(baseClassName);

    useEffect(() => {
        let newClassName = baseClassName ?? '';

        if (focused) {
            newClassName += ' focused';
        }

        if (error?.[0]) {
            newClassName += ' error';
        }

        if (disabled) {
            newClassName += ' disabled';
        }

        setClassName(newClassName.trim());
    }, [baseClassName, focused, error, disabled]);

    return className ?? '';
}

// Использование:
// const inputClassName = useInputClassNames(className, focused, error, isDisabled);