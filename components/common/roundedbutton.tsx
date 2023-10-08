import React, { FC, ReactElement } from 'react'

interface RoundedButtonProp {
  text: string
  handleClick?: any
  isWidth?: boolean
  selected?: any
}

const Roundedbutton: FC<RoundedButtonProp> = ({
  text,
  selected,
  isWidth,
  handleClick,
}): ReactElement => {
  return (
    <div
      className={`min-w-[121px] h-[48px] flex items-center justify-center mt-[12px] rounded-full border border-[#787878] text-black cursor-pointer ${
        selected ? 'bg-black text-white' : ''
      }`}
      onClick={() => handleClick(text)}
    >
      {text}
    </div>
  )
}

export default Roundedbutton
