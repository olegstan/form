/**
 * Компонент для отображения ошибки (иконка + popup).
 * Мемоизирован.
 */
import {memo} from "react";
import InputPopup from '../../InputPopup/InputPopup';
// @ts-ignore
import errorSvg from './../../../assets/error.svg';

const ErrorTooltip = memo(function ErrorTooltip({
                                                    error,
                                                    id
                                                }: {
    error?: string | null | undefined | boolean;
    id?: string;
}) {
    if (!error) return null;

    return (
        <InputPopup trigger={<img id={`tooltip-${id}`} src={errorSvg} alt="error" />}>
            <label htmlFor={id} className="error">
                {error}
            </label>
        </InputPopup>
    );
});

export default ErrorTooltip;