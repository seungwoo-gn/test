import React, { SetStateAction } from "react";
interface TimePickerProps {
    selected: Date;
    onChangeSelected?: (date: Date) => void;
    setSelected?: React.Dispatch<SetStateAction<Date>>;
    radioGap?: number;
    contentGap?: number;
    valueWidth?: number;
}
export type { TimePickerProps };
