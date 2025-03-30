import SelectProps from "./SelectProps";

export default interface GroupSelectProps extends SelectProps {
    options: { id: any; name: string, items: {id: any, name: string} }[];
    addButton?: any
}