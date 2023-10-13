import { RadioProps } from "../../../types/common";
interface StyledRadioProps {
    list: RadioProps[];
    value: string;
    onChange: (value: string) => void;
    column?: boolean;
    width?: number;
    height?: number;
    gap?: number;
    contentGap?: number;
}
export type { StyledRadioProps };
