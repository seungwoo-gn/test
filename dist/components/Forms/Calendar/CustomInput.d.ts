import React from "react";
interface CustomHTMLInputElement {
    onClick: () => void;
    width: number;
    value: string;
    onChange: () => void;
}
declare const CustomInput: React.ForwardRefExoticComponent<CustomHTMLInputElement & React.RefAttributes<HTMLInputElement>>;
export default CustomInput;
