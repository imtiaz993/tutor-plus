import React, { ReactElement, ReactNode, useEffect, useState } from 'react'

/* Components imports */

import { LeftArrow } from '@/images/svg'
import TutorLayout from '@/app/Tutor/TutorLayout'
import ProfileCard from '@/app/Tutor/TutorProfile/ProfileCard'
import TutorExpertiseSection from '@/app/Tutor/TutorProfile/TutorExpertiseSection'

/** Firebase import */
import { fetchTutor } from '@/api/tutor'
import { SET_LOADING, SET_TUTOR } from '@/context/TutorTypes'
import { useRouter } from 'next/router'

//hook
import { useTutorContext } from '@/hooks/useTutorContext'

/*Interfaces*/
interface TutorprofilProps {
  Layout: ReactNode
}

interface tutorProfile {}

const TutorProfile = ({ Layout }: TutorprofilProps): ReactElement => {
  const [tutorBio, setTutorBio] = useState<any>([])
  const { dispatch } = useTutorContext()
  const router = useRouter()
  const { id }: any = router.query

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: SET_LOADING, payload: true })
        const tutorData = await fetchTutor(id)
        dispatch({ type: SET_TUTOR, payload: tutorData })
        setTutorBio(tutorData)
        dispatch({ type: SET_LOADING, payload: false })
      } catch (err) {
        dispatch({ type: SET_LOADING, payload: false })
      }
    }
    fetchData()
  }, [id, dispatch])
  return (
    <>
      <section className='mx-auto lg:py-[13px] md:px-4 sm:px-6 lg:px-16 px-5'>
        <div className='cursor-pointer' onClick={() => router.back()}>
          <LeftArrow />
        </div>
        <div className='flex md:flex-row flex-col md:justify-between md:gap-32 gap:5'>
          {/* Portfolio Section  */}
          <div className='md:w-1/2'>
            <ProfileCard />
          </div>
          {/*  Expertise Section */}
          <div className='md:w-1/2'>
            <TutorExpertiseSection tutorId={id} />
          </div>
        </div>
      </section>
    </>
  )
}

TutorProfile.Layout = TutorLayout

export default TutorProfile
