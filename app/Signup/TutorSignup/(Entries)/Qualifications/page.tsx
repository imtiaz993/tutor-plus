'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import BlackButton from '@/components/common/blackbutton'
import Input from '@/components/common/Input'
import { useContext } from 'react'
import { PageContext } from '../layout'

interface Qualifications {
  subject: string
  qualification: string
  grade: string
}

function Qualification() {
  const router = useRouter()
  const [qualifications, setQualifications] = useState<Qualifications[]>([
    { subject: 'Geography', qualification: 'A-Level', grade: 'A*' },
    { subject: 'Polish', qualification: 'A-Level', grade: 'A*' },
    { subject: 'English', qualification: 'A-Level', grade: 'A*' },
  ])
  const [newQualification, setNewQualification] = useState({
    subject: '',
    qualification: '',
    grade: '',
  })

  const handleChange = (key: string, value: string) => {
    setNewQualification({ ...newQualification, [key]: value })
  }

  const handleAdd = () => {
    if (
      newQualification.subject &&
      newQualification.grade &&
      newQualification.qualification
    ) {
      setQualifications([...qualifications, newQualification])
      setNewQualification({
        subject: '',
        qualification: '',
        grade: '',
      })
    }
  }

  const wrapperStyles =
    'rounded-none border-none h-auto px-[0px!important] py-[0px!important]'
  const inputStyles =
    'outline-none px-3 placeholder:text-[13px] placeholder:text-semibold placeholder:text-[#787878]  text-[#787878]'

  const updateCurrentPage = useContext(PageContext)

  updateCurrentPage(3)

  return (
    <div >
      <div className='min-h-[calc(100vh-200px)] flex flex-col items-center justify-center'>
        <div data-aos="fade-left" data-aos-duration="750" className='w-full max-w-lg mx-auto'>
          <h1 className='text-lg font-semibold text-[#000000DE]'>
            What are your academic qualifications?
          </h1>
          <p className='mt-2 mb-14 text-sm text-[#000000DE] max-w-[430px]'>
            We would like to learn more about your educational background.
            Please enter the names of the subjects you have obtained
            qualifications in, the name of the examination board, and your
            scores or grades achieved for each subject
          </p>
          <div>
            <div className='font-bold  grid grid-cols-3 gap-3 mb-4'>
              <p className='text-black border border-[#ABABAB] py-2 px-3'>
                Subject
              </p>
              <p className='text-black border border-[#ABABAB] py-2 px-3'>
                Qualification
              </p>
              <p className='text-black border border-[#ABABAB] py-2 px-3'>
                Grade
              </p>
            </div>
            <div>
              {qualifications &&
                qualifications.length > 0 &&
                qualifications.map((item: Qualifications, index: number) => (
                  <div key={index} className='text-sm grid grid-cols-3 gap-3'>
                    <p
                      className={`text-black ${index + 1 === qualifications.length
                        ? 'border'
                        : 'border-t border-l border-r'
                        } border-[#ABABAB] py-2 px-3 overflow-hidden`}
                    >
                      {item.subject}
                    </p>
                    <p
                      className={`text-black ${index + 1 === qualifications.length
                        ? 'border'
                        : 'border-t border-l border-r'
                        } border-[#ABABAB] py-2 px-3 overflow-hidden`}
                    >
                      {item.qualification}
                    </p>
                    <p
                      className={`text-black ${index + 1 === qualifications.length
                        ? 'border'
                        : 'border-t border-l border-r'
                        } border-[#ABABAB] py-2 px-3 overflow-hidden`}
                    >
                      {item.grade}
                    </p>
                  </div>
                ))}
            </div>

            <div className='mt-4 w-full text-left outline-none grid grid-cols-3 gap-3 text-[13px] font-semibold text-[#787878] border border-[#ABABAB] py-2'>
              <Input
                type='text'
                placeholder='Subject'
                value={newQualification.subject}
                onChange={(e) => {
                  handleChange('subject', e.target.value)
                }}
                isFullwidth
                wrapperStyles={wrapperStyles}
                inputStyles={inputStyles}
              />
              <Input
                type='text'
                placeholder='Qualification'
                value={newQualification.qualification}
                onChange={(e) => {
                  handleChange('qualification', e.target.value)
                }}
                isFullwidth
                wrapperStyles={wrapperStyles}
                inputStyles={inputStyles}
              />
              <div className='pr-3 flex justify-between'>
                <Input
                  type='text'
                  placeholder='Grade'
                  value={newQualification.grade}
                  onChange={(e) => {
                    handleChange('grade', e.target.value)
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
          <div className='w-3/4 mx-auto mt-24 mb-4'>
            <BlackButton
              text={'Next'}
              type={'submit'}
              bold
              fillwidth
              onClick={() => {
                if (qualifications.length > 0) {
                  router.push('/Signup/TutorSignup/Subjects')
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Qualification
