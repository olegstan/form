/**
 * Универсальный хук, повторяющий логику BaseInput:
 * - focused
 * - getName (обход бага с autocomplete Safari)
 * - handleShowSelect
 * - renderPlaceholder, renderTooltipError (если нужно внутри потом вызывать)
 */
export default function useBaseInput({ disabled, name, onClick, onBlur, onChange, setFocused }: {
    disabled?: boolean | undefined;
    name: any;
    onClick: any;
    onBlur: any;
    onChange: any;
    setFocused: any;
}): {
    handleClick: (e: any) => void;
    handleChange: (e: any) => void;
    handleFocus: () => void;
    handleBlur: () => void;
    getName: (name: any) => any;
};
//# sourceMappingURL=useBaseInput.d.ts.map