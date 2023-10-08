'use client'

import { useRouter } from 'next/router'
import { allFieldsEmpty } from '@/utilities/common'
import React, { useEffect, useState } from 'react'
import { Addicon, CrossIcon, LeftArrow } from '@/images/svg'
import {
  AddTutorQualification,
  addNewSubjectToTutor,
  fetchTutor,
  fetchTutorQulification,
} from '@/api/tutor'
import { fetchSubject } from '@/api/tutor'

const EditProfile = () => {
  const tutorId = 's4abCirorSn1wvBm2cKo' // TODO : Later Replace this with Login Tutor Id
  const [qualifiedSucjects, setQualifiedSucjects] = useState<any>({
    Subject: '',
    Qualification: '',
    Grade: '',
  })
  const [offeredSubjects, setOfferedSubjects] = useState<any>({
    Subject: '',
    Rate: '',
  })
  const [qualifications, setQualifications] = useState<any>([])

  const [allofferedSubject, setAllOfferedSubject] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [checkUpdate, setCheckUpdate] = useState<boolean>(false)
  const [checkInsert, setCheckInsert] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState('')
  const [selectedValues, setSelectedValues] = useState<any>([])

  /** Multiple Select Qualification */

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value)
  }

  const handleInputKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      addValue()
    }
  }

  const addValue = () => {
    if (inputValue.trim() !== '') {
      setSelectedValues((prevValues: any) => [...prevValues, inputValue])
      setInputValue('')
    }
  }

  const removeValue = (value: any) => {
    setSelectedValues((prevValues: any) =>
      prevValues.filter((v: any) => v !== value)
    )
  }

  const handleSubjectChange = (event: any) => {
    const { name, value } = event.target
    setQualifiedSucjects({ ...qualifiedSucjects, [name]: value })
  }

  /**  Multiple select Qualification */
  const handleofferSubjectChange = (event: any) => {
    const { name, value } = event.target
    setOfferedSubjects({ ...offeredSubjects, [name]: value })
  }

  /** Handle Save change Button And Send Rquest to firebase */
  const handleSaveChanges = async () => {
    if (!allFieldsEmpty(qualifiedSucjects)) saveQualification()
    if (!allFieldsEmpty(offeredSubjects)) saveOfferedSubjects()
  }

  const saveQualification = async () => {
    try {
      setLoading(true)
      const response = await AddTutorQualification({
        tutorId,
        ...qualifiedSucjects,
      })
      setQualifiedSucjects({
        Subject: '',
        Qualification: '',
        Grade: '',
      })
      setCheckUpdate(true)
      setLoading(false)
    } catch (err) {
      console.log({ err })
    } finally {
      setLoading(false)
    }
  }
  const saveOfferedSubjects = async () => {
    try {
      const newSubject = {
        ...offeredSubjects,
        Qualification: selectedValues,
      }
      await addNewSubjectToTutor(tutorId, newSubject)
      setOfferedSubjects({
        Subject: '',
        Rate: '',
      })
      setSelectedValues([])
      setCheckInsert(true)
    } catch (err) {
      console.log({ err })
    }
  }

  const fetchQualification = async () => {
    const response = await fetchTutorQulification(tutorId)
    setQualifications(response)
  }

  const fetchTutorData = async () => {
    const data: any = await fetchSubject(tutorId)
    setAllOfferedSubject(data)
  }

  const router = useRouter()

  /** fetch Tutor Subject for offeredSubjects */

  useEffect(() => {
    fetchTutorData()
  }, [tutorId, checkInsert])

  /** fetch Qualification Data */

  useEffect(() => {
    fetchQualification()
  }, [tutorId, checkUpdate])

  return (
    <section className='lg:px-[90px] px-[20px] lg:py-[34px] py-[10px]'>
      <div className='flex items-center justify-between'>
        <div
          className='cursor-pointer hover:bg-grey rounded-full p-1'
          onClick={() => router.back()}
        >
          <LeftArrow />
        </div>
        <button
          className={`rounded-full min-w-[121px] h-[36px] border px-[10px] font-inter  bg-black text-white text-[12px] ${
            allFieldsEmpty(qualifiedSucjects) &&
            allFieldsEmpty(offeredSubjects) &&
            'cursor-not-allowed'
          }`}
          disabled={
            allFieldsEmpty(qualifiedSucjects) && allFieldsEmpty(offeredSubjects)
          }
          onClick={handleSaveChanges}
        >
          {loading ? <span id='loader2'></span> : 'Save Changes'}
        </button>
      </div>
      <div className='flex lg:flex-row flex-col gap-9 mt-10 md:pl-[50px]'>
        <div className='md:basis-1/2 w-full'>
          <h1 className='font-inter font-semibold text-[24px]'>
            Qualified Subjects
          </h1>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-4'>
            <div className='w-[160px] h-[36px] border flex items-center justify-start'>
              <span className='font-inter text-[16px] font-bold ml-2'>
                Subject
              </span>
            </div>
            <div className='w-[160px] h-[36px] border flex items-center justify-start'>
              <span className='font-inter text-[16px] font-bold ml-2'>
                Qualification
              </span>
            </div>
            <div className='w-[160px] h-[36px] border flex items-center justify-start'>
              <span className='font-inter text-[16px] font-bold ml-2'>
                Grade
              </span>
            </div>
            {qualifications?.map((qulai: any, index: number) => (
              <React.Fragment key={index}>
                <div className='w-[160px] h-[36px] border flex items-center justify-start'>
                  <span className='font-inter text-[16px] font-normal ml-2'>
                    {qulai.Subject}
                  </span>
                </div>
                <div className='w-[160px] h-[36px] border flex items-center justify-start'>
                  <span className='font-inter text-[16px] font-normal ml-2'>
                    {qulai.Qualification}
                  </span>
                </div>
                <div className='w-[160px] h-[36px] border flex items-center justify-start'>
                  <span className='font-inter text-[16px] font-normal ml-2'>
                    {qulai.Grade}
                  </span>
                </div>
              </React.Fragment>
            ))}
            <div className='w-[160px] h-[36px] flex items-center justify-between border px-2'>
              <input
                type='text'
                name='Subject'
                value={qualifiedSucjects.Subject}
                className='appearance-none focus:outline-none w-full'
                placeholder='Subject'
                onChange={handleSubjectChange}
              />
              <Addicon />
            </div>
            <div className='w-[160px] h-[36px] flex items-center justify-between border px-2'>
              <input
                type='text'
                name='Qualification'
                value={qualifiedSucjects.Qualification}
                className='appearance-none focus:outline-none w-full'
                placeholder='Qualification'
                onChange={handleSubjectChange}
              />
              <Addicon />
            </div>
            <div className='w-[160px] h-[36px] flex items-center justify-between border px-2'>
              <input
                type='text'
                className='appearance-none focus:outline-none w-full'
                name='Grade'
                value={qualifiedSucjects.Grade}
                placeholder='Grade'
                onChange={handleSubjectChange}
              />
              <Addicon />
            </div>
          </div>
        </div>
        <div className='md:basis-1/2 w-full'>
          <h1 className='font-inter font-semibold text-[24px]'>
            Offered Subjects
          </h1>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-4'>
            <div className='w-[160px] h-[36px] border flex items-center justify-start'>
              <span className='font-inter text-[16px] font-bold ml-2'>
                Subject
              </span>
            </div>
            <div className='w-[160px] h-[36px] border flex items-center justify-start'>
              <span className='font-inter text-[16px] font-bold ml-2'>
                Qualification
              </span>
            </div>
            <div className='w-[160px] h-[36px] border flex items-center justify-start'>
              <span className='font-inter text-[16px] font-bold ml-2'>
                Rate / Hr
              </span>
            </div>
            {allofferedSubject?.map((sub: any, index: number) =>
              sub.Qualification?.map((level: any, index: number) => (
                <React.Fragment key={index}>
                  <div className='w-[160px] h-[36px] border flex items-center justify-start'>
                    <span className='font-inter text-[16px] font-normal ml-2'>
                      {sub.Subject}
                    </span>
                  </div>
                  <div className='w-[160px] h-[36px] border flex items-center justify-start'>
                    <span className='font-inter text-[16px] font-normal ml-2'>
                      {level}
                    </span>
                  </div>
                  <div className='w-[160px] h-[36px] border flex items-center justify-start'>
                    <span className='font-inter text-[16px] font-normal ml-2'>
                      {sub?.Rate || 23}
                    </span>
                  </div>
                </React.Fragment>
              ))
            )}
            <div className='w-[160px] h-[36px] flex items-center justify-between border px-2'>
              <input
                type='text'
                className='appearance-none focus:outline-none w-full'
                placeholder='Subject'
                name='Subject'
                value={offeredSubjects.Subject}
                onChange={handleofferSubjectChange}
              />
              <Addicon />
            </div>
            <div className='w-[160px] h-[36px] flex items-center justify-between border px-2 overflow-x-auto'>
              <ul className='flex items-center'>
                {selectedValues.map((value: any) => (
                  <li
                    key={value}
                    className='flex bg-grey rounded-full w-auto pl-1 pt-3 pb-3 pr-1 items-center text-black h-[15px]'
                  >
                    {value}
                    <div onClick={() => removeValue(value)}>
                      <CrossIcon />
                    </div>
                  </li>
                ))}
              </ul>
              <input
                type='text'
                className='appearance-none focus:outline-none w-full'
                placeholder='Qualification'
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyPress}
              />
              <Addicon />
            </div>
            <div className='w-[160px] h-[36px] flex items-center justify-between border px-2'>
              <input
                type='text'
                value={offeredSubjects.Rate}
                className='appearance-none focus:outline-none w-full'
                placeholder='Rate / Hr'
                name='Rate'
                onChange={handleofferSubjectChange}
              />
              <Addicon />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// EditProfile.Layout = DashboardLayout

export default EditProfile
