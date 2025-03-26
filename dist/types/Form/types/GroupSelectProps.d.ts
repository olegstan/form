import InputProps from "./InputProps";
export default interface GroupSelectProps extends InputProps {
    options: {
        id: any;
        name: string;
        items: {
            id: any;
            name: string;
        };
    }[];
}
//# sourceMappingURL=GroupSelectProps.d.ts.map