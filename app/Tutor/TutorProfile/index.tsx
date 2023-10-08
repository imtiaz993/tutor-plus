import { useRouter } from 'next/router'
import Header from '@/app/Tutor/TutorProfile/header'
import TutorLayout from '@/app/Tutor/TutorLayout'
import TutorCard from '@/app/Tutor/TutorProfile/TutorCard'
import { fetchAllTutors, possibleSubjects } from '@/api/tutor'
import React, { ReactElement, ReactNode, useEffect, useState } from 'react'
import { Notes } from '@/images/svg'

/*Interfaces*/

interface TutorsprofilProps {
  Layout: ReactNode
}

const TutorsProfile = ({ Layout }: TutorsprofilProps): ReactElement => {
  const [possiblesubjects, setPossibleSubjects] = useState([])
  const [tutorloading, setTutorLoading] = useState<boolean>(false)
  const [tutors, setTutors] = useState([{}])
  const [showCatMenu, setShowCatMenu] = useState<boolean>(false)
  const [showQualiMenu, setShowQualiMenu] = useState<boolean>(false)
  const [showSortMenu, setShowSortMenu] = useState<boolean>(false)
  const [filterSubject, setFilterSubject] = useState('')
  const [sort, setSort] = useState('')
  const [selectedQualification, setSelectedQualification] = useState<any>([])
  const [filterQualification, setFilterQualification] = useState<any>([])

  const router = useRouter()

  const handleShowCatMenu = () => setShowCatMenu(!showCatMenu)
  const handleQualiMenu = () => setShowQualiMenu(!showQualiMenu)

  const handleSelectedSubject = (subject: string) => {
    setFilterSubject(subject)
    const qualificationObj: any = Array.isArray(possiblesubjects)
      ? possiblesubjects.find((sub: any) => sub.Subject === subject)
      : null
    setFilterQualification(
      qualificationObj.Qualification
        ? qualificationObj.Qualification['A-Level']
        : ''
    )
    setShowCatMenu(false)
  }

  const handleSelectedQualification = (text: string) => {
    setSelectedQualification([text])
    setShowQualiMenu(false)
  }
  const handleSort = () => {
    setShowSortMenu(!showSortMenu)
  }
  const handleClearAll = () => {
    setFilterSubject('')
    setSort('')
    setSelectedQualification([])
  }

  const handleSelectedSort = (text: string) => {
    setSort(text)
    setShowSortMenu(false)
  }
  const fetchTutors = async (filter: {}) => {
    try {
      setTutorLoading(true)
      const response: any = await fetchAllTutors(filter)
      setTutors(response)
      setTutorLoading(false)
    } catch (e) {
      setTutorLoading(false)
      console.log({ e })
    }
  }
  const fetchPossibleSubject = async () => {
    try {
      const res = await possibleSubjects()
      setPossibleSubjects(res)
    } catch (err) {
      console.log(err)
    }
  }
  const handleMatchTutor = () => router.push('/TutorMatch')
  useEffect(() => {
    fetchPossibleSubject()
  }, [])

  useEffect(() => {
    fetchTutors({ filterSubject, selectedQualification, sort })
  }, [filterSubject, selectedQualification, sort])

  return (
    <section className='mx-auto lg:py-[13px] md:px-4 sm:px-6 lg:px-16 px-5'>
      <div className='mb-5'>
        <Header
          possiblesubjects={possiblesubjects}
          handleSelectedSubject={handleSelectedSubject}
          filterQualification={filterQualification}
          showQualiMenu={showQualiMenu}
          handleQualiMenu={handleQualiMenu}
          handleSelectedQualification={handleSelectedQualification}
          handleClearAll={handleClearAll}
          handleSort={handleSort}
          showSortMenu={showSortMenu}
          handleSelectedSort={handleSelectedSort}
        />
        {/* {Tutor cards} */}
        <div className='flex items-start justify-between mt-7'>
          {tutorloading ? (
            <div className='m-auto mt-11 text-black font-medium'>
              Loading ...
            </div>
          ) : tutors.length === 0 ? (
            'There is no matching tutor'
          ) : (
            <div className='w-2/3'>
              {tutors?.map((item, index) => (
                <div className='w-full px-2  mb-4' key={index}>
                  <TutorCard eachTutor={item} loading={tutorloading} />
                </div>
              ))}
            </div>
          )}
          <div className='w-1/4 md:mt-0 mt-2 border rounded-[41px] pt-5 px-5 pb-10'>
            <p className='font-bold text-center mb-7'>Not sure what you are looking for?</p>
            <p className='font-bold text-center mb-10'>Try a tutor matching request</p>
            <button
              className='flex gap-3 w-full min-w-[160px] sm:py-[10px] items-center justify-between px-3 bg-[#FFC130] rounded-full  text-[14px] font-semibold py-2'
              onClick={handleMatchTutor}
            >
              <span>Tutor Matching Request </span> <Notes />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

TutorsProfile.Layout = TutorLayout

export default TutorsProfile
