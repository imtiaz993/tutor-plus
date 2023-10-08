'use client'

import React, { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import BlackButton from '@/components/common/blackbutton'
import Label from '@/components/common/Label'
import Input from '@/components/common/Input'
import { useContext } from 'react'
import { PageContext } from '../layout'

function TutorSignup() {
  const router = useRouter()

  const [accountDetails, setAccountDetails] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    router.push('/Signup/TutorSignup/Profile')
  };

  const wrapperStyles =
    'rounded-none outline-none border-t-0 border-l-0 border-r-0 border-b border-[#0000006B] text-sm h-auto px-[0px!important] py-[0px!important] text-[#0000008A]'

  const updateCurrentPage = useContext(PageContext)

  updateCurrentPage(1)

  return (
    <div>
      <div className='min-h-[calc(100vh-200px)] flex flex-col items-center justify-center'>
        <div data-aos="fade-left" data-aos-duration="750" className='w-full max-w-md mx-auto flex flex-col justify-center'>
          <h2 className='text-lg font-semibold text-[#000000DE]'>
            Let’s get started with some basics
          </h2>
          <form onSubmit={handleSubmit}>
            <div className='mt-6'>
              <Label text={'Full Name *'} />
              <Input
                type='text'
                placeholder=''
                isFullwidth
                required
                wrapperStyles={wrapperStyles}
                value={accountDetails.name}
                onChange={(e) => {
                  setAccountDetails({
                    ...accountDetails,
                    name: e.target.value,
                  });
                }}
              />
            </div>
            <div className='mt-6'>
              <Label text={'Email *'} />
              <Input
                type='email'
                placeholder=''
                isFullwidth
                required
                wrapperStyles={wrapperStyles}
                value={accountDetails.email}
                onChange={(e) => {
                  setAccountDetails({
                    ...accountDetails,
                    email: e.target.value,
                  });
                }}
              />
            </div>
            <div className='mt-6'>
              <Label text={'Phone *'} />
              <Input
                type='tel'
                placeholder=''
                isFullwidth
                required
                wrapperStyles={wrapperStyles}
                value={accountDetails.phone}
                onChange={(e) => {
                  setAccountDetails({
                    ...accountDetails,
                    phone: e.target.value,
                  });
                }}
              />
            </div>
            <div className='mt-6'>
              <Label text={'Password *'} />
              <Input
                type='password'
                placeholder=''
                isFullwidth
                required
                wrapperStyles={wrapperStyles}
                value={accountDetails.password}
                onChange={(e) => {
                  setAccountDetails({
                    ...accountDetails,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <div className='my-6'>
              <Label text={'Confirm Password *'} />
              <Input
                type='password'
                placeholder=''
                isFullwidth
                required
                wrapperStyles={wrapperStyles}
                value={accountDetails.confirmPassword}
                onChange={(e) => {
                  setAccountDetails({
                    ...accountDetails,
                    confirmPassword: e.target.value,
                  });
                }}
              />
            </div>
            <div className='mb-4'>
              <BlackButton
                text={'Next'}
                type={'submit'}
                bold
                fillwidth
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default TutorSignup
