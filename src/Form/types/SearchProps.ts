import SelectProps from "./SelectProps";

export default interface SearchProps extends SelectProps {
    search: string;
    onSearch: (text: string) => void;
    loading: boolean;
}