import React from "react";
interface CheckboxProps {
    label?: string | React.ReactNode;
    labelKey?: string;
    value?: boolean;
    onChange?: () => void;
    width?: number;
    height?: number;
    gap?: number;
}
export type { CheckboxProps };
