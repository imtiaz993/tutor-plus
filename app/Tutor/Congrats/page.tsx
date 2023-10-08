import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Congrats = () => {
  return (
    <section className='mx-auto'>
      <div className='flex md:flex-row flex-col md:justify-between'>
        {/* Form Section  */}
        <div className='md:w-[70%] md:py-[13px] md:px-4 sm:px-6 lg:px-16 px-5 py-2'>
          <div className='flex gap-1'>
            <Link href='/TutorProfile' className='flex'>
              <h1 className='font-inter font-bold text-[24px]'>Tutor</h1>
              <div className='flex-shrink-0'>
                <Image
                  className='h-auto w-auto'
                  src={require('@/resources/plus.png')}
                  alt='Logo'
                  width={36}
                  height={24}
                />
              </div>
            </Link>
          </div>
          <section className='flex items-center justify-center w-full min-h-screen md:px-[63px] px-2'>
            <div className='flex flex-col items-center justify-center md:flex-nowrap flex-wrap'>
              <h1 className='font-inter font-bold md:text-[64px] text-center'>
                Congratulations
              </h1>
              <p className='font-inter font-medium md:text-[36px] text-center'>
                Your payment has been received, and you can now start learning
                with your tutor. Please connect with your tutor to begin your
                journey.
              </p>
            </div>
          </section>
        </div>
        {/*  TutorProfile Section */}
        <div className='md:w-[30%] bg-black min-h-screen flex flex-col px-[60px] p-[12px]'>
          <div className='flex justify-end '>
            <Image
              className='h-auto w-auto'
              src={require('@/resources/userLogoImage.png')}
              alt='Logo'
              width={36}
              height={36}
            />
          </div>
          <div className='flex mt-[140px] justify-center w-full'>
            <div className='flex justify-end '>
              <Image
                className='h-auto w-auto'
                src={require('@/resources/Study.png')}
                alt='Logo'
                width={456}
                height={456}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Congrats
