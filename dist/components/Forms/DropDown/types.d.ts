import React, { SetStateAction } from "react";
type DropDownItemType = {
    value: string;
    item: React.ReactNode;
};
interface DropDownProps {
    main: DropDownItemType;
    setMain: React.Dispatch<SetStateAction<DropDownItemType>>;
    setValue?: React.Dispatch<SetStateAction<string>>;
    list: DropDownItemType[];
    width?: number;
    height?: number;
    background?: string;
    onChange?: (value: string) => void;
}
export type { DropDownProps, DropDownItemType };
