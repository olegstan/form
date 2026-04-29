/**
 * Компонент для отображения ошибки (иконка + popup).
 * Мемоизирован.
 */
import {memo} from "react";
import InputPopup from '../../InputPopup/InputPopup';
// @ts-ignore
import errorSvg from './../../../assets/error.svg';
// @ts-ignore
import infoSvg from './../../../assets/info.svg';
import type {InfoTooltipItem} from "../InputContainer";

type TooltipKind = 'error' | 'info' | null;

const resolveTooltipKind = (hasError: boolean, hasInfo: boolean): TooltipKind => {
    switch (true) {
        case hasError:
            return 'error';
        case hasInfo:
            return 'info';
        default:
            return null;
    }
};

const ErrorTooltip = memo(function ErrorTooltip({
                                                    error,
                                                    info,
                                                    id
                                                }: {
    error?: string | null | undefined | boolean;
    info?: InfoTooltipItem[] | null;
    id?: string;
}) {
    const hasError = Boolean(error);
    const hasInfo = !hasError && Boolean(info?.length);
    const tooltipKind = resolveTooltipKind(hasError, hasInfo);

    if (!tooltipKind) return null;

    const trigger = tooltipKind === 'error'
        ? <img id={`tooltip-${id}`} src={errorSvg} alt="error" />
        : <img id={`tooltip-${id}`} src={infoSvg} alt="info" />;

    const renderTooltipContent = () => {
        switch (tooltipKind) {
            case 'error':
                return (
                    <label htmlFor={id} className="error">
                        {error}
                    </label>
                );
            case 'info':
                return (
                    <div className="info-tooltip">
                        {info?.map((item, index) => (
                            <div key={`${item.label}-${index}`} className="info-tooltip-row">
                                <span className="info-tooltip-label">{item.label}</span>
                                <span className="info-tooltip-value">{item.value}</span>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <InputPopup trigger={trigger}>
            {renderTooltipContent()}
        </InputPopup>
    );
});

export default ErrorTooltip;