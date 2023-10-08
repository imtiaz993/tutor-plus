import Image from 'next/image'
import TutorForm from '@/app/Tutor/ContactTutor/TutorForm'
import React, { FC, ReactElement, useEffect, useState } from 'react'
import TutorProfileDetail from '@/app/Tutor/TutorMatch/TutorProfileDetail'

import { LeftArrow } from '@/images/svg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { fetchLessons, fetchTutor } from '@/api/tutor'

type ContactTutorProps = {}

const ContactTutor: FC<ContactTutorProps> = (): ReactElement => {
  const [tutor, setTutor] = useState([])
  const [lessons, setLessons] = useState([])
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const tutorId: any = router.query.tutorId

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const tutorData: any = await fetchTutor(tutorId)
        setTutor(tutorData)
        setLoading(false)
      } catch (err) {
        setLoading(false)
        console.log({ err })
      }
    }
    const fetchLesson = async () => {
      try {
        const lessonsData: any = await fetchLessons(tutorId)
        setLessons(lessonsData)
      } catch (err) {
        console.log({ err })
      }
    }

    fetchData()
    fetchLesson()
  }, [tutorId])

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
              Message
            </span>
          </div>
          <section>
            <TutorForm tutorData={tutor} />
          </section>
        </div>
        {/*  TutorProfile Section */}
        <div className='md:w-[30%] bg-black h-auto flex flex-col px-[60px] p-[12px]'>
          <div className='flex justify-end '>
            <Image
              className='h-auto w-auto'
              src={require('@/resources/userLogoImage.png')}
              alt='Logo'
              width={36}
              height={36}
            />
          </div>
          <div className='flex mt-[48px] justify-center w-full text-white'>
            <TutorProfileDetail profile={tutor} loading={loading} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactTutor
