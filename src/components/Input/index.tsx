import clsx from 'clsx'
import { InputHTMLAttributes, useState, HTMLInputTypeAttribute } from 'react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { Typography } from '..'
import { twMerge } from 'tailwind-merge'

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    'size' | 'onClick' | 'placeholder'
  > {
  label?: string | null
  helperText?: string
  multiline?: boolean
  error?: boolean
  rows?: number
  fullwidth?: boolean
  color?: 'primary' | 'default' | 'gray' | 'transparent'
  type?: HTMLInputTypeAttribute | undefined
  onClick?: () => void
  variant?: 'outlined' | 'filled'
  placeholder?: string | null
}
export const Input = ({
  label,
  placeholder,
  helperText,
  disabled,
  error,
  multiline,
  rows,
  fullwidth,
  type,
  variant = 'outlined',
  color = 'default',
  className,
  onChange,
  ...otherProps
}: InputProps) => {
  const [focused, setfocused] = useState(false)
  const [inputType, setinputType] = useState(type === 'password')
  const onFocus = () => setfocused(true)
  const onBlur = () => setfocused(false)

  return (
    <div
      className="gap-1.25 flex w-full flex-col text-sm font-normal leading-5"
      aria-disabled={disabled}>
      {label && (
        <div
          aria-label="Label of input"
          className={clsx(
            'gap-x-1.25 flex flex-row items-center transition-colors duration-300 ease-linear',
            {
              'text-primary-main': !disabled && !error,
              'text-error-main': error,
              'text-gray-500': disabled
            }
          )}>
          <Typography variant="body2">{label}</Typography>
        </div>
      )}
      <div
        className={twMerge(
          clsx(
            'relative flex items-center gap-x-2 overflow-hidden rounded transition-all duration-700 ease-in-out',
            {
              'border border-solid bg-transparent': variant === 'outlined'
            },
            variant === 'outlined' && {
              'border-gray-600': !disabled && !error,
              'border-error-main shadow-error-light': error,
              'border-gray-400': disabled,
              'shadow-xss': focused
            },
            variant === 'filled' && {
              'bg-gray-100': color === 'default',
              'bg-primary-light': color === 'primary',
              'bg-gray-200': color === 'gray',
              'bg-transparent': color === 'transparent'
            },
            variant === 'filled' && {
              'text-primary-main': color === 'primary',
              'text-gray-900': color === 'default',
              'text-gray-400': disabled
            },
            !multiline && 'h-10.5 max-sm:h-9',
            { 'h-auto': multiline },
            {
              'w-full': fullwidth
            }
          ),
          className
        )}>
        {multiline ? (
          <textarea
            aria-label={label || ''}
            aria-disabled={disabled}
            aria-placeholder={placeholder || undefined}
            aria-multiline={multiline}
            aria-invalid={error}
            aria-readonly={disabled}
            aria-errormessage={error ? helperText : undefined}
            aria-describedby={helperText}
            placeholder={placeholder || undefined}
            disabled={disabled}
            onFocus={(event) => {
              onFocus()
              otherProps.onFocus?.(event)
            }}
            onBlur={(event) => {
              onBlur()
              otherProps.onBlur?.(event)
            }}
            rows={rows || 10}
            className={clsx(
              'transition-color px-4 h-full w-full resize-none border-none bg-transparent py-2 outline-none duration-300 ease-linear',
              variant === 'outlined' && {
                'dark:text-dark-gray-500 text-gray-900':
                  !disabled && !error && !focused,
                'text-primary-main dark:text-dark-primary-light':
                  !disabled && !error && focused,
                'text-error-main dark:text-dark-error-main': error,
                'dark:text-dark-gray-400 text-gray-400': disabled
              },
              variant === 'outlined' && {
                'placeholder-gray-400': (!error && !focused) || disabled,
                'placeholder-primary-main': !disabled && !error && focused,
                'placeholder-error-main': error
              },
              variant === 'filled' && {
                'placeholder-primary-main': color === 'primary'
              }
            )}
            onChange={onChange}
            {...otherProps}
          />
        ) : (
          <input
            aria-label={label || ''}
            aria-disabled={disabled}
            aria-placeholder={placeholder || undefined}
            aria-multiline={multiline}
            aria-invalid={error}
            aria-readonly={disabled}
            aria-errormessage={error ? helperText : undefined}
            aria-describedby={helperText}
            type={
              type === 'password' ? (inputType ? 'password' : 'text') : type
            }
            placeholder={placeholder || undefined}
            disabled={disabled}
            onFocus={(event) => {
              onFocus()
              otherProps.onFocus?.(event)
            }}
            onBlur={(event) => {
              onBlur()
              otherProps.onBlur?.(event)
            }}
            className={twMerge(
              clsx(
                'transition-color h-full w-full border-none bg-transparent py-2 outline-none duration-300 ease-linear',
                variant === 'outlined' && {
                  'dark:text-dark-gray-500 text-gray-900':
                    !disabled && !error && !focused,
                  'text-primary-main dark:text-dark-primary-light':
                    !disabled && !error && focused,
                  'text-error-main dark:text-dark-error-main': error,

                  'dark:text-dark-gray-400 text-gray-400': disabled
                },
                variant === 'outlined' && {
                  'placeholder-gray-400': (!error && !focused) || disabled,
                  'placeholder-primary-main': !disabled && !error && focused,
                  'placeholder-error-main': error
                },
                variant === 'filled' && {
                  'placeholder-primary-main': color === 'primary'
                },
                type !== 'password' && 'p-x',
                type === 'password' ? 'pl-4 pr-6' : undefined
              ),
              className
            )}
            onChange={onChange}
            {...otherProps}
          />
        )}

        {type === 'password' && (
          <div
            aria-label="password visibility icon button"
            onClick={() => {
              setinputType(!inputType)
            }}
            role="button"
            className="transition-color absolute right-1.5 cursor-pointer rounded-full bg-transparent p-1.5 text-gray-900 duration-300 ease-in-out hover:bg-gray-600">
            {inputType ? (
              <MdVisibilityOff title="Show password" fontSize={22} />
            ) : (
              <MdVisibility title="Hide password" fontSize={22} />
            )}
          </div>
        )}
      </div>
      {helperText && (
        <div aria-label="Helper text of input">
          <Typography
            className={clsx('transition-color duration-300 ease-linear', {
              'text-primary-main': !disabled && !error,
              'text-error-main': error,
              'text-gray-400': disabled
            })}
            variant="caption">
            {helperText}
          </Typography>
        </div>
      )}
    </div>
  )
}
