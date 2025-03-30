import React from 'react';
import InputProps from "../types/InputProps";
/**
 * @param {Object} props - Компонент Input Props
 * @param {boolean} [props.focused=false] - Флаг фокуса
 * @param {function} [props.setFocused=() => {}] - Функция для установки фокуса
 * @param {function} [props.onKeyDown=() => {}] - Обработчик нажатия клавиш
 * @param {function} [props.onChange=() => {}] - Обработчик изменения значения
 * @param {function} [props.onClick=() => {}] - Обработчик клика
 * @param {boolean} [props.disabled=false] - Отключение инпута
 * @param {string} [props.className=''] - Дополнительный класс
 * @param {string} [props.type='text'] - Тип инпута
 * @param {object} [props.style={}] - Стили
 * @param {string} [props.id] - ID элемента
 * @param {string} [props.name] - Имя инпута
 * @param {string|number} [props.value] - Значение инпута
 * @param {string} [props.autoComplete='off'] - Автозаполнение
 * @param {Array.<string>} [props.error] - Ошибка (массив с флагом и сообщением)
 */
declare const Input: React.FC<InputProps>;
export default Input;
//# sourceMappingURL=Input.d.ts.map