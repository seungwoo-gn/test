import React, { SetStateAction } from "react";
interface PaginationProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<SetStateAction<number>>;
    list?: any[];
    totalPage?: number;
    pageSize?: number;
    itemsPerPage?: number;
    plusPage?: boolean;
    minusPage?: boolean;
}
export type { PaginationProps };
