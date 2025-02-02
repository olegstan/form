import React from "react";

export default interface CheckboxProps {
    value?: string | number; // Значение чекбокса
    name?: string; // Имя для группировки чекбоксов
    id?: string; // ID элемента
    checked?: boolean; // Статус чекбокса (отмечен или нет)
    toggleCallback?: (checked: boolean) => void; // Функция обратного вызова при изменении состояния
    text?: string; // Текст рядом с чекбоксом
    textStyle?: React.CSSProperties; // Стили для текста
    checkboxStyle?: React.CSSProperties; // Стили для самого чекбокса
    style?: React.CSSProperties; // Общий стиль контейнера
}