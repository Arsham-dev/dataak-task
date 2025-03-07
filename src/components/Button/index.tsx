import clsx from 'clsx'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { RiLoaderFill } from 'react-icons/ri'
import { twMerge } from 'tailwind-merge'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'medium'
  variant?: 'primary' | 'text' | 'outline'
  status?: 'default' | 'success' | 'error'
  isLoading?: boolean
  fullwidth?: boolean
  StartIcon?: ReactNode
  EndIcon?: ReactNode
}
export const Button: FC<ButtonProps> = ({
  children,
  status = 'default',
  variant = 'primary',
  isLoading,
  fullwidth,
  StartIcon,
  EndIcon,
  type = 'button',
  className,
  ...otherProps
}) => {
  const { disabled } = otherProps

  return (
    <button
      type={type}
      aria-label="button"
      aria-expanded="false"
      role="button"
      aria-disabled={disabled}
      className={twMerge(
        clsx(
          'relative cursor-pointer overflow-hidden rounded px-3 transition-all duration-1000 ease-in-out h-9 text-sm font-normal max-sm:h-6',
          {
            'flex w-full items-center justify-center': fullwidth
          },
          variant === 'primary' && [
            'text-primary-contrastText',
            !disabled && {
              'bg-primary-main hover:bg-primary-dark active:bg-primary-light':
                status === 'default',
              'bg-successful-main hover:bg-successful-dark active:bg-successful-light':
                status === 'success',
              'bg-error-main hover:bg-error-dark active:bg-error-light':
                status === 'error'
            },
            disabled && 'bg-gray-200 hover:bg-gray-200'
          ],

          (variant === 'text' || variant === 'outline') && [
            'bg-unset hover:bg-unset',
            !disabled && {
              'hover:bg-primary-light active:bg-primary-main':
                status === 'default',
              'hover:bg-successful-light active:bg-successful-main':
                status === 'success',
              'hover:bg-error-light active:bg-error-main': status === 'error'
            },
            { 'bg-transparent hover:bg-transparent': disabled }
          ],
          (variant === 'text' || variant === 'outline') && [
            !disabled && {
              'text-successful-main hover:text-successful-dark':
                status === 'success',
              'text-error-main hover:text-error-dark': status === 'error',
              'text-primary-main': status === 'default'
            },
            { 'text-gray-300 hover:text-gray-300': disabled }
          ],
          variant === 'outline' && [
            !disabled && {
              'border-primary-main border': status === 'default',
              'border-successful-main  border': status === 'success',
              'border-error-main  border': status === 'error'
            },
            {
              'border border-gray-200': disabled
            }
          ]
        ),
        className
      )}
      {...otherProps}>
      <div
        className={clsx(
          'flex flex-row items-center gap-x-2.5 transition-all duration-1000 ease-out',
          {
            'scale-0 opacity-0': isLoading,
            'scale-100 opacity-100': !isLoading
          }
        )}>
        {StartIcon && (
          <div
            aria-label="A Icon at right of the text in button"
            aria-hidden={true}>
            {StartIcon}
          </div>
        )}
        {children}
        {EndIcon && (
          <div
            aria-label="A Icon at left of the text in button"
            aria-hidden={true}>
            {EndIcon}
          </div>
        )}
      </div>
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <RiLoaderFill
          className={clsx(
            'animate-spin transition-all duration-1000 ease-out',
            {
              ' text-xxs opacity-0': !isLoading,
              ' text-base opacity-100': isLoading
            }
          )}
        />
      </div>
    </button>
  )
}
