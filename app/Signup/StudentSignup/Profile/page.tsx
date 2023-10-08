'use client'

import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import BlackButton from '@/components/common/blackbutton'
import Input from '@/components/common/Input'
import { useContext } from 'react'
import { PageContext } from '../layout'
import Label from '@/components/common/Label'

interface Subjects {
  subject: string
  qualification: string
}

function Subjects() {
  const router = useRouter()
  const [desc, setDesc] = useState('');
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

  const handleSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (subjects.length > 0) {
      router.push('/StudentDashboard/Dashboard')
    }
  };

  const wrapperStyles =
    'rounded-none border-none h-auto px-[0px!important] py-[0px!important]'
  const inputStyles =
    'outline-none px-3 placeholder:text-[13px] placeholder:text-semibold placeholder:text-[#787878]  text-[#787878]'

  const updateCurrentPage = useContext(PageContext)

  updateCurrentPage(2)

  return (
    <div>
      <div className='min-h-[calc(100vh-200px)] flex flex-col items-center justify-center'>
        <div data-aos="fade-left" data-aos-duration="750" className='max-w-xs w-full mx-auto'>
          <h1 className='text-lg font-semibold text-black'>
            Tell us about yourself and what subjects you want to learn.
          </h1>
          <form onSubmit={handleSubmit}>
            <div className='mt-10 mb-5'>
              <Label text={'Brief Description about you *'} />
              <Input
                type='text'
                placeholder=''
                isFullwidth
                wrapperStyles={'rounded-none outline-none border-t-0 border-l-0 border-r-0 border-b border-[#0000006B] text-sm h-auto px-[0px!important] py-[0px!important] text-[#0000008A]'}
                required
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </div>
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
                text={'Sign Up'}
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
export default Subjects
