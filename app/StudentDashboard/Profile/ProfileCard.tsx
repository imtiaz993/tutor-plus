

import Image from 'next/image'
import Chips from '@/components/common/Chips'
import React, { FC, useEffect, useRef, useState } from 'react'
import { EditCalendar } from '@/images/svg'
import { fetchSubject } from '@/api/tutor'
import BlackButton from '@/components/common/blackbutton'

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
      <div className='sm:w-[260px] w-full h-[195px] shadow-md'>
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
          <div>
            <p className='font-inter font-semibold text-[10.5px]'>{fullName}</p>
            <p className='font-inter text-[10.5px] mt-1'>Java Expert</p>
          </div>
        </div>
      </div>
      <div className='md:w-[350px]  p-3 mt-[24px]'>
        <div className='flex justify-between items-center'>
          <h1 className='mb-2 font-inter font-semibold text-2xl'>
            Qualified Subjects
          </h1>
          <BlackButton
            text='Edit'
            styles='text-sm py-[6px]'
          />
        </div>
        <div className='flex gap-2 flex-wrap'>
          {qualification?.map((item: any, index: number) => (
            <Chips text={item} key={index} styles="text-xs !py-1 !px-1.5 min-w-[auto]" />
          ))}
        </div>
      </div>
      <div className='md:w-[350px] p-3 mt-[24px]'>
        <div className='flex justify-between items-center'>
          <h1 className='mb-2 font-inter font-semibold text-2xl'>
            Offered Subjects
          </h1>
          <BlackButton
            text='Edit'
            styles='text-sm py-[6px]'
          />
        </div>
        <div className='flex gap-2 flex-wrap'>
          {tutorSubjects?.map((item: any, index: number) => (
            <Chips text={item} key={index} styles="text-xs !py-1 !px-1.5 min-w-[auto]" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
