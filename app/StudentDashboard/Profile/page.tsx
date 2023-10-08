'use client'

import React, { useEffect, useState } from 'react'
import { fetchTutor, fetchTutorQulification } from '@/api/tutor'
import ProfileCard from '@/app/StudentDashboard/Profile/ProfileCard'
import AboutAvailability from '@/app/StudentDashboard/Profile/AboutAvailability'
import Link from 'next/link'
import Image from 'next/image'

const Profile = () => {
  const [tutorBio, setTutorBio] = useState<any>([])
  const [qualification, setQualification] = useState<any>([])

  const tutorId = 's4abCirorSn1wvBm2cKo' // TODO : Later Replace this with Login Tutor Id

  const fetchTutorData = async () => {
    const tutorData: any = await fetchTutor(tutorId)
    setTutorBio(tutorData)
  }

  const fetchQualification = async () => {
    const qualifier = await fetchTutorQulification(tutorId)
    setQualification(qualifier)
  };

  // Call the fetchTutorBio function to retrieve the data
  useEffect(() => {
    fetchTutorData()
    fetchQualification()
  }, [tutorId])

  return (
    <>
      <div className='flex justify-end'>
        <Image
          src='/images/svg/avatar.svg'
          width={36}
          height={36}
          alt='avatar'
          className='cursor-pointer'
        />
      </div>
      <Link href='/StudentDashboard/Dashboard'>
        <Image
          src='/images/svg/arrow-left.svg'
          width={24}
          height={24}
          alt='back'
          className='cursor-pointer'
        />
      </Link>
      <div className='flex md:flex-row flex-col gap-3 md:w-11/12 ml-auto md:gap-[10%] mt-5'>
        <div className='md:basis-1/4 w-full'>
          <ProfileCard tutorData={tutorBio} qualification={qualification} />
        </div>
        <AboutAvailability />
      </div>
    </>
  )
}

export default Profile
