/**
 * Компонент иконки очистки (крестика).
 * Мемоизирован с помощью React.memo
 */
import {memo} from "react";
import Close from "../../../assets/ic_close_only.svg";
import {isNotEmpty} from "../InputContainer";

const CloseIcon = memo(function CloseIcon({
                                              typeName,
                                              icon,
                                              search,
                                              onSearch,
                                              name,
                                              value,
                                              onChange
                                          }: {
    typeName?: string;
    icon?: boolean;
    value?: any;
    search?: any;
    name?: string;
    onChange?: (value: any) => void;
    onSearch?: (value: any) => void;
}) {
    // если тип не подходит или выключена опция icon — не показываем
    //если передано icon = false то рендерить икноку для очистки не нужно
    if (!typeName || !icon) return null;


    let action = () => {};
    let notEmpty = false;
    switch (typeName)
    {
        case 'Select':
        case 'GroupSelect':
        case 'DateInput':
        case 'DateTimeInput':
            //там и так будет иконка календаря
            return null;
        case 'FileInput':
            return null;
        case 'Search':
            action = () => {
                onChange?.(null)
                onSearch?.('')
            };
            notEmpty = isNotEmpty(search);
            break;
        default:
            action = () => {onChange?.('')};
            notEmpty = isNotEmpty(value);
            break;
    }


    return (
        notEmpty && <img
            className="close"
            src={Close}
            alt="close"
            onClick={(e) => {
                action()
            }}
        />
    );
});

export default CloseIcon