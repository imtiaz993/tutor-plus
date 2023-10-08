import React, { FC, ReactElement } from 'react'

/** Component Props */
interface LableProps {
  text: string
}

const Label: FC<LableProps> = ({ text }): ReactElement => {
  return (
    <p className='font-inter font-medium text-[14px] mb-1 text-[#787878]'>
      {text}
    </p>
  )
}

export default Label
