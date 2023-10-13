import { AlignSelf, AlignVariant, JustifyVariant } from "../../../types/common";
import React from "react";
interface SpacingProps {
    gap?: number;
    column?: boolean;
    align?: AlignVariant;
    justify?: JustifyVariant;
    cursor?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
    alignSelf?: AlignSelf;
    flexGrow?: number;
    flexBasis?: string;
}
export type { SpacingProps };
