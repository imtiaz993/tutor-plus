'use client'

import React, { useEffect, useState } from 'react'
import { fetchTutor, fetchTutorQulification } from '@/api/tutor'
import AnalyticSection from '@/app/TutorDashboard/Dashboard/AnalyticSection'
import ProfileCard from '@/app/TutorDashboard/Dashboard/ProfileCard'
import Image from 'next/image'

const Dashboard = () => {
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
  }

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
      <div className='flex md:flex-row flex-col gap-3 '>
        <div className='w-full md:w-[95%] ml-auto'>
          <AnalyticSection />
        </div>
      </div>
    </>
  )
}

// Profile.Layout = DashboardLayout

export default Dashboard
