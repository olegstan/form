import InputProps from "./InputProps";

export default interface SearchProps extends InputProps {
    options: any;
    search: boolean;
    onSearch: (text: string) => void;
    loading: boolean;
}