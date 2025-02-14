/**
 * Компонент для плейсхолдера (label).
 * Мемоизирован.
 */
import {memo} from "react";

const PlaceholderLabel = memo(function PlaceholderLabel({
                                                            placeholder,
                                                            id,
                                                            active
                                                        }: {
    placeholder?: string;
    id?: string;
    active: boolean;
}) {
    if (!placeholder) return null;

    return (
        <label htmlFor={id} className={`placeholder${active ? ' active' : ''}`}>
            {placeholder}
        </label>
    );
});

export default PlaceholderLabel;