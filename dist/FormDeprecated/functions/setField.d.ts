export default function setField(Base: any): {
    new (): {
        [x: string]: any;
        setNumber(field: any, response: any, prv: any): void;
        convertToNumber(value: any): string | number;
        /**
         *
         * @param field
         * @param array
         * @param response
         * @param prv
         */
        setSearch(field: any, array: any, response: any, prv: any): void;
        /**
         *
         * @param field
         * @param array
         * @param response
         * @param prv
         */
        setSearchType(field: any, array: any, response: any, prv: any, customField: any): void;
        /**
         *
         * @param field
         * @param array
         * @param response
         * @param prv
         */
        setSearchReason(field: any, array: any, response: any, prv: any, customField: any): void;
        /**
         *
         * @param field
         * @param array
         * @param response
         * @param prv
         */
        setSelect(field: any, array: any, response: any, prv: any): void;
        /**
         *
         * @param field
         * @param array
         * @param response
         * @param prv
         */
        setSelectAccount(field: any, array: any, response: any, prv: any): void;
        /**
         *
         * @param field
         * @param array
         * @param response
         * @param prv
         */
        setGroupSelect(field: any, array: any, response: any, prv: any): void;
        /**
         *
         * @param field
         * @param response
         * @param prv
         */
        setDate(field: any, response: any, prv: any): void;
        /**
         *
         * @param field
         * @param response
         * @param prv
         */
        setDateTime(field: any, response: any, prv: any): void;
    };
    [x: string]: any;
};
//# sourceMappingURL=setField.d.ts.map