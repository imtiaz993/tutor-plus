'use client'

import React, { useEffect, useState } from 'react'
import { fetchTutor, fetchTutorQulification } from '@/api/tutor'
import AnalyticSection from '@/app/TutorDashboard/Profile/AnalyticSection'
import ProfileCard from '@/app/TutorDashboard/Profile/ProfileCard'

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
  }

  // Call the fetchTutorBio function to retrieve the data
  useEffect(() => {
    fetchTutorData()
    fetchQualification()
  }, [tutorId])

  return (
    <div className='flex md:flex-row flex-col gap-3 '>
      <div className='md:basis-1/4 w-full'>
        <ProfileCard tutorData={tutorBio} qualification={qualification} />
      </div>
      <div className='md:basis-3/4 w-full'>
        <AnalyticSection />
      </div>
    </div>
  )
}

// Profile.Layout = DashboardLayout

export default Profile
