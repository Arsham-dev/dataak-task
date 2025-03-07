import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { Typography } from '../../Typography'
interface PaginationButtonProps {
  text: string | ReactNode
  selected?: boolean
  onClick?: () => void
  disabled?: boolean
  border?: boolean
}
const PaginationButton: React.FC<PaginationButtonProps> = ({
  text,
  selected,
  onClick,
  disabled,
  border
}) => {
  return (
    <div
      onClick={onClick}
      role="button"
      aria-label="pagination button"
      className={clsx('cursor-pointer', {
        'border-primary-main border rounded-lg': !disabled && border
      })}>
      <Typography
        variant="subtitle1"
        className={clsx(
          'flex h-8 w-8 rounded-lg cursor-pointer items-center justify-center leading-6 transition-colors duration-300 ease-linear ',
          {
            'bg-primary-main text-common-white': selected,
            'text-gray-300': !selected
          },
          {
            'hover:bg-primary-light hover:text-primary-main': !disabled
          }
        )}>
        {text}
      </Typography>
    </div>
  )
}

export default PaginationButton
