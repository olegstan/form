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
}) {
    if (!placeholder) return null;

    return (
        <label htmlFor={id} className={`placeholder${focused ? ' focused' : ''}`}>
            {placeholder}
        </label>
    );
});

export default PlaceholderLabel;