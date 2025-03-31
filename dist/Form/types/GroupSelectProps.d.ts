import SelectProps from "./SelectProps";
export default interface GroupSelectProps extends SelectProps {
    options: {
        id: any;
        name: any;
        items: {
            id: any;
            name: any;
        };
    }[];
    addButton?: any;
}
//# sourceMappingURL=GroupSelectProps.d.ts.map