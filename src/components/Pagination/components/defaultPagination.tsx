import React from 'react'
import PaginationButton from './paginationButton'
import { getPaginationRange } from '../getPaginationRange'
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'
interface DefaultPaginationProps {
  totalPage: number
  page: number
  selected?: boolean
  onChange: (page: number) => void
  siblingCount?: number
}
const DefaultPagination: React.FC<DefaultPaginationProps> = ({
  totalPage,
  page,
  onChange,
  siblingCount = 2
}) => {
  const paginationRange = getPaginationRange(totalPage, page, siblingCount)

  return (
    <div className="flex flex-row items-start gap-x-1.25">
      <PaginationButton
        text={<RiArrowRightLine className="text-xl" />}
        onClick={() => onChange(page > 1 ? page - 1 : 1)}
      />

      {paginationRange.map((text, index) => {
        if (typeof text === 'number') {
          return (
            <PaginationButton
              key={index}
              text={`${text}`}
              onClick={() => onChange(Number(text))}
              selected={text === page}
            />
          )
        } else {
          return <span key={index}>{text}</span>
        }
      })}

      <PaginationButton
        text={<RiArrowLeftLine className="text-xl" />}
        onClick={() => onChange(page < totalPage ? page + 1 : totalPage)}
      />
    </div>
  )
}

export default DefaultPagination
