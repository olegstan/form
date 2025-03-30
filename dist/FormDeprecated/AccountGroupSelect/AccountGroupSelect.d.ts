export default AccountGroupSelect;
export class AccountGroupSelect extends BaseInput {
    static defaultProps: {
        width: string;
    };
    constructor(props: any);
    state: {
        error: null;
        select: boolean;
        hasError: boolean;
        moduleAccountCreate: null;
        moduleAccountEdit: null;
        showAccountCreate: boolean;
        showAccountEdit: boolean;
    };
    wrapperRef: React.RefObject<any>;
    renderSelected(): any;
    handleShowSelect(select: any): void;
    getArrow(): any;
    handleAddAccount(): void;
    renderCreateComponent(): null | undefined;
    render(): import("react/jsx-runtime").JSX.Element;
}
import BaseInput from "../BaseInput";
import React from "react";
//# sourceMappingURL=AccountGroupSelect.d.ts.map