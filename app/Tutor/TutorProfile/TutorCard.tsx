import Image from 'next/image'
import React, { FC, ReactElement } from 'react'
import { RatingSvg } from '@/images/svg'
import { useRouter } from 'next/router'
import Skeleton from 'react-loading-skeleton'
/** component Props */
interface CardProps {
  eachTutor: any
  loading: boolean
}

const TutorCard: FC<CardProps> = ({ eachTutor, loading }): ReactElement => {
  const router = useRouter()
  const handlebtnClick = (id: string) => router.push(`/TutorProfile/${id}`)
  const fullName: string =
    eachTutor && eachTutor.firstName + ' ' + eachTutor.lastName

  return (
    <div className='bg-white shadow-lg rounded-lg w-full h-auto border-[0.493939px] border-[#121212] md:px-[30px] md:py-[10px] flex md:flex-row flex-col px-2 py-2 lg:flex-nowrap flex-wrap'>
      <div className='flex-shrink-0 md:w-auto w-full h-auto md:block flex-2'>
        <Image
          src={require('@/resources/cardimage.png')}
          placeholder='blur'
          height='143'
          width='192'
          alt='user'
          className='w-full md:w-auto h-auto'
        />
      </div>
      {loading ? (
        <Skeleton containerClassName='flex-1' count={5} className='ml-2' />
      ) : (
        <div className='flex flex-col ml-3 flex-1 md:max-h-[100px]'>
          <h1 className='font-inter font-bold text-[13px]'>{fullName}</h1>
          <h1 className='font-inter font-light text-[9px] my-1'>
            {eachTutor?.university}
          </h1>
          <p className='font-inter font-medium text-[9px] text-justify'>
            {eachTutor?.description?.substring(0, 107)}
          </p>
          <div className='mt-3 pb-5'>
            <div className='flex gap-2'>
              <RatingSvg />
              <RatingSvg />
              <RatingSvg />
              <RatingSvg />
              <RatingSvg fill={false} />
              <p className='font-inter text-[9px] font-semibold '>
                {eachTutor?.rating}(1200)
              </p>
            </div>
            <p className='font-inter font-normal text-[9px] mb-2'>
              8.5 Hrs • 81 Lectures • All Levels
            </p>
            <div className='w-[47px] h-[18px] font-bold font-inter bg-[#FFC130] text-[7px] rounded-sm flex items-center justify-center'>
              Top Rated
            </div>
          </div>
        </div>
      )}
      {loading ? (
        <Skeleton containerClassName='flex-1' className='ml-4' count={5} />
      ) : (
        <div className='flex-1 flex md:items-center flex-col md:justify-center justify-start gap-2'>
          <div>
            {' '}
            <span className='font-inter font-semibold text-[12px] ml-2 '>
              {`$ ${eachTutor?.price?.toFixed(2)} / Hr`}
            </span>
            <button
              className='flex gap-3 min-w-[92px] h-[36px] sm:py-[10px] items-center justify-between px-3 bg-black text-white rounded-full  text-[14px] font-semibold py-2'
              onClick={() => handlebtnClick(eachTutor.id)}
            >
              <span>Book Tutor</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TutorCard
