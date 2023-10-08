

import Image from 'next/image'
import Chips from '@/components/common/Chips'
import React, { FC, useEffect, useRef, useState } from 'react'
import { EditCalendar } from '@/images/svg'
import { fetchSubject } from '@/api/tutor'

interface TutorProfileProps {
  tutorData: any
  qualification: any
}

const ProfileCard: FC<TutorProfileProps> = ({
  tutorData,
  qualification,
}) => {
  const [image, setImage] = useState()
  const imageRef: any = useRef()
  const editCalendarRef: any = useRef()
  const [tutorSubjects, setTutorsubjects] = useState([])
  const handleChooseImage = ({ target: { files } }: any) => {
    try {
      setImage(files[0])
    } catch (error) {
      alert('Error in Uploading file.')
    }
  }

  const chooseImage = () => {
    if (imageRef && imageRef.current) imageRef.current.click()
  }

  const isObject = (obj: any) => typeof obj === 'object'

  // Accessing the tutorBio properties
  const fullName = `${tutorData?.firstName} ${tutorData?.lastName}`

  const handledate = (event: any) => {
    console.log(event.target.value)
  }

  const handleEditCalendarClick = () => {
    // Access the SVG element using the ref
    console.log(editCalendarRef.current)
    if (editCalendarRef && editCalendarRef.current)
      editCalendarRef.current.focus()
    // Perform any other actions you need with the SVG element
  }

  const fetchSubjects = async () => {
    try {
      const subData: any = await fetchSubject(tutorData.id)
      setTutorsubjects(subData)
    } catch (err) {
      console.log({ err })
    }
  }

  useEffect(() => {
    fetchSubjects()
  }, [tutorData?.id])

  return (
    <div className='flex flex-col mb-10'>
      <div className='sm:w-[260px] w-full h-[184px] shadow-lg'>
        <div className='flex flex-col gap-3 items-center justify-between py-3'>
          <input
            type='file'
            id='img'
            name='img'
            accept='image/png, image/jpeg'
            ref={imageRef}
            hidden
            onChange={handleChooseImage}
          />
          <h1 className='font-inter font-medium text-[12.75px]'>
            Profile Details
          </h1>
          <Image
            src={
              image
                ? isObject(image)
                  ? URL.createObjectURL(image)
                  : image
                : '/images/cardimage.png'
            }
            alt={'tutor'}
            width={96}
            height={96}
            className='w-[96px] h-[96px] rounded-full object-cover'
          />
          <p className='font-inter font-semibold text-[10.5px]'>{fullName}</p>
        </div>
      </div>
      <div className='mt-8'>
        <button
          className='sm:w-[260px] w-full h-[36px] font-inter font-medium text-[12px] text-white bg-black rounded-full flex items-center justify-center'
          onClick={chooseImage}
        >
          Change Password
        </button>
      </div>
      <div className='md:w-[260px] h-auto shadow-lg p-3 mt-[24px]'>
        <h1 className='mb-2 font-inter font-semibold text-[12.75px]'>
          Qualified Subjects
        </h1>
        <div className='flex gap-2 flex-wrap'>
          {qualification?.map((item: any, index: number) => (
            <Chips text={item} key={index} />
          ))}
        </div>
      </div>
      <div className='md:w-[260px] h-auto shadow-lg p-3 mt-[24px]'>
        <h1 className='mb-2 font-inter font-semibold text-[12.75px]'>
          Offered Subjects
        </h1>
        <div className='flex gap-2 flex-wrap'>
          {tutorSubjects?.map((item: any, index: number) => (
            <Chips text={item} key={index} />
          ))}
        </div>
      </div>
      <div className='md:w-[260px] h-auto shadow-lg p-3 mt-[24px]'>
        <h1 className='mb-2 font-inter font-semibold text-[12.75px]'>
          Set availability
        </h1>
        <div className='flex items-center gap-3'>
          <div className='cursor-pointer' onClick={handleEditCalendarClick}>
            <EditCalendar />
            <input
              type='date'
              ref={editCalendarRef}
              hidden
              onChange={handledate}
            />
          </div>
          <div className='flex gap-2'>
            <p>This Weak</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
