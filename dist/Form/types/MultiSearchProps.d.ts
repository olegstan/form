import InputProps from "./InputProps";
export default interface MultiSearchProps extends InputProps {
    options: {
        id: any;
        name: string;
    }[];
    values: [];
    /**
     * Текущее значение строки поиска.
     */
    search: string;
    /**
     * Обработчик изменения текста в поле поиска.
     * @param text - Новый текст, введенный пользователем.
     */
    onSearch: (text: string) => void;
    allowAdd?: boolean;
    handleCreate?: (newValue: any) => {};
}
//# sourceMappingURL=MultiSearchProps.d.ts.map