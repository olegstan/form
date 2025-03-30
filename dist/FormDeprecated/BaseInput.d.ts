export default class BaseInput extends React.Component<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    /**
     * polymorph method
     * @param select
     */
    handleShowSelect(select: any): void;
    getPlaceholderClassName(): string;
    getContainerStyle(): any;
    getWrapperStyle(): any;
    getInputStyle(): any;
    hasError(): true | undefined;
    getError(): any;
    getName(name: any): any;
    renderPlaceholder(): "" | import("react/jsx-runtime").JSX.Element;
    renderTooltipError(): "" | import("react/jsx-runtime").JSX.Element;
    handleClickOutside(e: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any): void;
    getWrapperClasses(): any;
    onBlur(): void;
    renderInput(): import("react/jsx-runtime").JSX.Element;
}
import React from "react";
//# sourceMappingURL=BaseInput.d.ts.map