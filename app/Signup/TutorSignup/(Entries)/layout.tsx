'use client'

import React, { useState } from 'react'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/footer'
import AuthNavbar from '@/components/AuthNavbar'
import { Inter } from 'next/font/google'
import TutorAuthStepper from '@/components/common/TutorAuthStepper'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export const PageContext = React.createContext<React.Dispatch<React.SetStateAction<number>>>(() => null)

export default function SignUpNavigation({
  children,
}: {
  children: React.ReactNode
}) {
  const [currentPage, updateCurrentPage] = useState(1)

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <PageContext.Provider value={updateCurrentPage}>
        <div className='bg-white'>
          <TutorAuthStepper activeStep={currentPage} />
          {children}
        </div>
      </PageContext.Provider>
    </>
  )
}
