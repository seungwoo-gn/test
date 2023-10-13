import React, { SetStateAction } from "react";
import { TextAlignVariant, VerticalAlign } from "../../../types/common";
interface TableCellProps {
    width?: string;
    backgroundColor?: string;
    textAlign?: TextAlignVariant;
    verticalAlign?: VerticalAlign;
    isLast?: boolean;
    borderRight?: string;
    height?: string;
    children: string | React.ReactNode;
    onClick?: () => void;
    hover?: string;
    cur?: boolean;
}
interface TableRowProps {
    children: React.ReactNode[];
    isHeader?: boolean;
    border?: string;
    bordered?: boolean;
    borderRight?: string;
    height?: string;
    onClick?: () => void;
    hover?: string;
    cur?: boolean;
    padding?: string;
}
interface TableHeadProps {
    children: React.ReactNode;
    bordered?: boolean;
}
interface TableBodyProps {
    children: React.ReactNode;
    borderRight?: string;
}
interface TableProps {
    children: React.ReactNode;
    spacing?: number;
    pagination?: {
        gap?: number;
        totalPage?: number;
        list?: any[];
        currentPage: number;
        setCurrentPage: React.Dispatch<SetStateAction<number>>;
        pageSize: number;
        itemsPerPage?: number;
    };
}
export type { TableRowProps, TableCellProps, TableHeadProps, TableBodyProps, TableProps, };
