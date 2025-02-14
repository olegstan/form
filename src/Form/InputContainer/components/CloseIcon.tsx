/**
 * Компонент иконки очистки (крестика).
 * Мемоизирован с помощью React.memo
 */
import {memo} from "react";
import Close from "../../../assets/ic_close_only.svg";
import {isNotEmpty} from "../InputContainer";

const CloseIcon = memo(function CloseIcon({
                                              typeName,
                                              iconClose,
                                              value,
                                              name,
                                              onChange
                                          }: {
    typeName?: string;
    iconClose?: boolean;
    value?: any;
    name?: string;
    onChange?: (value: any) => void;
}) {
    // если тип не подходит или выключена опция iconClose — не показываем
    //если передано iconClose = false то рендерить икноку для очистки не нужно
    if (!typeName || !iconClose) return null;


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
        default:
            notEmpty = isNotEmpty(value);
            break;
    }


    return (
        notEmpty && <img
            className="close"
            src={Close}
            alt="close"
            onClick={(e) => {
                onChange?.('' );
            }}
        />
    );
});

export default CloseIcon