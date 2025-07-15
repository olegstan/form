import {useEffect, useState} from 'react';

export default function useInputClassNames(
    baseClassName: string | undefined,
    focused: boolean,
    error?: string | object | undefined,
    disabled?: boolean | undefined,
    innerError?: string | object | undefined
): string {
    const [className, setClassName] = useState<string>('input');

    useEffect(() => {
        let newClassName = 'input'; // Always start with 'input' class

        // Add baseClassName if it exists
        if (baseClassName) {
            newClassName += ` ${baseClassName}`;
        }

        if (focused) {
            newClassName += ' focused';
        }

        // Check if either error or innerError exists
        const hasError = error || innerError;
        // @ts-ignore
        if (hasError?.[0] || (typeof hasError === 'string' && hasError) || (typeof hasError === 'boolean' && hasError)) {
            newClassName += ' error';
        }

        if (disabled) {
            newClassName += ' disabled';
        }

        setClassName(newClassName.trim());
    }, [baseClassName, focused, error, disabled, innerError]);

    return className;
}