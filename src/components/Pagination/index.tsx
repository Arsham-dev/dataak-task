import React from "react"
import DefaultPagination from "./components/defaultPagination"

export interface PaginationProps {
  totalPage: number
  page: number
  onChange: (page: number) => void
  siblingCount?: number
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPage,
  page,
  onChange,
  siblingCount = 2,
}) => {
  return (
    <DefaultPagination
      totalPage={totalPage}
      page={page}
      onChange={onChange}
      siblingCount={siblingCount}
    />
  )
}
