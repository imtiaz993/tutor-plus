import React, { FC, ReactElement, useEffect, useState } from 'react'
import Chips from '@/components/common/Chips'
import { RatingSvg } from '@/images/svg'
import MyQualification from '@/app/Tutor/TutorProfile/MyQualificationTable'
import MyAvaliablityTable from '@/app/Tutor/TutorProfile/MyAvaliablityTable'
import OfferedSubjectTable from '@/app/Tutor/TutorProfile/OfferedSubjectTable'
import { fetchSubject, fetchTutorQualification } from '@/api/tutor'
import { useTutorContext } from '@/hooks/useTutorContext'
import { SET_TUTOR } from '@/context/TutorTypes'

/*Component Interfaces*/

interface TutorExpertiseProps {
  tutorId: any
}

const TutorExpertiseSection: FC<TutorExpertiseProps> = ({
  tutorId,
}): ReactElement => {
  const [subjects, setSubjects] = useState<any>([])
  const [qualification, setQualification] = useState([])
  const [qualificationLoading, setQualificationLoading] = useState<boolean>(false)

  useEffect(() => {
    const callQualificationApi = async () => {
      try {
        setQualificationLoading(true)
        const res = await fetchTutorQualification(tutorId)
        setQualificationLoading(false)
        setQualification(res)
      } catch (err) {
        setQualificationLoading(false)
        console.log({ err })
      }
    }
    const fetchSubjects = async () => {
      const data: any = await fetchSubject(tutorId)
      setSubjects(data)
    }

    callQualificationApi()
    fetchSubjects()
  }, [tutorId])

  return (
    <div className='mb-5'>
      <div className='mt-3'>
        <h1 className='font-inter font-semibold text-[14px]'>Subjects</h1>
        <div className='flex md:flex-row gap-3 my-4 flex-wrap'>
          {subjects?.map((item: any, index: number) => (
            <Chips text={item} key={index} />
          ))}
        </div>
        <div className=''>
          <p className='font-inter font-normal text-[12px]'>
            8.5 Hrs • 81 Lectures • All Levels
          </p>
          <div className='flex items-center gap-3 mt-3'>
            <div className='w-[47px] h-[18px] font-bold font-inter bg-[#FFC130] text-[7px] rounded-sm py-[4px] px-[6px] self-center justify-self-center'>
              Top Rated
            </div>
            <div className='flex gap-2'>
              <RatingSvg />
              <RatingSvg />
              <RatingSvg />
              <RatingSvg />
              <RatingSvg fill={false} />
              <p className='font-inter text-[10px] font-semibold '>
                4.2 (1200)
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Qualification table */}
      <MyQualification
        qualification={qualification}
        loading={qualificationLoading}
      />
      {/* My Avaliablity Table */}
      <MyAvaliablityTable />
      {/* OfferedSubjectTable */}
      <div className='flex  lg:flex-row flex-col  gap-1 flex-wrap'>
        <OfferedSubjectTable subjects={subjects} />
        <OfferedSubjectTable subjects={subjects} hideTitle={true} />
      </div>
    </div>
  )
}

export default TutorExpertiseSection
