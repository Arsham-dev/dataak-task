import { useEffect, useState } from 'react'

export const usePagination = (
  total?: number,
  initPage?: number,
  initPageSize?: number
) => {
  const [page, setPage] = useState(initPage ?? 1)
  const [pageSize, setPageSize] = useState(initPageSize ?? 10)
  const [totalItems, settotalItems] = useState<number>(total || 0)

  useEffect(() => {
    if (total) settotalItems(total || 0)
  }, [total])

  const onPageChange = (page: number) => {
    setPage(page)
  }

  const onPageSizeChange = (pageSize: number) => {
    setPageSize(pageSize)
  }

  const totalPages = Math.ceil(totalItems / pageSize)

  return {
    page,
    pageSize,
    totalItems,
    totalPages,
    onPageChange,
    onPageSizeChange
  }
}
