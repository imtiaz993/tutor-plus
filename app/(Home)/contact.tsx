import React from 'react'
import Image from 'next/image'

function CapableHands() {
  return (
    <>
      <div className='w-1/3'>
        <div className='grid grid-cols-2 justify-center align-middle'>
          <div className='width-200 height-300'>
            <Image
              src='/images/home3.jpg'
              width={200}
              height={300}
              alt='Picture of the author'
            />
          </div>
        </div>
      </div>
      <div className='w-2/3'>
        <div className='flex flex-col justify-between p-24'>
          <h1 className='font-bold text-black text-7xl py-5'>
            Your education, in capable hands.
          </h1>
          <p className='text-black text-xl'>
            At Tutor+, we`&apos;`re committed to providing you with the highest quality
            learning experience possible. With our team of expert educators,
            your education is in capable hands. Whether you`&apos;`re looking to
            advance your career, prepare for a new job, or simply learn
            something new, we`&apos;`ll work with you to develop a customised learning
            plan that fits your unique needs and goals
          </p>
        </div>
      </div>
    </>
  )
}

export default CapableHands
