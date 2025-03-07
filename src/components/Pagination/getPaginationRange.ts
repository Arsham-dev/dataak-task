const range = (start: number, end: number) =>
  Array.from(Array(end - start + 1).keys()).map((x) => x + start)

export const getPaginationRange: (
  totalPageCount: number,
  page: number,
  siblingCount: number
) => (string | number)[] = (totalPageCount, page, siblingCount) => {
  const DOTS = "..."

  const totalPageNumbers = siblingCount + 3
  if (totalPageNumbers >= totalPageCount) {
    return range(1, totalPageCount)
  }
  const leftSiblingIndex = Math.max(page - siblingCount, 1)
  const rightSiblingIndex = Math.min(page + siblingCount, totalPageCount)
  const shouldShowLeftDots = leftSiblingIndex > 2
  const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

  const firstPageIndex = 1
  const lastPageIndex = totalPageCount
  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = page + siblingCount
    const leftRange = range(1, leftItemCount)

    return [...leftRange, DOTS, totalPageCount]
  }
  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = page - siblingCount
    const rightRange = range(rightItemCount, totalPageCount)
    return [firstPageIndex, DOTS, ...rightRange]
  }
  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = range(leftSiblingIndex, rightSiblingIndex)
    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
  }

  return range(1, totalPageCount)
}
