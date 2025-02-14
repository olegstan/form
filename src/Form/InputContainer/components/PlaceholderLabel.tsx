/**
 * Компонент для плейсхолдера (label).
 * Мемоизирован.
 */
import {memo} from "react";

const PlaceholderLabel = memo(function PlaceholderLabel({
                                                            active,
                                                            focused,
                                                            placeholder,
                                                            id
                                                        }: {
    placeholder?: string;
    id?: string;
    active: boolean;
    focused: boolean;
}) {
    if (!placeholder) return null;

    return (
        <label htmlFor={id} className={`placeholder${focused || active ? ' active' : ''}`}>
            {placeholder}
        </label>
    );
});

export default PlaceholderLabel;