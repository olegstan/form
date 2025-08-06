import React from 'react';
import { BaseButtonCommonProps, LinkElementProps } from "../../types/button.types";
export type InlineLinkButtonProps = BaseButtonCommonProps & Omit<LinkElementProps, 'children'>;
declare const InlineLinkButton: React.FC<InlineLinkButtonProps>;
export default InlineLinkButton;
//# sourceMappingURL=InlineLinkButton.d.ts.map