export default function formSelect(Base: any): {
    new (): {
        [x: string]: any;
        getValueSelect(prv: any, field: any): any;
        setValueSelect(prv: any, field: any, item: any): void;
        setValueSearch(prv: any, field: any, item: any): void;
        clearFormError(prv: any, field: any): void;
        renderSelect({ selected, field, items, text, defaultText, disabled, callback, size, textLength, className, style, containerStyle }?: {
            selected: any;
            field: any;
            items: any;
            text: any;
            defaultText: any;
            disabled?: boolean | undefined;
            callback: any;
            size: any;
            textLength?: number | undefined;
            className: any;
            style?: {} | undefined;
            containerStyle?: {} | undefined;
        }): import("react/jsx-runtime").JSX.Element;
        renderSlimSelect({ selected, field, items, text, defaultText, disabled, callback, size, textLength, className, style, containerStyle }?: {
            selected: any;
            field: any;
            items: any;
            text: any;
            defaultText: any;
            disabled?: boolean | undefined;
            callback: any;
            size: any;
            textLength?: number | undefined;
            className: any;
            style?: {} | undefined;
            containerStyle?: {} | undefined;
        }): import("react/jsx-runtime").JSX.Element;
        renderSelectStyle1({ selected, field, items, text, defaultText, disabled, callback, size, textLength, className, style, containerStyle }?: {
            selected: any;
            field: any;
            items: any;
            text: any;
            defaultText: any;
            disabled?: boolean | undefined;
            callback: any;
            size: any;
            textLength?: number | undefined;
            className: any;
            style?: {} | undefined;
            containerStyle?: {} | undefined;
        }, ...args: any[]): import("react/jsx-runtime").JSX.Element;
    };
    [x: string]: any;
};
//# sourceMappingURL=formSelect.d.ts.map