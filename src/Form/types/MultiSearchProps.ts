import InputProps from "./InputProps";

export default interface MultiSearchProps extends Omit<InputProps, 'onChange'> {
    /**
     *
     */
    options: { id: any; name: string }[];
    /**
     *
     */
    values: [],
    /**
     * Обработчик изменения выбранного значения.
     * @param newValue - Выбранное значение.
     * @param action - Действие (например, select-option, remove-value и т.д.)
     */
    onChange: (newValue: any, action: any) => void;
    /**
     * Текущее значение строки поиска.
     */
    search: string;

    /**
     * Обработчик изменения текста в поле поиска.
     * @param text - Новый текст, введенный пользователем.
     */
    onSearch: (text: string) => void;
    allowAdd?: boolean,
    handleCreate?: (newValue: any) => void,
}