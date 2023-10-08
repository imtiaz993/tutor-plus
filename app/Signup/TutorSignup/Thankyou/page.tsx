'use client'

import React from 'react'
import Image from 'next/image'

function Thankyou() {
  return (
    <div>
      <div className='min-h-[calc(100vh-80px)] flex flex-col items-center justify-center'>
        <Image
          src='/images/svg/check-circle.svg'
          width={150}
          height={151}
          alt='Picture'
        />
        <p className='text-2xl font-semibold text-[#000000DE] mt-12'>
          Thanks. You will receive an email once your profile has been reviewed
        </p>
      </div>
    </div>
  )
}
export default Thankyou
