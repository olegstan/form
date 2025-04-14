import GroupSelectProps from "./GroupSelectProps";
export default interface GroupSearchProps extends GroupSelectProps {
    /**
     * Текущее значение строки поиска.
     */
    search: string;
    /**
     * Обработчик изменения текста в поле поиска.
     * @param text - Новый текст, введенный пользователем.
     */
    onSearch: (text: string) => void;
    /**
     * Флаг, указывающий на состояние загрузки данных.
     * Если true, отображается индикатор загрузки.
     */
    loading?: boolean;
    /**
     * Определяет, нужно ли очищать текст в поле поиска,
     * если пользователь кликнул вне компонента и не выбрал элемент.
     * Полезно для реализации собственных названий или поведения.
     */
    clearOnClickOutside?: boolean;
}
//# sourceMappingURL=GroupSearchProps.d.ts.map