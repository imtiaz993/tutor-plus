import React, { FC, ReactElement } from 'react'

/** Component Props */
interface ChipsProps {
  text: any
  styles?: string
}

const Chips: FC<ChipsProps> = ({ text, styles }): ReactElement => {
  return (
    <div className={`h-auto min-w-[100px] bg-[#E0E0E0] px-3 py-[2px] rounded-xl text-black text-center ${styles}`}>
      <span>{text.Subject}</span>
    </div>
  )
}

export default Chips
