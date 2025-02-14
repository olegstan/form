/**
 * Компонент "основной" иконки (календарь, стрелка для Select, лоадер для Search).
 * Мемоизирован.
 */
import {memo} from "react";
import CalendarSvg from '../../../assets/calendar.svg';
import ArrowSvg from '../../../assets/arrow.svg';
import LoadImage from '../../../assets/loader.svg';

const InputIcon = memo(function InputIcon({
                                              typeName,
                                              iconClose,
                                              loading
                                          }: {
    typeName?: string;
    iconClose?: boolean;
    loading?: boolean;
}) {
    // Если опция iconClose = false, в исходном коде вообще не рендерилась "доп. иконка".
    // Если нужно поведение "календарь/стрелку рендерить всегда, а iconClose управляет только крестиком",
    // уберите эту проверку или вынесите её в CloseIcon.
    if (!typeName || !iconClose) return null;

    switch (typeName) {
        case 'DateInput':
        case 'DateTimeInput':
            return <img className="calendar" src={CalendarSvg} alt="calendar" />;
        case 'Select':
        case 'GroupSelect':
            return <img className="arrow" src={ArrowSvg} alt="arrow" />;
        case 'Search':
            return loading ? <img className="loader" src={LoadImage} alt="loading" /> : null;
        default:
            return null;
    }
});

export default InputIcon;