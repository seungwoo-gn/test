import React, { SetStateAction } from "react";
import { RefProps } from "../../../types/common";
interface BasicDatePickerProps {
    selected: Date;
    onChangeSelected: (date: Date) => void;
    width?: number;
    startDate?: Date;
    endDate?: Date;
    minDate?: Date;
    maxDate?: Date;
    selectsStart?: boolean;
    selectsEnd?: boolean;
    endRef?: React.RefObject<RefProps>;
    onOpenEnd?: () => void;
}
interface RangeDatePickerProps {
    gap?: number;
    startDate: Date;
    setStartDate: React.Dispatch<SetStateAction<Date>>;
    endDate: Date;
    setEndDate: React.Dispatch<SetStateAction<Date>>;
}
export type { BasicDatePickerProps, RangeDatePickerProps };
