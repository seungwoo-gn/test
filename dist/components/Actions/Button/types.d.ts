import React from "react";
type SizeVariant = "small" | "medium" | "large" | "header";
type TypeVariant = "button" | "submit" | "reset";
interface ButtonProps {
    size?: SizeVariant;
    type?: TypeVariant;
    disabled?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
    custom?: {
        padding?: string;
        fontSize?: string;
        fontColor?: string;
        border?: string;
        borderRadius?: number;
        height?: number;
        background?: string;
        fontWeight?: number;
        width?: boolean;
        filter?: string;
    };
}
export type { ButtonProps };
