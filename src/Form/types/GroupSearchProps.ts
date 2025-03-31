import SelectProps from "./SelectProps";
import GroupSelectProps from "./GroupSelectProps";

export default interface GroupSearchProps extends GroupSelectProps {
    search: string;
    onSearch: (text: string) => void;
    loading?: boolean;
}