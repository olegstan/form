import React from 'react';
import { BaseButtonCommonProps, LinkElementProps } from "../../types/button.types";
export type HrefButtonProps = BaseButtonCommonProps & Omit<LinkElementProps, 'children'> & {
    href: string;
};
declare const HrefButton: React.FC<HrefButtonProps>;
export default HrefButton;
//# sourceMappingURL=HrefButton.d.ts.map