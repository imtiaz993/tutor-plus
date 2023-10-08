import React, { FC, InputHTMLAttributes } from 'react'

/** Component Props */

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isFullwidth?: boolean
  icon?: JSX.Element
  wrapperStyles?: string;
  inputStyles?: string;
}

const Input: FC<InputProps> = ({ isFullwidth, icon, wrapperStyles, inputStyles, ...rest }) => {
  return (
    <div
      className={`flex justify-between rounded-full items-center px-3 py-4 border  ${isFullwidth ? 'w-full' : 'min-w-[160px]'} h-[48px] ${wrapperStyles}`}
    >
      <input
        className={`appearance-none placeholder:text-black placeholder:font-inter placeholder:font-medium placeholder:text-[14px] outline-none ${isFullwidth ? 'w-full' : ''
          } ${inputStyles}`}
        {...rest}
      />
      {icon && icon}
    </div>
  )
}

export default Input
