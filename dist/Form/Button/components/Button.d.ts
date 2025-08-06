import React from 'react';
import { BaseButtonCommonProps, ButtonElementProps } from "../../types/button.types";
export type ButtonProps = BaseButtonCommonProps & Omit<ButtonElementProps, 'children'>;
declare const Button: React.FC<ButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map