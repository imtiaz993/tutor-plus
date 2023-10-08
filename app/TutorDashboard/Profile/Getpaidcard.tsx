import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import { Moneysend } from '@/images/svg'

const Getpaidcard = () => {
  return (
    <div className='md:w-[310px] w-full h-auto shadow-lg rounded-md bg-black text-white'>
      <div className='flex justify-between p-[12px]'>
        <p>Get Paid</p>
        <Moneysend />
      </div>
      <div className='p-[12px] mt-[25px]'>
        <ProgressBar
          completed='60'
          height='5px'
          customLabel=' '
          bgColor='#FFC130'
          baseBgColor='#262626'
        />
      </div>
    </div>
  )
}

export default Getpaidcard
