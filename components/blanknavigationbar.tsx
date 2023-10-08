'use client'

import React, { FC, useState } from 'react'
import Link from 'next/link'
import { auth } from '@/config/firebase'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import BlackButton from '@/components/common/blackbutton'
import WhiteButton from './common/whitebutton'
import Image from 'next/image'

interface BlankNavbarProp {
  showAvatar?: boolean
  hideLogo?: boolean
}


const BlankNavbar: FC<BlankNavbarProp> = ({ showAvatar, hideLogo }) => {
  return (
    <nav className='bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo on the left */}
          <div className='flex-shrink-0'>
            {!hideLogo && <Image
              src='/images/tutorpluslogo.png'
              width={150}
              height={150}
              alt='Picture of the author'
            />}
          </div>
          {showAvatar && <Image
            src='/images/svg/avatar.svg'
            width={36}
            height={36}
            alt='avatar'
            className='cursor-pointer'
          />}
        </div>
      </div>
    </nav>
  )
}

export default BlankNavbar
