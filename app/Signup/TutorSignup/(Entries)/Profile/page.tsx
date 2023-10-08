'use client'

import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import Label from '@/components/common/Label'
import Input from '@/components/common/Input'
import BlackButton from '@/components/common/blackbutton'
import { useContext } from 'react'
import { PageContext } from '../layout'

function PersonalInfo() {
  const router = useRouter();
  const [personalInfo, setPersonalInfo] = useState({
    university: '',
    pph: '',
    desc: '',
  });

  const handleSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    router.push('/Signup/TutorSignup/Qualifications')
  }

  const wrapperStyles =
    'rounded-none outline-none border-t-0 border-l-0 border-r-0 border-b border-[#0000006B] text-sm h-auto px-[0px!important] py-[0px!important] text-[#0000008A]'

  const updateCurrentPage = useContext(PageContext)

  updateCurrentPage(2)

  return (
    <div>
      <div className='min-h-[calc(100vh-200px)] flex flex-col items-center justify-center'>
        <div data-aos="fade-left" data-aos-duration="750" className='w-full max-w-sm mx-auto'>
          <h1 className='text-lg font-semibold text-[#000000DE]'>
            Tell us about yourself{' '}
          </h1>
          <p className='mt-2 mb-20 text-sm text-[#000000DE] max-w-[356px]'>
            This will be the profile information that students see, so
            remember to try and stand out! Don’t worry about making it
            perfect, as you can always change it later.
          </p>
          <form onSubmit={handleSubmit}>
            <div className='mt-6'>
              <Label text={'University *'} />
              <Input
                type='text'
                placeholder=''
                isFullwidth
                wrapperStyles={wrapperStyles}
                required
                value={personalInfo.university}
                onChange={(e) => {
                  setPersonalInfo({
                    ...personalInfo,
                    university: e.target.value,
                  });
                }}
              />
            </div>
            <div className='mt-6'>
              <Label text={'Price (per hour) *'} />
              <Input
                type='text'
                placeholder=''
                isFullwidth
                wrapperStyles={wrapperStyles}
                required
                value={personalInfo.pph}
                onChange={(e) => {
                  setPersonalInfo({ ...personalInfo, pph: e.target.value });
                }}
              />
            </div>
            <div className='mt-6 mb-28'>
              <Label text={'Brief Description about you *'} />
              <Input
                type='text'
                placeholder=''
                isFullwidth
                wrapperStyles={wrapperStyles}
                required
                value={personalInfo.desc}
                onChange={(e) => {
                  setPersonalInfo({ ...personalInfo, desc: e.target.value });
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
export default PersonalInfo
