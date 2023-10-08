import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { LeftArrow } from '@/images/svg'
import { possibleSubjects } from '@/api/tutor'
import { ExamBoards } from '@/utilities/fetchExamBoard'
import { MessageDataContext } from '@/context/MatchTutor'
import FilterBtn from '@/app/Tutor/TutorProfile/FilterBtn'
import React, { useContext, useEffect, useState } from 'react'
import MatchTutorForm from '@/app/Tutor/TutorMatch/MatchTutorForm'
import SubjectSelector from '@/app/Tutor/TutorMatch/possibleSubjectSelector'

const TutorMatch = () => {
  const [subjects, setSubjects] = useState<any>([])
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [selectSubject, setSelectedSubject] = useState('')
  const [examBoard, setExamBoard] = useState<any>([])
  const { messageData, setMessageData } = useContext(MessageDataContext)

  const router = useRouter()

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubject(e.target.value)
    const selectedOption = e.target.value
    if (!selectedOptions.includes(selectedOption)) {
      setSelectedOptions([...selectedOptions, selectedOption])
    }
  }
  const handleOptionDelete = (option: string) => {
    setSelectedOptions(
      selectedOptions.filter((selectedOption) => selectedOption !== option)
    )
    setExamBoard(
      selectedOptions.filter((selectedOption) => selectedOption !== option)
    )
  }

  useEffect(() => {
    setMessageData({ ...messageData, subjects: selectedOptions })
  }, [messageData, selectedOptions, setMessageData])

  const fetchSubjects = async () => {
    try {
      const sub = await possibleSubjects()
      setSubjects(sub)
    } catch (err) {
      console.log({ err })
    }
  }

 
  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const res: any = await ExamBoards(selectSubject)
  
        setExamBoard([...examBoard, ...res])
      } catch (err) {
        console.log(err)
      }
    }

    if (selectSubject) {
      fetchBoard()
    }
  }, [selectSubject, examBoard])

  useEffect(() => {
    fetchSubjects()
  }, [])

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
          <div className='mr-3 my-6 flex items-center'>
            <div className='cursor-pointer' onClick={() => router.back()}>
              <LeftArrow />
            </div>
            <span className='font-inter font-bold text-[24px] ml-2'>
              Tutor Matching Request
            </span>
          </div>
          <section>
            <div className='lg:pr-[250px]'>
              <div>
                <h1 className='font-inter font-bold text-[24px]'>
                  Please tell us about your prefrences so we can match a perfect
                  tutor for you
                </h1>
                <p className='font-inter font-normal text-[16px]'>
                  Share your requirements with Tutor+, and we`&apos;`ll send you an
                  email as soon as we hear back from them (typically within 24
                  hours).
                </p>
              </div>
              <div className='lg:w-[75%] mt-5'>
                <SubjectSelector
                  label={'Search & add subjects with their level'}
                  data={subjects}
                  onChange={handleSelectChange}
                />
                <div className='flex flex-wrap mt-3 gap-2'>
                  {selectedOptions?.map((item: any, index: number) => (
                    <FilterBtn
                      key={index}
                      text={item}
                      handleDelete={handleOptionDelete}
                    />
                  ))}
                </div>
              </div>
              <MatchTutorForm
                subjects={selectedOptions}
                examBoard={examBoard}
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default TutorMatch
