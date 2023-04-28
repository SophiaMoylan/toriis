import type { FC } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import clsx from 'clsx'

interface PrimaryButtonProps {
  text: string
  link?: string
  onClick?: () => void
  className?: string
  hasArrow?: boolean
  type?: 'submit' | 'button' | 'reset' | undefined
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  text,
  link,
  onClick,
  className = '',
  hasArrow = true,
  type = undefined,
}) => {
  if (!!link) {
    return (
      <div>
        <Link href={link}>
          <div>
            <button
              type={type}
              className={clsx(
                'rounded border-2 border-solid border-cobalt',
                'rounded bg-lightBlue px-5 py-1',
                'shadow-[-8px_8px_0px_0px] shadow-cobalt',
                'hover:shadow-[-5px_5px_0px_0px] hover:shadow-cobalt',
                className,
              )}
            >
              {text}
              {hasArrow && (
                <ArrowRightIcon className="ml-1 inline h-9 w-5 stroke-current stroke-1" />
              )}
            </button>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div>
        <button
          onClick={onClick || undefined}
          className={clsx(
            'rounded border-2 border-solid border-cobalt',
            'rounded bg-lightBlue px-20 py-3',
            'shadow-[-8px_8px_0px_0px] shadow-cobalt',
            'hover:shadow-[-5px_5px_0px_0px] hover:shadow-cobalt',
            className,
          )}
        >
          {text}
        </button>
      </div>
    </div>
  )
}

export default PrimaryButton
