import React, { ButtonHTMLAttributes, FC, HtmlHTMLAttributes } from 'react'

/** Component interface */

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  icon: JSX.Element
  isFullWidth?: boolean
  isSelected?: boolean
  isWidth?: any
  styles?: string;
}

const ButtonwithIcon: FC<ButtonIconProps> = ({
  text,
  icon,
  isFullWidth,
  isSelected,
  isWidth,
  styles,
  ...rest
}): JSX.Element => {
  return (
    <button
      className={`flex gap-3 ${isFullWidth
          ? 'w-full'
          : isWidth
            ? `min-w-[${isWidth}]`
            : 'min-w-[160px]'
        } sm:py-[10px] items-center justify-between px-3 border ${isSelected
          ? 'border-[#FFC130] text-[#FFC130]'
          : 'text-[#121212] border-[#121212]'
        } rounded-full  text-[14px] font-semibold py-2 ${styles}`}
      {...rest}
    >
      {text} {icon}
    </button>
  )
}

export default ButtonwithIcon
