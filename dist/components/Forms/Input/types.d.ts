import { FormVariant } from "../../../types/common";
import React from "react";
type InputVariant = "Outlined" | "Filled";
interface TextInputProps {
    type: FormVariant;
    variant?: InputVariant;
    placeholder?: string;
    value?: string;
    title?: string;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    onChange?: (value: string) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    width?: number;
    isIconVisible?: boolean;
}
export type { TextInputProps };
