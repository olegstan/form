import React from 'react';
declare const ResultsWithCheckbox: ({ id, values, options, handleClick, handleClickAll, className, idPrefix, active }: {
    options: any[];
    values: any[];
    handleClickAll: (event: React.MouseEvent<HTMLInputElement>) => void;
    handleClick: (event: React.MouseEvent<HTMLInputElement>, option: any) => void;
    className?: string;
    id?: string;
    idPrefix?: string;
    active?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export default ResultsWithCheckbox;
