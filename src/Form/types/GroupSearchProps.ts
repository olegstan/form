import SelectProps from "./SelectProps";

export default interface GroupSearchProps extends SelectProps {
    search: string;
    onSearch: (text: string) => void;
    loading: boolean;
}