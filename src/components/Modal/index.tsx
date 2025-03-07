import clsx from 'clsx'
import { MdOutlineCancel } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Typography } from '../Typography'

export interface ModalProps {
  title: string
  content: React.ReactNode
  isOpen: boolean
  animationVariant?: 'fade' | 'scale' | 'normal'
  onClose?: () => void
  width?: string
  buttonContainerClassName?: string
}

export const Modal: React.FC<ModalProps> = ({
  title,
  content,
  onClose,
  isOpen,
  width = 'w-[505px]',
  animationVariant = 'normal'
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
        'fixed left-0 top-0 z-40 flex h-screen w-screen transition-all duration-300 ease-linear items-center justify-center',
        {
          'backdrop-blur-sm': isOpen && open
        }
      )}
      aria-label="Modal backdrop">
      <div
        className={twMerge(
          clsx(
            'max-w-[90%] rounded-lg max-h-4/5 relative flex min-h-[210px] flex-col overflow-hidden transition-all duration-300 ease-linear shadow-drop',
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
            }
          )
        )}>
        <div className="flex justify-between items-center bg-common-white py-2.5 px-6">
          <Typography className="text-common-black" variant="subtitle2">
            {title}
          </Typography>
          <MdOutlineCancel
            className="cursor-pointer text-xl text-common-black transition-opacity duration-300 ease-linear hover:opacity-80"
            onClick={onClose}
            role="button"
            aria-label="Close modal button"
            title="Close modal"
          />
        </div>
        <div
          className="flex flex-1 flex-col overflow-y-auto p-5  bg-gray-more-light"
          aria-label="Modal content">
          {content}
        </div>
      </div>
    </div>
  ) : null
}
