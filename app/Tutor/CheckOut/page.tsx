import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { fetchTutor } from '@/api/tutor'
import { LeftArrow } from '@/images/svg'
import React, { useEffect, useState } from 'react'
import CheckOutForm from '@/app/Tutor/CheckOut/CheckOutForm'
import TutorProfileDetail from '@/app/Tutor/TutorMatch/TutorProfileDetail'

const CheckOut = () => {
  const [tutor, setTutor] = useState([])
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

    fetchData()
  }, [tutorId])
  return (
    <section className='mx-auto'>
      <div className='flex md:flex-row flex-col md:justify-between'>
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
              Checkout Details
            </span>
          </div>
          <section>
            <CheckOutForm />
          </section>
        </div>
        {/*  TutorProfile Section */}
        <div className='md:w-[30%] bg-black min-h-screen flex flex-col px-[60px] p-[12px]'>
          <div className='flex justify-end'>
            <Image
              className='h-auto w-auto'
              src={require('@/resources/userLogoImage.png')}
              alt='Logo'
              width={36}
              height={36}
            />
          </div>
          <div className='flex mt-[90px] justify-center w-full text-white'>
            <TutorProfileDetail profile={tutor} loading={loading} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckOut
