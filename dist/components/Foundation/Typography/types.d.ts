import { AlignVariant } from "../../../types/common";
import React from "react";
type WhiteSpaceType = "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line" | "break-spaces";
interface TypographyProps {
    weight?: number;
    size?: number;
    color?: string;
    height?: number;
    align?: AlignVariant;
    inline?: boolean;
    whiteSpace?: WhiteSpaceType;
    children: React.ReactNode;
    cur?: boolean;
}
export type { TypographyProps };
