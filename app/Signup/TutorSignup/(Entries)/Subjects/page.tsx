'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import BlackButton from '@/components/common/blackbutton'
import Input from '@/components/common/Input'
import { useContext } from 'react'
import { PageContext } from '../layout'

interface Subjects {
  subject: string
  qualification: string
}

function Subjects() {
  const router = useRouter()
  const [subjects, setSubjects] = useState<Subjects[]>([
    { subject: 'Geography', qualification: 'A-Level' },
    { subject: 'Polish', qualification: 'A-Level' },
    { subject: 'English', qualification: 'A-Level' },
  ])
  const [newSubject, setNewSubject] = useState({
    subject: '',
    qualification: '',
  })

  const handleChange = (key: string, value: string) => {
    setNewSubject({ ...newSubject, [key]: value })
  }

  const handleAdd = () => {
    if (newSubject.subject && newSubject.qualification) {
      setSubjects([...subjects, newSubject])
      setNewSubject({
        subject: '',
        qualification: '',
      })
    }
  }

  const wrapperStyles =
    'rounded-none border-none h-auto px-[0px!important] py-[0px!important]'
  const inputStyles =
    'outline-none px-3 placeholder:text-[13px] placeholder:text-semibold placeholder:text-[#787878]  text-[#787878]'

  const updateCurrentPage = useContext(PageContext)

  updateCurrentPage(4)

  return (
    <div>
      <div className='min-h-[calc(100vh-200px)] flex flex-col items-center justify-center'>
        <div data-aos="fade-left" data-aos-duration="750" className='max-w-sm w-full mx-auto'>
          <h1 className='text-lg font-semibold text-black'>
            What subjects would you like to teach?
          </h1>
          <p className='mt-2 mb-14 text-sm text-black max-w-[380px]'>
            This will be the profile information that students see, so remember
            to try and stand out! Don’t worry about making it perfect, as you
            can always change it later.
          </p>
          <div className='max-w-xs'>
            <div className='font-bold  grid grid-cols-2 gap-3 mb-4'>
              <p className='text-black border border-[#ABABAB] py-2 px-3'>
                Subject
              </p>
              <p className='text-black border border-[#ABABAB] py-2 px-3'>
                Qualification
              </p>
            </div>
            <div>
              {subjects &&
                subjects.length > 0 &&
                subjects.map((item: Subjects, index: number) => (
                  <div key={index} className='text-sm grid grid-cols-2 gap-3'>
                    <p
                      className={`text-black ${index + 1 === subjects.length
                        ? 'border'
                        : 'border-t border-l border-r'
                        } border-[#ABABAB] py-2 px-3 overflow-hidden`}
                    >
                      {item.subject}
                    </p>
                    <p
                      className={`text-black ${index + 1 === subjects.length
                        ? 'border'
                        : 'border-t border-l border-r'
                        } border-[#ABABAB] py-2 px-3 overflow-hidden`}
                    >
                      {item.qualification}
                    </p>
                  </div>
                ))}
            </div>

            <div className='mt-4 w-full text-left outline-none grid grid-cols-2 gap-3 text-[13px] font-semibold text-[#787878] border border-[#ABABAB] py-2'>
              <Input
                type='text'
                placeholder='Subject'
                value={newSubject.subject}
                onChange={(e) => {
                  handleChange('subject', e.target.value)
                }}
                isFullwidth
                wrapperStyles={wrapperStyles}
                inputStyles={inputStyles}
              />
              <div className='pr-3 flex justify-between'>
                <Input
                  type='text'
                  placeholder='Qualification'
                  value={newSubject.qualification}
                  onChange={(e) => {
                    handleChange('qualification', e.target.value)
                  }}
                  isFullwidth
                  wrapperStyles={wrapperStyles}
                  inputStyles={inputStyles}
                />
                <button
                  onClick={() => {
                    handleAdd()
                  }}
                >
                  <Image
                    src='/images/svg/add-square.svg'
                    width={18}
                    height={18}
                    alt='Add Icon'
                  />
                </button>
              </div>
            </div>
          </div>

          <div className='w-11/12 mx-auto mt-24 mb-4'>
            <BlackButton
              text={'Next'}
              type={'submit'}
              bold
              fillwidth
              onClick={() => {
                if (subjects.length > 0) {
                  router.push('/Signup/TutorSignup/Thankyou')
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Subjects
