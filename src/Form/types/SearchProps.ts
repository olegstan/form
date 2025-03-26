import SelectProps from "./SelectProps";

export default interface SearchProps extends SelectProps {
    search: string;
    onSearch: (text: string) => void;
    loading: boolean;
    clearOnClickOutside: boolean;//поле чтобы определить очищать ли текст в поиске, если не выбран элемент, нужно для указания своих собственных названий
}