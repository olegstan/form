export function useDropdownLogic(props: any, wrapperRef: any, onSearch: any, handle: any): {
    selectOpen: boolean;
    focused: boolean;
    hovered: boolean;
    handleArrow: boolean;
    searchValue: any;
    selectedItem: null;
    setSearchValue: import("react").Dispatch<any>;
    setSelectedItem: import("react").Dispatch<import("react").SetStateAction<null>>;
    handleShowSelect: (bool: any) => void;
    onChange: (e: any) => void;
    onKeyDown: (event: any) => void;
    startHandleArrows: () => void;
    stopHandleArrows: () => void;
};
//# sourceMappingURL=useDropdownLogic.d.ts.map