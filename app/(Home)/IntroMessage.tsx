import React from 'react'
import BlackButton from '@/components/common/blackbutton'
import WhiteButton from '@/components/common/whitebutton'
import YellowButton from '@/components/common/yellowbutton'
import ClosedInput from '@/components/common/closedinput'
import OpenInput from '@/components/common/openinput'

export default function IntroMessage() {
  const buttonText = 'Start Learning Now'
  const buttonWithArrow = `${buttonText} \u2192`
  return (
    <div className='inline-block w-full'>
      <h1 className='font-bold text-black text-6xl py-5'>
        Quality 1-on-1 tutoring with TutorPlus
      </h1>
      <div className='grid grid-cols-3 w-1/2 py-5'>
        <h1 className='text-center font-bold text-black text-4xl'>GCSE</h1>
        <h1 className='text-center font-bold text-black text-4xl'>IB</h1>
        <h1 className='text-center font-bold text-black text-4xl'>A-Level</h1>
      </div>
      <h2 className='text-black text-xl py-5'>
        Choose from our range of experienced private and students tutors
      </h2>
      <div className='py-5'>
        <BlackButton text={buttonWithArrow} bold />
      </div>
    </div>
  )
}
