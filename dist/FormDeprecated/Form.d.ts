declare const Form_base: any;
export default class Form extends Form_base {
    [x: string]: any;
    renderGroupMultipleSelect(field: any, items: any, text: any, defaultText: any, disabled: boolean | undefined, callback: any): import("react/jsx-runtime").JSX.Element;
    renderMultipleSelect({ field, items, text, defaultText, disabled, callback }?: {
        field: any;
        items: any;
        text: any;
        defaultText: any;
        disabled?: boolean | undefined;
        callback: any;
    }): import("react/jsx-runtime").JSX.Element;
    renderMultipleSelectStyle1({ field, items, text, defaultText, disabled, callback }?: {
        field: any;
        items: any;
        text: any;
        defaultText: any;
        disabled?: boolean | undefined;
        callback: any;
    }, ...args: any[]): import("react/jsx-runtime").JSX.Element;
    renderGroupSelect({ field, items, text, defaultText, disabled, callback, size, style }?: {
        field: any;
        items: any;
        text: any;
        defaultText: any;
        disabled?: boolean | undefined;
        callback: any;
        size: any;
        style: any;
    }): import("react/jsx-runtime").JSX.Element;
    renderGroupSelectStyle1({ field, items, text, defaultText, disabled, callback, size, style }?: {
        field: any;
        items: any;
        text: any;
        defaultText: any;
        disabled?: boolean | undefined;
        callback: any;
        size: any;
        style: any;
    }, ...args: any[]): any;
    renderRelationGroupSelect(field: any, items: any, text: any, defaultText: any, disabled: boolean | undefined, callback: any): import("react/jsx-runtime").JSX.Element;
    renderSearchMultiple({ field, items, text, defaultText, disabled, size, allowAdd, onCreate, onAddElement, onRemoveElement, onOutsideClick, id, style, containerStyle, controlStyle, valueContainerStyle, nativeContainerStyle }?: {
        field: any;
        items: any;
        text: any;
        defaultText: any;
        disabled?: boolean | undefined;
        size?: string | undefined;
        allowAdd?: boolean | undefined;
        onCreate?: ((value: any) => void) | undefined;
        onAddElement: any;
        onRemoveElement: any;
        onOutsideClick?: (() => void) | undefined;
        id: any;
        style?: {} | undefined;
        containerStyle?: {} | undefined;
        controlStyle?: {} | undefined;
        valueContainerStyle?: {} | undefined;
        nativeContainerStyle?: {} | undefined;
    }): import("react/jsx-runtime").JSX.Element;
    renderSearchWithButton(field: any, items: any, text: any, defaultText: any, disabled: boolean | undefined, onSearch: (() => void) | undefined, callback: any, buttonClick: (() => void) | undefined, id: any, style: any): import("react/jsx-runtime").JSX.Element;
    renderSearchWithButtonStyle1(field: any, items: any, text: any, defaultText: any, disabled: boolean | undefined, onSearch: (() => void) | undefined, callback: any, buttonClick: (() => void) | undefined, id: any, style: any): import("react/jsx-runtime").JSX.Element;
    renderLogs(): any;
    renderEmpty(size: any): import("react/jsx-runtime").JSX.Element;
}
export {};
//# sourceMappingURL=Form.d.ts.map