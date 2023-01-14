import { ButtonHTMLAttributes } from 'react'
import { PhosphorIcon } from "types"

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: PhosphorIcon
}

const ActionButton = ({ icon: Icon, className = '', ...rest }: ActionButtonProps) => {
  return (
    <button
      className={`h-10 text-gray-400 self-end rounded-full grid shrink-0 place-items-center w-10 bg-zinc-700 hover:bg-zinc-600 transition-colors ${className}`}
      {...rest}
    >
      <Icon />
    </button>
  )
}

export { ActionButton }
