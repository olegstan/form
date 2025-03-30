import SelectProps from "./SelectProps";
export default interface GroupSearchProps extends SelectProps {
    search: string;
    onSearch: (text: string) => void;
    loading?: boolean;
    options: {
        id: any;
        name: string;
        items: {
            id: any;
            name: string;
        };
    }[];
}
//# sourceMappingURL=GroupSearchProps.d.ts.map