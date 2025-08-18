/// <reference types="react" />
type UseDateInputParams = {
    value: Date | null;
    onChange: (v: Date | null) => void;
    onBlur?: () => void;
    flatpickrInstance?: React.MutableRefObject<any>;
    setFocused?: (f: boolean) => void;
    dateFormat: string;
    dateMask: string;
    formatDate: (date: Date | null, fmt: string) => string;
    setInnerError?: (error: any) => void;
};
export declare const useDateInput: ({ value, onChange, onBlur, flatpickrInstance, setFocused, dateFormat, dateMask, formatDate, setInnerError, }: UseDateInputParams) => {
    date: Date | null;
    dateString: string;
    handleDateChange: (selectedDates: Date[]) => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur: () => void;
    setDateString: import("react").Dispatch<import("react").SetStateAction<string>>;
};
export {};
//# sourceMappingURL=useDateInput.d.ts.map