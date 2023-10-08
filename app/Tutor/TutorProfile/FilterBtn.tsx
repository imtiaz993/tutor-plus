import { CloseIcon } from '@/images/svg'
import React, { FC, ReactElement, useState } from 'react'

/**Component Props */

interface FilterBtnProps {
  text: string
  handleDelete: (option: any) => void
}

const FilterBtn: FC<FilterBtnProps> = ({
  text,
  handleDelete,
}): ReactElement => {
  const [close, setClose] = useState<boolean>(true)
  const handleCloseIcon = (option: any) => handleDelete(option)

  return (
    <>
      {close && (
        <button
          className='flex gap-3 min-w-[120px] sm:py-[10px] items-center justify-between px-3 bg-black text-white rounded-full  text-[14px] font-semibold py-2'
          onClick={() => handleCloseIcon(text)}
        >
          <span>{text}</span> <CloseIcon />
        </button>
      )}
    </>
  )
}

export default FilterBtn
