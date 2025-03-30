export default function formInput(Base: any): {
    new (): {
        [x: string]: any;
        renderHiddenInput({ field, disabled, id }?: {
            field: any;
            disabled?: boolean | undefined;
            id: any;
        }): import("react/jsx-runtime").JSX.Element;
        renderInput({ field, type, text, disabled, callback, size, style, containerStyle, placeholderStyle, className, onKeyPress, onKeyDown, value, outsideCallback }?: {
            field: any;
            type?: string | undefined;
            text: any;
            disabled?: boolean | undefined;
            callback: any;
            size: any;
            style?: {} | undefined;
            containerStyle?: {} | undefined;
            placeholderStyle?: {} | undefined;
            className: any;
            onKeyPress?: (() => void) | undefined;
            onKeyDown?: (() => void) | undefined;
            value: any;
            outsideCallback: any;
        }): import("react/jsx-runtime").JSX.Element;
        renderSlimInput({ field, text, disabled, callback, size, style, containerStyle, placeholderStyle, className, onKeyPress, onKeyDown, outsideCallback }?: {
            field: any;
            text: any;
            disabled?: boolean | undefined;
            callback: any;
            size: any;
            style?: {} | undefined;
            containerStyle?: {} | undefined;
            placeholderStyle?: {} | undefined;
            className: any;
            onKeyPress?: (() => void) | undefined;
            onKeyDown?: (() => void) | undefined;
            outsideCallback: any;
        }): import("react/jsx-runtime").JSX.Element;
        renderMaskedInput({ field, text, mask, inputMask, disabled, autoComplete, callback, className, onKeyPress, onKeyDown, style, containerStyle }?: {
            field: any;
            text: any;
            mask: any;
            inputMask: any;
            disabled?: boolean | undefined;
            autoComplete?: string | undefined;
            callback: any;
            className: any;
            onKeyPress?: (() => void) | undefined;
            onKeyDown?: (() => void) | undefined;
            style?: {} | undefined;
            containerStyle?: {} | undefined;
        }): import("react/jsx-runtime").JSX.Element;
        renderInputNumber({ field, text, decimals, disabled, callback, className, size, style, containerStyle, placeholderStyle, max, min, onKeyPress, onKeyDown, icon }?: {
            field: any;
            text: any;
            decimals?: boolean | undefined;
            disabled?: boolean | undefined;
            callback: any;
            className: any;
            size: any;
            style?: {} | undefined;
            containerStyle?: {} | undefined;
            placeholderStyle?: {} | undefined;
            max?: boolean | undefined;
            min?: boolean | undefined;
            onKeyPress?: (() => void) | undefined;
            onKeyDown?: (() => void) | undefined;
            icon?: boolean | undefined;
        }): import("react/jsx-runtime").JSX.Element;
        renderTextArea({ field, text, rows, disabled, className, onKeyPress, onKeyDown, style, containerStyle, placeholderStyle }?: {
            field: any;
            text: any;
            rows?: number | undefined;
            disabled?: boolean | undefined;
            className: any;
            onKeyPress?: (() => void) | undefined;
            onKeyDown?: (() => void) | undefined;
            style?: {} | undefined;
            containerStyle?: {} | undefined;
            placeholderStyle?: {} | undefined;
        }): import("react/jsx-runtime").JSX.Element;
    };
    [x: string]: any;
};
//# sourceMappingURL=formInput.d.ts.map