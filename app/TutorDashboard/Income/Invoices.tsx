import React from 'react'
import { InoviceLink, RatingSvg } from '@/images/svg'

const Invoices = () => {
  return (
    <section className='pb-3 border-b border-[#E0E0E0] mb-2'>
      <div className='flex justify-between'>
        <h1 className='className="font-inter font-semibold text-[16px]"'>
          Renata G.
        </h1>
        <div className='cursor-pointer rounded-full hover:bg-grey p-1'>
          <InoviceLink />
        </div>
      </div>
      <p>English-2, Math-1, Spanish-2 </p>
      <div className='flex items-center gap-5 pb-2 mt-3'>
        <div className='flex gap-2'>
          <RatingSvg />
          <RatingSvg />
          <RatingSvg />
          <RatingSvg />
          <RatingSvg fill={false} />
          <p className='font-inter text-[10px] font-semibold '>4.2</p>
        </div>
        <p className='font-inter text-[12px] font-normal'>
          Dec 7, 2021 -Dec 9, 2021
        </p>
      </div>
    </section>
  )
}

export default Invoices
