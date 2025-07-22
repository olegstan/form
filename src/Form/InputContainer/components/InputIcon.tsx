/**
 * Компонент "основной" иконки (календарь, стрелка для Select, лоадер для Search).
 * Мемоизирован.
 */
import {memo} from "react";
// @ts-ignore
import CalendarSvg from '../../../assets/calendar.svg';
// @ts-ignore
import ArrowSvg from '../../../assets/arrow.svg';
// @ts-ignore
import LoadImage from '../../../assets/loader.svg';

const InputIcon = memo(function InputIcon({
                                              id,
                                              typeName,
                                              icon,
                                              loading
                                          }: {
    id?: string;
    typeName?: string;
    icon?: boolean;
    loading?: boolean;
}) {
    // Если опция icon = false, в исходном коде вообще не рендерилась "доп. иконка".
    // Если нужно поведение "календарь/стрелку рендерить всегда, а icon управляет только крестиком",
    // уберите эту проверку или вынесите её в CloseIcon.
    if (!typeName || !icon) return null;

    switch (typeName) {
        case 'DateInput':
        case 'DateTimeInput':
            return <img className="calendar" src={CalendarSvg} alt="calendar" />;
        case 'Select':
        case 'GroupSelect':
        case 'MultiSelect':
            return <img className="arrow" src={ArrowSvg} alt="arrow" />;
        case 'Search':
        case 'GroupSearch':
            return loading ? <img id={'loader-' + id} className="loader" src={LoadImage} alt="loading" /> : null;
        default:
            return null;
    }
});

export default InputIcon;