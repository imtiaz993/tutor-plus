import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { fetchSubject, fetchTutor } from '@/api/tutor'
import Selector from '@/components/common/selector'
import { ExamBoards } from '@/utilities/fetchExamBoard'
import { LeftArrow } from '@/images/svg'
import FilterBtn from '@/app/Tutor/TutorProfile/FilterBtn'
import HireTutorForm from '@/app/Tutor/HireTutor/HireTutorForm'
import { useMatchTutorContext } from '@/hooks/useMatchTutorContext'
import React, { FC, ReactElement, useEffect, useState } from 'react'

/** Component Props  */
interface HireTutorProps {}

const HireTutor: FC<HireTutorProps> = (): ReactElement => {
  const [subjects, setSubjects] = useState([])
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [selectSubject, setSelectedSubject] = useState('')
  const { messageData, setMessageData } = useMatchTutorContext()
  const [examBoard, setExamBoard] = useState<any>([])

  const router = useRouter()
  const tutorId: any = router.query.tutorId

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubject(e.target.value)
    const selectedOption = e.target.value
    if (!selectedOptions.includes(selectedOption)) {
      setSelectedOptions([...selectedOptions, selectedOption])
      setMessageData({
        ...messageData,
        subjects: [...selectedOptions, selectedOption],
      })
    }
  }

  const handleOptionDelete = (option: string) => {
    setSelectedOptions(
      selectedOptions.filter((selectedOption) => selectedOption !== option)
    )
    setMessageData({
      ...messageData,
      subjects: selectedOptions.filter(
        (selectedOption) => selectedOption !== option
      ),
    })
    setExamBoard(
      selectedOptions.filter((selectedOption) => selectedOption !== option)
    )
  }

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const subData: any = await fetchSubject(tutorId)
        setSubjects(subData)
      } catch (err) {
        console.log({ err })
      }
    }

    fetchSubjects()
  }, [tutorId])

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
              Book a Lesson
            </span>
          </div>
          <section>
            <div className='lg:pr-[300px]'>
              <div className='lg:w-[75%]'>
                <Selector
                  label='Search & add subjects with their level'
                  data={subjects}
                  onChange={handleSelectChange}
                />
              </div>
              <div className='flex flex-wrap mt-3 gap-2'>
                {selectedOptions?.map((item: any, index: number) => (
                  <FilterBtn
                    key={index}
                    text={item}
                    handleDelete={handleOptionDelete}
                  />
                ))}
              </div>
              <HireTutorForm tutorId={tutorId} examBoard={examBoard} />
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default HireTutor
