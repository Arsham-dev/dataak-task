import clsx from 'clsx'
import { FC, JSX } from 'react'
import { twMerge } from 'tailwind-merge'

type TypographyTag = keyof JSX.IntrinsicElements

export interface TypographyProps {
  children: React.ReactNode
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
  className?: string
  component?: React.ElementType
}
export const Typography: FC<TypographyProps> = ({
  children,
  variant = 'body1',
  component: Tag,
  className
}) => {
  if (!Tag) {
    if (variant.startsWith('h')) {
      Tag = variant as TypographyTag
    } else if (variant === 'subtitle1' || variant === 'subtitle2') {
      Tag = 'h6'
    } else if (variant === 'button') {
      Tag = 'button'
    } else {
      Tag = 'span'
    }
  }
  return (
    <Tag
      className={twMerge(
        clsx({
          'max-xs:text-[18px] max-xs:leading-7 text-5xl font-semibold leading-[84px] max-md:text-4xl max-md:leading-[72px] max-sm:text-2xl max-sm:leading-[48px]':
            variant === 'h1',
          'max-xs:text-base max-xs:leading-6 text-4xl font-normal leading-[72px] max-md:text-3xl max-md:leading-[60px] max-sm:text-xl max-sm:leading-9':
            variant === 'h2',
          'max-xs:text-sm max-xs:leading-[21px] text-3xl font-normal leading-[60px] max-md:text-2xl max-md:leading-[48px] max-sm:text-[18px] max-sm:leading-7':
            variant === 'h3',
          'max-xs:text-xs max-xs:leading-6 text-2xl font-normal leading-[48px] max-md:text-xl max-md:leading-9 max-sm:text-lg max-sm:leading-[30px]':
            variant === 'h4',
          'max-xs:text-xs max-xs:leading-[21px] text-xl font-medium leading-9 max-md:text-lg max-md:leading-[30px] max-sm:text-base max-sm:leading-6':
            variant === 'h5',
          'max-xs:text-xs max-xs:leading-4.5 text-lg font-medium leading-[30px] max-md:text-base max-md:leading-8 max-sm:text-sm max-sm:leading-[21px]':
            variant === 'h6',
          'max-sm:leading[21px] max-xs:text-xs max-xs:leading-4.5 text-base font-normal leading-6 max-md:text-sm max-md:leading-[21px] max-sm:text-xs':
            variant == 'body1',
          'max-sm:leading[21px] max-xs:text-xs max-xs:leading-4.5 text-base font-medium leading-6 max-md:text-sm max-md:leading-[21px] max-sm:text-xs':
            variant === 'subtitle1',
          'max-md:leading-4.5 max-sm:leading-4.5 max-xs:leading-4.5 max-xs:text-xxs text-sm font-medium leading-[21px] max-md:text-xs max-sm:text-xs':
            variant === 'subtitle2' || variant === 'button',
          'max-md:leading-4.5 max-sm:leading-4.5 max-xs:leading-4.5 max-xs:text-xxs text-sm font-normal leading-[21px] max-md:text-xs max-sm:text-xs':
            variant === 'body2',
          'leading-4.5 max-md: max-md:leading-4.5 max-sm:leading-4.5 max-xs:leading-4.5 max-xs:text-xxs text-xs font-normal max-md:text-xs max-sm:text-xs':
            variant === 'caption',
          'text-xxs font-normal leading-[15px]': variant === 'overline'
        }),
        className
      )}>
      {children}
    </Tag>
  )
}
