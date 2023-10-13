import React from "react";
interface IconProps {
    name?: string;
    width?: number;
    height?: number;
    fill?: string;
    rotated?: boolean;
    custom?: React.ReactNode;
}
interface RadioProps {
    label: string;
    value: string;
    disabled?: boolean;
}
interface RefProps {
    setOpen: (value: boolean) => void;
}
type FormVariant = "text" | "number" | "email" | "password";
type AlignVariant = "stretch" | "center" | "start" | "end";
type TextAlignVariant = "left" | "right" | "center" | "justify";
type VerticalAlign = "baseline" | "top" | "middle" | "bottom" | "sub" | "text-top";
type AlignSelf = "auto" | "stretch" | "center" | "start" | "end";
type JustifyVariant = "start" | "center" | "space-between" | "space-around" | "space-evenly";
export type { IconProps, RadioProps, FormVariant, AlignVariant, AlignSelf, JustifyVariant, TextAlignVariant, VerticalAlign, RefProps, };
