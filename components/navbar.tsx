import React, { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TutorprofileNavbar = (): ReactElement => {
  return (
    <nav className='bg-white'>
      <div className='max-w-full mx-auto py-[5px] px-4 sm:px-6 lg:px-16 z-10'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo on the left */}
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
          <div className='flex-shrink-0 cursor-pointer'>
            <Image
              className='h-auto w-auto'
              src={require('@/resources/userLogoImage.png')}
              alt='Logo'
              width={36}
              height={36}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default TutorprofileNavbar
