import clsx from 'clsx'
import { MdOutlineCancel } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Typography } from '../Typography'

export interface ModalProps {
  title: string
  content: React.ReactNode
  type: 'success' | 'error' | 'default'
  isOpen: boolean
  animationVariant?: 'fade' | 'scale' | 'normal'
  onAccept?: () => void
  onCancel?: () => void
  width?: string
  buttonContainerClassName?: string
  className?: string
  openFromBottom?: boolean
}

export const Modal: React.FC<ModalProps> = ({
  title,
  content,
  type,
  onCancel,
  isOpen,
  width = 'w-[505px]',
  animationVariant = 'normal',
  className = 'text-black bg-white',
  openFromBottom
}) => {
  const [open, setopen] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setopen(!!isOpen)
    }, 300)
  }, [isOpen])

  return open || isOpen ? (
    <div
      className={clsx(
        'fixed left-0 top-0 z-40 flex h-screen w-screen transition-all duration-300 ease-linear',
        {
          'backdrop-blur': isOpen && open
        },
        {
          'items-center justify-center': !openFromBottom,
          'items-end justify-center': openFromBottom
        }
      )}
      aria-label="Modal backdrop">
      <div
        className={twMerge(
          clsx(
            'max-h-4/5 relative flex min-h-[210px]  flex-col overflow-hidden border p-4 transition-all duration-300 ease-linear',
            width,
            animationVariant === 'scale' && {
              'scale-0': !(isOpen && open),
              'scale-100': isOpen && open
            },
            animationVariant === 'fade' && {
              'opacity-0': !(isOpen && open),
              'opacity-100': isOpen && open
            },
            animationVariant === 'normal' && {
              hidden: !isOpen
            },
            {
              'border-successful-main': type === 'success',
              'border-error-main': type === 'error',
              'border-gray-700': type === 'default'
            },
            {
              'max-w-[90%] rounded': !openFromBottom,
              'w-full max-w-full rounded-t': openFromBottom
            }
          ),
          className
        )}>
        <MdOutlineCancel
          className="right-4.5 top-4.5 absolute cursor-pointer text-lg text-gray-700 transition-opacity duration-300 ease-linear hover:opacity-80"
          onClick={onCancel}
          role="button"
          aria-label="Close modal button"
          title="Close modal"
        />
        <Typography className="mb-5 mt-4" variant="subtitle2">
          {title}
        </Typography>
        <div
          className="flex flex-1 flex-col overflow-y-auto"
          aria-label="Modal content">
          <Typography
            variant="caption"
            component="div"
            className="leading-4.5 flex-1 overflow-auto">
            {content}
          </Typography>
        </div>
      </div>
    </div>
  ) : null
}
