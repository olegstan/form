import InputProps from "./InputProps";

export default interface DateInputProps extends InputProps{
    defaultDate?: string;
    innerError: object,//метод чтобьы показывать ошибку, если ввели неверный формат даты
    setInnerError: (error: object) => void;
}