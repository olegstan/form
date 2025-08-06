import { BaseButtonCommonProps, LinkElementProps } from "../../types/button.types";
export type LinkButtonProps = BaseButtonCommonProps & Omit<LinkElementProps, 'children'> & {
    to?: string;
    href?: string;
};
//# sourceMappingURL=LinkButton.d.ts.map